console.log("The game begins");

let playerTurn = true;
let player1Score = 0;
let player2Score = 0;
let currentRoll = 0;
let gameStarted = false;  // Track if the game has started

const player1NameInput = document.getElementById("player1Name");
const player2NameInput = document.getElementById("player2Name");
const diceDisplay = document.getElementById("diceVal");
const diceImg = document.getElementById("diceImg");
const player1ScoreDisplay = document.getElementById("player1Score");
const player2ScoreDisplay = document.getElementById("player2Score");
const rollBtn = document.getElementById("rollBtn");
const saveBtn = document.getElementById("saveBtn");
const resetBtn = document.getElementById("resetBtn");
const winnerMessage = document.getElementById("winnerMessage");

function rollDice() {
    if (!gameStarted) {
        gameStarted = true;
        disableNameEditing();
    }

    // Force reflow to restart animation
    diceImg.style.animation = "none"; 
    diceImg.offsetHeight;  // Trigger reflow
    diceImg.style.animation = "rollDice 0.5s ease-in-out";

    setTimeout(() => {
        currentRoll = Math.floor(Math.random() * 6) + 1;
        diceImg.src = `src/face${currentRoll}.png`;
        diceDisplay.innerText = currentRoll;
        console.log(`Rolled: ${currentRoll}`);

        // Remove animation after roll
        diceImg.style.animation = "";
        
        if (currentRoll === 1) {
            switchTurn();
        }
    }, 500); // Match animation duration
}


function saveScore() {
    if (!gameStarted) return;  // Prevent saving before game starts

    if (playerTurn) {
        if (currentRoll !== 1) {
            player1Score += currentRoll;
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
    updateActivePlayer();
}

function announceWinner(winner) {
    winnerMessage.innerText = `${winner} wins the game! 🎉`;
    winnerMessage.style.display = "block";
    setTimeout(resetGame, 3000);
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    currentRoll = 0;
    gameStarted = false;
    player1ScoreDisplay.innerText = player1Score;
    player2ScoreDisplay.innerText = player2Score;
    diceDisplay.innerText = currentRoll;
    winnerMessage.style.display = "none";
    playerTurn = true;
    enableNameEditing();
    updateActivePlayer();
}

function disableNameEditing() {
    player1NameInput.disabled = true;
    player2NameInput.disabled = true;
}

function enableNameEditing() {
    player1NameInput.disabled = false;
    player2NameInput.disabled = false;
}

function updateActivePlayer() {
    document.getElementById("player1Box").classList.toggle("active-player", playerTurn);
    document.getElementById("player2Box").classList.toggle("active-player", !playerTurn);
}

rollBtn.addEventListener("click", rollDice);
saveBtn.addEventListener("click", saveScore);
resetBtn.addEventListener("click", resetGame);
