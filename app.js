// constants for document elements
const scoreDisplay = document.getElementById('score-display')
const questionDisplay = document.getElementById('question-display')

// questions, arrays of objects
const questions = [
    {
        quiz: ['value', 'estimate', 'evaluate'],
        options: ['jury', 'assess'],
        correct: 2
    },
    {
        quiz: ['close', 'near', 'next'],
        options: ['trace', 'adjacent'],
        correct: 2
    },
    {
        quiz: ['assume', 'insight', 'weather'],
        options: ['forcast', 'sustainable'],
        correct: 1
    },
    {
        quiz: ['fast', 'quick', 'prompt'],
        options: ['charity', 'rapid'],
        correct: 2
    },
]

// score
let score = 0
let clicked = []
scoreDisplay.textContent = score

// create function for populating quetions
function populateQuestions() {

    // take questions and use forEach method 
    questions.forEach(question => {

        // create a constant for question box and use the dcoument model and createElement method for a div
       const questionBox = document.createElement('div')

       // using dot notation take create a class and add method for our question box
       questionBox.classList.add('question-box')
       
        // logo display
       const logoDisplay = document.createElement('h1')
       // content of h1
       logoDisplay.textContent = "✪"
       // append to the questionbox
       questionBox.append(logoDisplay)

       // taken from our return function question will then take quiz and for each method we'll create a tip return
       question.quiz.forEach(tip => {
        // tiptext will equal an paragraph element
        const tipText = document.createElement('p')
        // tiptext will contain the text content of tip
        tipText.textContent = tip
        // append tiptext to the questionbox
        questionBox.append(tipText)
       })

       // questionButtons create a div element
       const questionButtons = document.createElement('div')
       // classList for style on buttons
       questionButtons.classList.add('question-buttons')
       // append questionButtons to questionBox
       questionBox.append(questionButtons)

       // using question.options. loop for each option return function for option
       question.options.forEach((option, optionIndex) => {
        // quetionButton element create button
        const questionButton = document.createElement('button')
        // classlist for button.
        questionButton.classList.add('question-button')
        // set questionButton to have textcontent to be equal to the option
        questionButton.textContent = option

        // click event listener on the questionbutton
        questionButton.addEventListener('click', () => checkAnswer(questionButton, questionBox, option, optionIndex +1, question.correct))

        // append each button to the buttons 
        questionButtons.append(questionButton)
       })

       const answerDisplay = document.createElement('div')
       answerDisplay.classList.add('answer-display')

       // take our questionDisplay by document id and append our question box to it
       questionBox.append(answerDisplay)
       questionDisplay.append(questionBox)
    })
}

// function callback
populateQuestions();

// function for checking answers, taking in option, optionIndex, and correctAnswer
function checkAnswer(questionButton, questionBox, option, optionIndex, correctAnswer) {
    console.log('option', option)
    console.log('optionIndex', optionIndex)

    // if option index === correct answer then increase score by 1 and display that score
    if (optionIndex === correctAnswer) {
        score++
        scoreDisplay.textContent = score
        // else if correct answer is not === option index score is -1 and display takes one away
        addResult(questionBox, "Correct!", 'correct')
    } else {
        score--
        scoreDisplay.textContent = score
        addResult(questionBox, "Wrong!", 'wrong')
    }
    clicked.push(option)
    questionButton.disabled = clicked.includes(option)
}

function addResult(questionBox, answer, className) {
    const answerDisplay = questionBox.querySelector('.answer-display')
    answerDisplay.classList.remove('wrong')
    answerDisplay.classList.remove('correct')
    answerDisplay.classList.add(className)
    answerDisplay.textContent = answer


}