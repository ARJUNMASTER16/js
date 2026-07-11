const randomNumber = parseInt(Math.random() * 100) + 1;
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guesses=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startover=document.querySelector('.resultParas');
const p=document.createElement('p');

let previousGuesses=[];
let attempts=1;
let playgame=true;

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess= parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        displaymessage('Please enter a valid number');
    } else if(guess < 1 || guess > 100){
        displaymessage('Please enter a number between 1 and 100');
    } else {
        previousGuesses.push(guess);
        if(attempts === 11){
            displayGuess(guess);
            displaymessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displaymessage(`Congratulations! You guessed the number in ${attempts} attempts.`);
        endGame();
    } else if(guess < randomNumber){
        displaymessage('Your guess is too low.');
    } else {
        displaymessage('Your guess is too high.');
    }
}

function displayGuess(guess){
    userInput.value='';
    guesses.innerHTML+= `${guess}, `;
    attempts++;
    remaining.innerHTML= `${11 - attempts}`;
}

function displaymessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML='<h2 id="newGame">Start New Game</h2>';
    startover.appendChild(p);
    playgame=false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100) + 1;
        previousGuesses=[];
        attempts=1;
        guesses.innerHTML='';
        remaining.innerHTML='10';
        lowOrHi.innerHTML='';
        p.parentNode.removeChild(p);
        userInput.removeAttribute('disabled');
        startover.removeChild(p);
        
        playgame=true;
    });
}




