'use strict';

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const total0 = document.querySelector('.total--0');
const total1 = document.querySelector('.total--1');
const reset = document.querySelector('.reset');
const roll = document.querySelector('.roll');
const dice = document.querySelector('.dice');
const boxScore0 = document.getElementById('current--0');
const boxScore1 = document.getElementById('current--1');
const hold = document.querySelector('.hold');
dice.classList.add('.hidden');
let playing, scoreArray, totalScore, activePlayer, currentScore
// let totalScore = 0;
// let activePlayer = 0;
// let currentScore = 0;
// const scoreArray = [0, 0];
// renew the game
const initBlock = function () {
	playing = true;
	totalScore = 0;
	activePlayer = 0;
	currentScore = 0;
	scoreArray = [0, 0];

	total0.textContent = 0;
	total1.textContent = 0;
	boxScore0.textContent = 0;
	boxScore1.textContent = 0;
	player1.classList.add('active--player');
	player2.classList.remove('active--player');
	player1.classList.remove('winner');
	player2.classList.remove('winner');
	dice.classList.add('hidden');
};
initBlock();
// function to switch players

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('active--player');
  player2.classList.toggle('active--player');
};
player1.classList.add('active--player');

roll.addEventListener('click', () => {
  if (playing) {
    const chancenumber = Math.trunc(Math.random() * 5 + 1);
    dice.classList.remove('hidden');
    dice.src = `${chancenumber}.PNG`;
    if (chancenumber !== 1) {
      currentScore += chancenumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // function call
      switchPlayer();
    }
  }
});

hold.addEventListener('click', () => {
  if (playing) {
    scoreArray[activePlayer] += currentScore;
    document.querySelector(`.total--${activePlayer}`).textContent =
      scoreArray[activePlayer];

    if (scoreArray[activePlayer] >= 30) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('active--player');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('winner');
      dice.classList.add('hidden');
    }
    // function call
    else {
      switchPlayer();
    }
  }
});

// resetting the game
reset.addEventListener('click',initBlock);
