// HTML BODY first container (img and name)
let container = document.createElement('div');
container.className = 'container';

let hangmanBox = document.createElement('div');
hangmanBox.className = 'hangman-box';
hangmanBox.innerHTML = '<img class ="hangman-img" src="./assets/images/hangman-0.svg" alt="hangman image">';

let gameName = document.createElement('h1');
gameName.className = 'game-name';
gameName.innerText = 'HANGMAN GAME';


document.body.prepend(container);
container.append(hangmanBox);
hangmanBox.append(gameName);

// HTML BODY second container (play-box)
let gameBox = document.createElement('div');
gameBox.className = 'game-box';

container.append(gameBox);

let lettersDisplay = document.createElement('ul');
lettersDisplay.className = 'word-display';

gameBox.append(lettersDisplay);


let hintText = document.createElement('h4');
hintText.className = 'hint-text';
hintText.innerHTML = 'Hint: <b class ="hint">Lorem ipsum dolor sit amet.</b>';

gameBox.append(hintText);

let guessText = document.createElement('h4');
guessText.className = 'guesses-text';
guessText.innerHTML = 'Incorrect guesses: <b class ="incorrect-text">0 / 6</b>';   

gameBox.append(guessText);

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';

gameBox.append(keyboard);


//HTML BODY Modal window
let modal = document.createElement('div');
modal.className = 'modal';

container.before(modal);

let modalContent = document.createElement('div');
modalContent.className = 'modal-content';
modalContent.innerHTML = '<img class ="modal-img" src="./assets/images/lost.gif" alt="lost">';

modal.prepend(modalContent);

let modalTitle = document.createElement('h4');
modalTitle.className = 'modal-title';
modalTitle.innerText = 'Game Over!';

modalContent.append(modalTitle);

let answer = document.createElement('p');
answer.className = 'answer';
answer.innerHTML = 'The correct world was: <b>Lorem</b>';

modalTitle.after(answer);

let playAgain = document.createElement('button');
playAgain.className = 'play-again';
playAgain.innerText = 'Play Again'

answer.after(playAgain);



