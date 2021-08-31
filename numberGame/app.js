const playSubmit = document.querySelector(".playForm");
const generateInput = document.querySelector(".generateNumber input");
const guessInput = document.querySelector(".guessNumber input");
const gameResultBox = document.querySelector(".gameResult");
const gameResultNumber = document.querySelector(".gameResult span");
const gameResult = document.querySelector(".gameResult h3");
const min = 0;

function playBtnClick(event) {
  event.preventDefault();
  const guessValue = parseInt(guessInput.value, 10);
  resultPrint(guessValue);
}

function resultPrint(guessValue) {
  const generateValue = generateInput.value;
  const randomNumber = getRandomNumber(generateValue);
  gameResultBox.classList.remove("hidden");
  gameResultNumber.innerText = `You chose: ${guessValue} the machine chose: ${randomNumber}.`;
  if (guessValue === randomNumber) {
    gameResult.innerText = "You won!";
    console.log(gameResult);
  } else {
    gameResult.innerText = "You lost!";
    console.log(gameResult);
  }
}

function getRandomNumber(max) {
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (mamaxValue - min + 1)) + min;
}

playSubmit.addEventListener("submit", playBtnClick);
