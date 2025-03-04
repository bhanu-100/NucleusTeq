console.log("The game begins");

let playerTurn = true;
let player1Score = 0;
let player2Score = 0;
let currentRoll = 0;

const player1NameInput = document.getElementById("player1Name");
const player2NameInput = document.getElementById("player2Name");
const diceDisplay = document.getElementById("diceVal");
const diceImg = document.getElementById("diceImg");
const player1ScoreDisplay = document.getElementById("player1Score");
const player2ScoreDisplay = document.getElementById("player2Score");
const rollBtn = document.getElementById("rollBtn");
const saveBtn = document.getElementById("saveBtn");
const resetBtn = document.getElementById("resetBtn");
function rollDice() {
    currentRoll = Math.floor(Math.random() * 6) + 1;
    diceImg.src = `./face${currentRoll}.png`;
    diceDisplay.innerText = currentRoll;
    console.log(`Rolled: ${currentRoll}`);

    if (currentRoll === 1) {
        switchTurn();
    }
}

function saveScore() {
    if (playerTurn) {
        if (currentRoll !== 1) {
            player1Score += currentRoll;
            player1ScoreDisplay.innerText = player1Score;
        } else {
            player1Score = 0;
            player1ScoreDisplay.innerText = player1Score;
        }
        if (player1Score >= 100) {
            announceWinner(player1NameInput.value);
            return;
        }
    } else {
        if (currentRoll !== 1) {
            player2Score += currentRoll;
            player2ScoreDisplay.innerText = player2Score;
        } else {
            player2Score = 0;
            player2ScoreDisplay.innerText = player2Score;
        }
        if (player2Score >= 100) {
            announceWinner(player2NameInput.value);
            return;
        }
    }
    switchTurn();
}

function switchTurn() {
    currentRoll = 0;
    diceDisplay.innerText = currentRoll;
    playerTurn = !playerTurn;
}

function announceWinner(winner) {
    alert(`${winner} wins the game! 🎉`);
    resetGame();
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    currentRoll = 0;
    player1ScoreDisplay.innerText = player1Score;
    player2ScoreDisplay.innerText = player2Score;
    diceDisplay.innerText = currentRoll;
    playerTurn = true;
}

rollBtn.addEventListener("click", rollDice);
saveBtn.addEventListener("click", saveScore);
resetBtn.addEventListener("click", resetGame);
