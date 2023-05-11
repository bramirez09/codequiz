//variables
var timerElement = document.querySelector(".timer-count")
const startScreen = document.getElementById("start-screen")
let startButton = document.getElementById("start-button")
let restartButton = document.getElementById("restart")
let quizHolder = document.getElementById("quiz-holder")
let quizQuestions = document.getElementById("questions")
let choicesEl = document.querySelector(".answer-options")
let highScores = document.getElementById("highscores")
let quizComplete = document.getElementById("quiz-complete")
var questionIndex = 0

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
    var timeLeft = 25;
    // Sets interval in variable
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerElement.textContent = timeLeft + "seconds remaining";
            timeLeft--;
        } else if ( timeLeft === 1){
            timerElement.textContent = timeLeft + "second remaining";
            timeLeft--;
        } else {
            timerElement.textContent = "";
        clearInternal(timeInterval); 
        }
     }, 1000);
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


        //update a line with current question
        var titleEl = document.querySelector(".questions");
        titleEl.textContent = currentQuestion.question;
         
        //update p line with options
        var optionsEl = document.querySelector(".answer-options");
        optionsEl.textContent = currentQuestion.options;
        optionsEl.innerHTML=`<button class="option-div" onclick="checker(this)">${currentQuestion.options[0]}</button>
                <button class="option-div" onclick="checker(this)">${currentQuestion.options[1]}</button>
                <button class="option-div" onclick="checker(this)">${currentQuestion.options[2]}</button>
                <button class="option-div" onclick="checker(this)">${currentQuestion.options[3]}</button></>`;

        // //clear out old question choices
        // choicesEl.innerHTML = "";
    }

    //check answers
function  checker(userOption) {
    let userSolution = userOption.innerHTML;
    let question = document.querySelector(".questions");
    let options = question.querySelector(".answer-options");
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
    questionIndex = questionIndex + 1 ;
}

render() {
    
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


