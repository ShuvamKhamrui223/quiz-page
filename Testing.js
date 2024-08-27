/*const startBtn = document.getElementById("startBtn"),
    // startBox = document.querySelector(".startBox"),
    populatingContainer = document.getElementById("populatingContainer"),
    // quizContainer = document.querySelector(".quizContainer"),
    timerBox = document.querySelector(".timerBox"),
    remainingTime = document.getElementById("remainingTime");


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

// Event listeners
window.addEventListener("DOMContentLoaded", populateStartBoxHtml)



// Function bodies
// Code for data population
let questionNO = 0,
    timerIterval,
    isOver = false;

function populateData(question, currentQuestion, options) {
    if (questionNO < quizData.length) {
        currentQuestion.innerText = questionNO + 1;
        question.innerHTML = quizData[questionNO].question;
        options.forEach((option, index) => {
            option.innerText = quizData[questionNO].options[index];
            option.parentElement.previousElementSibling.checked = false;
            option.addEventListener("click", check);
        })
        questionNO++;
    }
    else {
        questionNO === quizData.length ? isOver = true : isOver = false;
        console.log('game over');
        quizContainer.remove();
    }
}

// Code for timer starts here
function startTimer() {
    let timer = 5;
    remainingTime.innerText = timer;
    timerBox.classList.remove("hide");
    timerIterval = setInterval(() => {
        if (timer <= 0) {
            resetTimer(timerIterval);
            nextQuestion();
        } else {
            timer--;
            timer < 10 ? remainingTime.innerText = '0' + timer : remainingTime.innerText = timer;
        }
    }, 1000)
}

// function for move to next question
function nextQuestion() {

    if (isOver === true) {
        resetTimer(timerIterval);
        showScoreBoard(score);
    } else {
        resetTimer(timerIterval);
        populateData();
        startTimer();
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
        score++ : console.log("incorrect");

    nextQuestion();
}

function showScoreBoard(score) {
    console.log("You have scored: " + score);
}
function populateStartBoxHtml() {
    populatingContainer.classList.add("startBox");
    populatingContainer.innerHTML = `
    <h1>Let's test your knowledge</h1>
    <button id="startBtn">start quiz</button>`;
    document.getElementById("startBtn").addEventListener("click", populateQuizContainerHtml)
}
function populateQuizContainerHtml() {
    populatingContainer.classList.replace("startBox", "quizContainer");
    setTimeout(() => {
        populatingContainer.innerHTML = `
    <h3 class="questionNo"><sup id="currentQuestion"></sup>/<sub id="totalQuestion"></sub></h3>
    <p class="question"></p>
    <ol type="A" class="optionsContainer">
    <input type="radio" name="quizOption" id="option1">
    <label for="option1">
    <li class="option" tabindex="1">
    </li>
    </label>
    <input type="radio" id="option2" name="quizOption">
    <label for="option2">
    <li class="option" tabindex="2">
    </li>
    </label>
        <input type="radio" id="option3" name="quizOption">
        <label for="option3">
            <li class="option" tabindex="3">
            </li>
            </label>
            <input type="radio" id="option4" name="quizOption">
        <label for="option4">
            <li class="option" tabindex="4">
            </li>
        </label>
    </ol>`
    }, 2000);

    const question = document.querySelector(".question"),
        currentQuestion = populatingContainer.querySelector("#currentQuestion"),
        options = document.querySelectorAll(".option"),
        totalQuestion = populatingContainer.querySelector("#totalQuestion");
    totalQuestion.innerText = quizData.length;
    populateData(question, currentQuestion, options);

    startTimer();

}

Play again button
create scoreboard

choose difficulty
choose category
*/

/*Todo:
2. implement logout functionality
3. implement login functionality

Uttarpara panteloons montecarlo vaccency
tomorrow visiting with cv
contact Somnath sir
*/