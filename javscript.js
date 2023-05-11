//variables
var timerElement = document.querySelector(".timer-count")
var secondsLeft = 10;
const startScreen = document.getElementById("start-screen")
let startButton = document.getElementById("start-button")
let restartButton = document.getElementById("restart")
let quizHolder = document.getElementById("quiz-holder")
let quizQuestions = document.getElementById("questions")
let choicesEl = document.querySelector(".answer-options")
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
    quizMaker();
    timerDisplay();
}
// //timer
function timerDisplay() {
    // Sets interval in variable
    timerElement = setInterval(function () {
        secondsLeft--;
        timerElement.textContent = secondsLeft;

        // if (secondsLeft === 0) {
        //     // Stops execution of action at set interval
        //     clearInterval(timerInterval);
     }

    , 1000);
    // //stop timer
    //     clearInterval(downdown);
    //     //disable the rest of the quiz answers
    //     options.forEach((element)=>{
    //     element.disabled = true;
// });

}
    function quizMaker() {
        //get current question object from array
        var currentQuestion = quizArray[questionIndex];
        questionIndex = questionIndex + 1 ;

        //update a line with current question
        var titleEl = document.querySelector(".questions");
        titleEl.textContent = currentQuestion.question;
         
        //update p line with options
        var optionsEl = document.querySelector(".answer-options");
        optionsEl.textContent = currentQuestion.options;
                //options
        //         section.innerHTML += <><button class="option-div" onclick="checker(this)">${i.options[0]}</button>
        //         <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        //         <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        //         <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
        //         <button class="option-div" onclick="checker(this)">${i.options[4]}</button></>;

        // //clear out old question choices
        // choicesEl.innerHTML = "";

        // console.log(quizArray[questionIndex].question)
        // questionIndex = questionIndex + 1 ;

    }

    //check answers
function  checker(userOption) {
    let userSolution = userOption.innerText;
    let question = document.querySelector(".questions")[questionIndex];
    let options = question.querySelectorAll(".option-div");
//correct answer
if (userSolution === quizArray[questionIndex].correct){
    userOption.classList.add("correct");
    scoreCount++;
}
//incorrect answer
else{
    userOption.classList.add("incorrect");
    options.forEach((element) => {
        if (element.innterText == quizArray[questionIndex].correct){
            element.classList.add("correct");
        }
    })
}
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


