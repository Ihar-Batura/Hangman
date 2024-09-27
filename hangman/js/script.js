//Words List questions and answers
const wordsList = [
  {
    word: 'liverpool',
    hint: 'The best football team in England.',
  },
  {
    word: 'armstrong',
    hint: 'First man on the Moon.',
  },
  {
    word: 'vatican',
    hint: 'The smallest country in Europe.',
  },
  {
    word: 'everest',
    hint: 'A highest peak on the Earth.',
  },
  {
    word: 'seven',
    hint: 'How many left-handers are there in the world.',
  },
  {
    word: 'brilliant',
    hint: 'Exceptionally clever, talented, or impressive.',
  },
  {
    word: 'jupiter',
    hint: 'On which planet does it regularly rain diamonds.',
  },
  {
    word: 'butterfly',
    hint: 'An insect with colorful wings and a slender body.',
  },
  {
    word: 'ladoga',
    hint: 'The lake is the largest in Europe.',
  },
  {
    word: 'cats',
    hint: 'Who sleeps more than half of their life.',
  },
  {
    word: 'mallorca',
    hint: 'One of the Spanish Balearic Islands in the Mediterranean Sea.',
  },
  {
    word: 'portugal',
    hint: 'In what country is Lisbon located.',
  },
  {
    word: 'australia',
    hint: 'The smallest continent in the world.',
  },
  {
    word: 'weddell',
    hint: 'The coldest sea.',
  },
  {
    word: 'ireland',
    hint: 'Which country has never had moles.',
  },
];

const modalWindow = document.querySelector('.modal');
const hangmanImg = document.querySelector('.hangman-img');
const wrongGuess = document.querySelector('.incorrect-text');
const display = document.querySelector('.word-display');
const hintText = document.querySelector('.hint');
const keyboardBox = document.querySelector('.keyboard');
const modalTitleText = document.querySelector('.modal-title');
const modalImgChoose = document.querySelector('.modalImg-win');
const modalAnswerChoose = document.querySelector('.answer');
const playAgain = document.querySelector('.play-again');
let currentWord;
let currentHint;
let checkCurrentWord;

let lastRandomNumber;
let countWrongGuess;
const maxWrongGuess = 6;

console.log(wordsList);

function startGame() {
  countWrongGuess = 0;
  wrongGuess.innerText = `${countWrongGuess} / ${maxWrongGuess}`;
  closeModal();
  changeImg();
  getWordAndHint();
  createButtons();

  console.log(countWrongGuess);
}
startGame();

function randomNumber(min, max) {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

function getWordAndHint() {
  let numberWord = randomNumber(0, 14);
  numberWord =
    numberWord === lastRandomNumber ? randomNumber(0, 14) : numberWord;
  lastRandomNumber = numberWord;
  currentWord = wordsList[numberWord].word;
  currentHint = wordsList[numberWord].hint;
  checkCurrentWord = currentWord.split('');
  console.log(currentWord);
  display.innerHTML = currentWord
    .split('')
    .map((letter) => `<li class="letter">${letter}</li>`)
    .join('');
  console.log(checkCurrentWord);
  hintText.innerText = `${currentHint}`;
}

function createButtons() {
  keyboardBox.innerHTML = '';
  for (let i = 97; i <= 122; i++) {
    const button = document.createElement('button');
    button.innerText = String.fromCharCode(i);
    keyboardBox.appendChild(button);
    button.addEventListener('click', () => {
      checkLetter(button.innerText.toLocaleLowerCase());
    });
  }
}

function checkLetter(letter) {
  const keyboardButtons = document.querySelectorAll('.keyboard button');
  keyboardButtons.forEach((btn) => {
    if (btn.innerText.toLowerCase() === letter && btn.disabled === false) {
      btn.disabled = true;

      if (currentWord.includes(letter)) {
        const listLetters = document.querySelectorAll('.letter');
        listLetters.forEach((list) => {
          if (list.innerText.toLowerCase() === letter) {
            list.classList.add('show');
          }
        });
        checkCurrentWord = checkCurrentWord.filter((el) => el !== letter);
        if (checkCurrentWord.length < 1) {
          showModal();
        }
      } else {
        countWrongGuess++;
        changeImg();
        if (countWrongGuess >= maxWrongGuess) {
          showModal();
        }
      }
    }
  });
  wrongGuess.innerText = `${countWrongGuess} / ${maxWrongGuess}`;
}

function changeImg() {
  hangmanImg.src = `./assets/images/hangman-${countWrongGuess}.svg`;
}

function showModal() {
  let isWin = countWrongGuess < maxWrongGuess;
  modalWindow.classList.add('show');
  modalTitleText.innerText = isWin ? 'Congratulations!' : 'Game Over!';
  modalImgChoose.src = `./assets/images/${isWin ? 'win' : 'lost'}.gif`;
  modalAnswerChoose.innerHTML = `The right word: ` + `<b>${currentWord}<b/>`;
}

function closeModal() {
  modalWindow.classList.remove('show');
}

playAgain.addEventListener('click', startGame);

document.addEventListener('keydown', (event) => {
  checkLetter(event.key.toLowerCase());
});
