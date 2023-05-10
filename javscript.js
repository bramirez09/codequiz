//variables
var timerElement = document.querySelector(".timer-count")
const startScreen = document.getElementById("start-screen")
let startButton = document.getElementById("start-button")
let quizQuestions = document.getElementById("questions")
let highScores = document.getElementById("highscores")
let quizComplete = document.getElementById("quiz-complete")

// questions
const quizArray = [{ id: "0", question: "Which of the following is a tool to test our code? ", options: ["boolean", "array", "string", "console.log()"], correct: "console.log()" },
{ id: "1", question: "Which of the following is a string?", options: ["225", "true", "false", "'hello'"], correct: "'hello'" },
{ id: "2", question: "Which of the following is a boolean?", options: ["false", "12", "array", "string"], correct: "false" },
{ id: "3", question: "Which one means true?", options: ["yes", "correct", "the truth", "all of the above"], correct: "all of the above" },
{ id: "4", question: "which of the following allows a user to input text data?", options: ["alert", "prompt", "confirm", "none"], correct: "prompt" }];