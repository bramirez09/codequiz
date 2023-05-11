//variables
var timerElement = document.querySelector(".timer-count")
var secondsLeft = 10;
const startScreen = document.getElementById("start-screen")
let startButton = document.getElementById("start-button")
let restartButton = document.getElementById("restart")
let quizHolder = document.getElementById("quiz-holder")
let quizQuestions = document.getElementById("questions")
let highScores = document.getElementById("highscores")
let quizComplete = document.getElementById("quiz-complete")
var questionIndex = 0

//only display start screen
// window.onload = () => {
//     startScreen.classList.remove ("hide");
//     quizHolder.classList.add("hide");
// }

//start button event listener
startButton.addEventListener("click", start);

function start() {
    console.log("clicked")
    startScreen.classList.add("hide");
    quizHolder.classList.remove("hide");
    //initial();
}

function quizMaker() {
    //get current question object from array
    var currentQuestion = quizArray[questionIndex];

    //update a line with current question
    var titleEl = document.getElementsByClassName ("questions");
    titleEl.textContent = currentQuestion.title;

    //clear out old question choices
    choicesEl.innerHTML = ""; 

    // console.log(quizArray[questionIndex].question)
    // questionIndex = questionIndex + 1 ;

    let question_main = document.createElement("a");
    question_main.classList.add("question");
    question_main.innerHTML = i.question;
    main.appendChild(question_section);
}



// questions
const quizArray = [
    {
        question: "Which of the following is a tool to test our code? ",
        options: ["boolean", "array", "string", "console.log()"],
        correct: "console.log()"
    },
    {
        question: "Which of the following is a string?",
        options: ["225", "true", "false", "'hello'"],
        correct: "'hello'"
    },
    {
        question: "Which of the following is a boolean?",
        options: ["false", "12", "array", "string"],
        correct: "false"
    },
    {
        question: "Which one means true?",
        options: ["yes", "correct", "the truth", "all of the above"],
        correct: "all of the above"
    },
    {
        question: "which of the following allows a user to input text data?",
        options: ["alert", "prompt", "confirm", "none"],
        correct: "prompt"
    }
];


