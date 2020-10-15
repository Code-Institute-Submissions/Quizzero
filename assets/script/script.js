// Buttons consts


const startButton = document.getElementById('button-start')
const continueButton = document.getElementById('button-continue')
const answer1 = document.getElementById('answer1')
const answer2 = document.getElementById('answer2')
const answer3 = document.getElementById('answer3')
const answer4 = document.getElementById('answer4')
const restartButton = document.getElementById('button-restart')

// Sections consts


const welcome = document.getElementById('welcome')
const input = document.getElementById('input')
const question = document.getElementById('question')
const finalScore = document.getElementById('score')


// Questions

let questionNumber = document.getElementById('question-number')
let questionText = document.getElementById('question-text')
const answers = Array.from(document.getElementsByClassName('answer-text'))

console.log(answers)



// Functions


startButton.addEventListener('click', start)

function start() {
    welcome.classList.add('hide')
    input.classList.remove('hide')
}


continueButton.addEventListener('click', begin)

function begin() {
    input.classList.add('hide')
    question.classList.remove('hide')
}


restartButton.addEventListener('click', restart)

function restart() {
    finalScore.classList.add('hide')
    input.classList.remove('hide')
    question.classList.add('hide')
}

