document.getElementById("start-btn").addEventListener("click", startQuiz);

document.getElementById("restart-btn").addEventListener("click", () => {
    location.reload();
});

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;

async function startQuiz() {
    const category = document.getElementById("category").value;
    const difficulty = document.getElementById("difficulty").value;
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
    
    const response = await fetch(url);
    const data = await response.json();
    questions = data.results;
    
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endGame();
        return;
    }

    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerText = `Q${currentQuestionIndex + 1}: ${questionData.question}`;
    
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    
    let options = [...questionData.incorrect_answers, questionData.correct_answer];
    options = options.sort(() => Math.random() - 0.5);
    
    const optionLabels = ['A', 'B', 'C', 'D'];
    options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = `${optionLabels[index]}. ${option}`;
        button.addEventListener("click", () => checkAnswer(button, option, questionData.correct_answer));
        optionsContainer.appendChild(button);
    });
    
    startTimer();
}

function startTimer() {
    let timeLeft = 15;
    document.getElementById("time").innerText = timeLeft;
    
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            showCorrectAnswer();
            setTimeout(() => {
                currentQuestionIndex++;
                loadQuestion();
            }, 2000);
        }
    }, 1000);
}

function checkAnswer(button, selected, correct) {
    clearInterval(timer);
    if (selected === correct) {
        button.style.backgroundColor = "#28a745";
        button.style.color = "white";
        score++;
        document.getElementById("score-value").innerText = score;
    } else {
        button.style.backgroundColor = "#dc3545";
        button.style.color = "white";
        showCorrectAnswer();
    }
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

function showCorrectAnswer() {
    document.querySelectorAll("#options button").forEach(btn => {
        if (btn.innerText.includes(questions[currentQuestionIndex].correct_answer)) {
            btn.style.backgroundColor = "#28a745";
            btn.style.color = "white";
        }
    });
}

function endGame() {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("end-screen").classList.remove("hidden");
    document.getElementById("final-score").innerText = score;
}