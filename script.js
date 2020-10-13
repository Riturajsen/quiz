const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let suffledQuestions, curreentQuestionIndex

startButton.addEventListener('click',startGame)
nextButton.addEventListener('click', ()=>{
    curreentQuestionIndex++
    setNextQuestion()
})

function startGame(){
startButton.classList.add('hide')
suffledQuestions = questions.sort(()=>Math.random() - .5)
curreentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}
function setNextQuestion(){
    resetState()
    showQuestion(suffledQuestions[curreentQuestionIndex])

}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answer.forEach(answer =>{

        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body,correct)
Array.from(answerButtonsElement.children).forEach(button=>{
    setStatusClass(button, button.dataset.correct)
})
if(suffledQuestions.length > curreentQuestionIndex +1){
    nextButton.classList.remove('hide')
}
else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}
}

function setStatusClass(element , correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')

    }else{
        element.classList.add('wrong')
    }
}
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question :'What is 2+2 ?',
        answer: [
            {text: '4', correct:true},
            {text: '6', correct:false},
            {text: '9', correct:false},
            {text: '8', correct:false}

        ]

    },
    {
        question :'What is 4+4 ?',
        answer: [
            {text: '4', correct:false},
            {text: '6', correct:false},
            {text: '9', correct:false},
            {text: '8', correct:true}

        ]

    }, {
        question :'What is 4+2 ?',
        answer: [
            {text: '4', correct:false},
            {text: '6', correct:true},
            {text: '9', correct:false},
            {text: '8', correct:false}

        ]

    }
]