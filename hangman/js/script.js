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

const hangmanImg = document.querySelector('.picture');
const wrongGuess = document.querySelector('.incorrect-text');
const display = document.querySelector('.word-display');
const hintText = document.querySelector('.hint');
const keyboardBox = document.querySelector('.keyboard');
const modalTitleText = document.querySelector('.modal-title');
const modalImgChoose = document.querySelector('.modal-img');
const modalAnswerChoose = document.querySelector('.answer');
const playAgain = document.querySelector('.play-again');
let currentWord;
let currentHint;
let lastRandomNumber;
let countWrongGuess = 0;
const maxWrongGuess = 6;

console.log(wordsList);

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
  console.log(currentWord);
  hintText.innerText = `${currentHint}`;
}
getWordAndHint();

function createButtons() {
  for (let i = 97; i <= 122; i++) {
    const button = document.createElement('button');
    button.innerText = String.fromCharCode(i);
    keyboardBox.appendChild(button);
    button.addEventListener('click', () => {
      button.disabled = true;
      console.log(button.innerText);
      checkLetter(button.innerText.toLocaleLowerCase());
    });
  }
}
createButtons();

function checkLetter(letter) {
  if (currentWord.includes(letter)) {
    console.log('great');
  } else {
    console.log('wrong');
    countWrongGuess++;
  }
  console.log(countWrongGuess);
  wrongGuess.innerText = `${countWrongGuess} / ${maxWrongGuess}`;
}
