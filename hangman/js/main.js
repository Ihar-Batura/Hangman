const body = document.querySelector('body');

// main container
const container = document.createElement('div');
container.className = 'container';
body.appendChild(container);

// logo text
const logo = document.createElement('h1');
logo.className = 'logo';
logo.innerText = 'HANGMAN GAME';
container.appendChild(logo);

// game container
const gameContainer = document.createElement('div');
gameContainer.className = 'game-container';
container.appendChild(gameContainer);

// 1 first box
const pictureBox = document.createElement('div'); // picture box
pictureBox.className = 'picture-box';
gameContainer.appendChild(pictureBox);

const picture = document.createElement('div'); // picture
picture.className = 'picture';
picture.innerHTML =
  '<img class ="hangman-img" src="./assets/images/hangman-0.svg" alt="hangman image">';
pictureBox.appendChild(picture);

const guesses = document.createElement('h4'); // guesses field
guesses.className = 'guesses';
guesses.innerHTML = 'Incorrect guesses: <b class ="incorrect-text">0 / 6</b>';
pictureBox.appendChild(guesses);

// 2 second box
const gameBox = document.createElement('div'); // game box
gameBox.className = 'game-box';
gameContainer.appendChild(gameBox);

const lettersDisplay = document.createElement('ul'); // word display
lettersDisplay.className = 'word-display';
gameBox.appendChild(lettersDisplay);

const hint = document.createElement('h4'); // hint text
hint.className = 'hint-text';
hint.innerHTML = 'Hint: <b class ="hint"></b>';
gameBox.append(hint);

const keyboard = document.createElement('div'); // keyboard
keyboard.className = 'keyboard';
gameBox.append(keyboard);

// contacts
const contacts = document.createElement('div');
contacts.className = 'contacts';
contacts.innerHTML = `Ihar Batura
      <a href="https://github.com/Ihar-Batura" target="_blank"> <img src="./assets/images/gitIcon.png" alt="git icon" /></a>`;
container.appendChild(contacts);

//Modal window
const modal = document.createElement('div'); // modal
modal.className = 'modal';
container.before(modal);

const modalContent = document.createElement('div'); // modal container
modalContent.className = 'modal-content';
modal.appendChild(modalContent);

const modalTitle = document.createElement('h4'); // modal title
modalTitle.className = 'modal-title';
modalTitle.innerText = 'Game Over!';
modalContent.appendChild(modalTitle);

const modalImg = document.createElement('div'); // modal img
modalImg.className = 'modal-img';
modalImg.innerHTML =
  '<img class="modalImg-win"  src="./assets/images/lost.gif" alt="lost">';
modalContent.appendChild(modalImg);

const answer = document.createElement('p'); // modal answer
answer.className = 'answer';
modalContent.appendChild(answer);

const btnPlayAgain = document.createElement('button'); // modal btn
btnPlayAgain.className = 'play-again';
btnPlayAgain.innerText = 'Play Again';
modalContent.appendChild(btnPlayAgain);
