//Word List questions and answers
const wordList = [
    {
        word: "liverpool",
        hint: "The best football team in England."
    },
    {
        word: "armstrong",
        hint: "First man on the Moon."
    },
    {
        word: "vatican",
        hint: "The smallest country in Europe."
    },
    {
        word: "everest",
        hint: "A highest peak on the Earth."
    },
    {
        word: "seven",
        hint: "How many left-handers are there in the world."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    },
    {
        word: "jupiter",
        hint: "On which planet does it regularly rain diamonds."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "ladoga",
        hint: "The lake is the largest in Europe."
    },
    {
        word: "cats",
        hint: "Who sleeps more than half of their life."
    },
    {
        word: "mallorca",
        hint: "One of the Spanish Balearic Islands in the Mediterranean Sea."
    },
    {
        word: "portugal",
        hint: "In what country is Lisbon located."
    },
    {
        word: "australia",
        hint: "The smallest continent in the world."
    },
    {
        word: "weddell",
        hint: "The coldest sea."
    },
    {
        word: "ireland",
        hint: "Which country has never had moles."
    }
];


//Code for logic 
const wordDisplay = document.querySelector(".word-display");
const hangmanImage = document.querySelector(".hangman-img");
const guessesText = document.querySelector(".incorrect-text");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".modal");
const playAgainBtn = document.querySelector(".play-again");
let currentWord;
let wrongGuessCount;
let correctLetter;
const maxGuesses = 6;

//Code for reset game
const resetGame = () => {
    correctLetter = [];
    wrongGuessCount = 0;
    hangmanImage.src = `./assets/images/hangman-${wrongGuessCount}.svg`;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join(""); 
    gameModal.classList.remove("show");
    
}


//Add random word and hint from wordList
const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    //console.log(word);
    document.querySelector(".hint").innerText = hint;
    resetGame();
}

const gameOver = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? `You found the word:` : `The correct word was:`;
        gameModal.querySelector(".modal-img").src = `./assets/images/${isVictory ? 'win' : 'lost'}.gif`;
        gameModal.querySelector(".modal-title").innerText = `${isVictory ? 'Congratulations!' : 'Game Over!'}`;
        gameModal.querySelector(".answer").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
    }, 300);
}


const initGame = (button, clickedLetter) => {
    //Check letters
    if (currentWord.includes(clickedLetter)) {
        //Show all correct letters
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetter.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        })
    } else {
        wrongGuessCount += 1;
        hangmanImage.src = `./assets/images/hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (correctLetter.length === currentWord.length) return gameOver(true);
}


//Add keyboard buttons
for (let i = 97; i <= 122; i += 1) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}


getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);


// Code for original Keyboard
const keyboardList = document.querySelectorAll('.keyboard button');

document.addEventListener('keydown', (event) => {
    keyboardList.forEach((element, index) => {
        if (element.textContent === event.key || element.textContent.toUpperCase() === event.key.toUpperCase()) {
          keyboardList[index].disabled = true;
        }
    });

    if (event.code >= 'KeyA' && event.code <= 'KeyZ') {
      let keyLetter = event.key.toLowerCase();
      let btnKey = `<button>${keyLetter}</button>`;
      initGame(btnKey, keyLetter);
    }
  });


  