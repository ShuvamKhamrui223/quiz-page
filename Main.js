/********* Targetting required elements *********/
const cssQuizContainerLink = document.getElementById("cssQuizContainerLink"),
    cssScoreboardLink = document.getElementById("cssScoreboardLink");
const startBtn = document.getElementById("startBtn"),
    startBox = document.querySelector(".startBox"),
    quizContainer = document.querySelector(".quizContainer"),
    timerBox = document.querySelector(".timerBox"),
    remainingTime = document.getElementById("remainingTime"),
    btnsContainer = document.querySelector(".btns");
const question = document.querySelector(".question"),
    currentQuestion = document.querySelector("#currentQuestion"),
    options = document.querySelectorAll(".option"),
    totalQuestion = document.querySelector("#totalQuestion");

const scoreboardContainer = document.getElementById("scoreboardContainer"),
    scoreboardMsg = document.getElementById("scoreboardMsg"),
    scoreElement = document.getElementById("score");

const playAgainBtn = document.getElementById("playAgainBtn");

// Quiz data
let quizData = [
    {
        "question": "what is my name?",
        "options": ["shuvam", "shuv", "shubham", "none of these"],
        "correctAnswer": "shuvam"
    }, {
        "question": "Virat Kohli plays for",
        "options": ["austrailia", "south africa", "india", "japan"],
        "correctAnswer": "india"
    }, {
        "question": "joursey number of Mahendra Singh Dhoni is",
        "options": ["100", "3", "7", "10"],
        "correctAnswer": "7"
    }, {
        "question": "book written by Rabindra Nath Tagore",
        "options": ["gitanjali", "dc comics", "kakabau", "none of these"],
        "correctAnswer": "gitanjali"
    }, {
        "question": "capital of India",
        "options": ["zurich", "delhi", "kolkata", "none of these"],
        "correctAnswer": "delhi"
    }
];

/********* Event listeners *********/
startBtn.addEventListener("click", startQuiz)
playAgainBtn.addEventListener("click", startQuizAgain)

/********** Function declarations *************/
// Function for setting DOM to start quiz
function startQuiz() {
    startBox.classList.add("hide");
    btnsContainer.classList.add("hide");
    cssQuizContainerLink.setAttribute("href", "QuizContainer.css");
    quizContainer.setAttribute("hidden", false);
    quizContainer.classList.add("show");
    populateData();
    startTimer();

}

// Function for play again
function startQuizAgain() {
    location.reload();
}
let questionNO = 0,
    timerIterval,
    isOver = false;

// Code for data population
function populateData() {
    if (questionNO < quizData.length) {
        currentQuestion.innerText = questionNO + 1;
        totalQuestion.innerText = quizData.length;
        question.innerHTML = quizData[questionNO].question;
        options.forEach((option, index) => {
            option.innerText = quizData[questionNO].options[index];
            option.parentElement.previousElementSibling.checked = false;
            option.addEventListener("click", check);
        })
        questionNO++;
        isOver = false;
    }
    else {
        isOver = true;
        timerBox.remove();
        quizContainer.classList.remove("show");
        showScoreBoard(score);
    }
}

// Code for timer starts here
function startTimer() {
    let timer = 20;
    remainingTime.innerText = timer;
    timerBox.classList.remove("hide");
    timerIterval = setInterval(() => {
        if (timer <= 0 && !isOver) {
            nextQuestion();
        } else {
            --timer;
            timer < 10 ? remainingTime.innerText = '0' + timer : remainingTime.innerText = timer;
        }
    }, 1000)
}

// function for move to next question
function nextQuestion() {
    if (isOver === false) {
        resetTimer(timerIterval);
        populateData();
        startTimer();
    } else {
        return null;
    }
}

function resetTimer(timerIterval) {
    clearInterval(timerIterval);
}

let selected = false;
let score = 0;
function check(e) {
    selected = true;
    let choosenAnswer = e.currentTarget.innerHTML;
    originalAnswer = quizData[currentQuestion.innerText - 1].correctAnswer;
    (originalAnswer === choosenAnswer) ?
        score++ : null;
    // isover check
    isOver ? null : nextQuestion();
}

function showScoreBoard(score) {
    btnsContainer.classList.remove("hide");
    cssScoreboardLink.setAttribute("href", "Scoreboard.css");
    scoreboardContainer.setAttribute("hidden", false);

    if (score === quizData.length) {
        scoreboardMsg.innerText = "congratulations";
        scoreElement.innerText = score;
    }
    else if (score === quizData.length - 1) {
        scoreboardMsg.innerText = "too close";
        scoreElement.innerText = score;
    }
    else if (score > 0 && score < quizData.length) {
        scoreboardMsg.innerText = "not bad";
        scoreElement.innerText = score;
    }
    else if (score > Math.ceil(quizData.length / 2) && score < quizData.length - 2) {
        scoreboardMsg.innerText = "almost there";
        scoreElement.innerText = score;
    } else {
        scoreboardMsg.innerText = "try again, better luck next time";
        scoreElement.innerText = score;
    }
    scoreboardContainer.classList.add("show");
    playAgainBtn.classList.add("show");
}
/*
choose difficulty
choose category

Authentication:
create userCredential and save in browser
*/ 