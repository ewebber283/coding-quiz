const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const progressBarFull = document.querySelector('#progressBarFull');
const scoreText = document.querySelector('#score');

//save as empty object
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'What programming language is used to style?',
        choice1: 'JavaScript',
        choice2: 'css',
        choice3: 'html',
        choice4: 'python',
        answer: 2,
    },
    {
        question: 'What bear is best?',
        choice1: 'black bears',
        choice2: 'polar bears',
        choice3: 'brown bears',
        choice4: 'all of the above',
        answer: 1,
    },
    {
        question: 'Who was the mvp of superbowl 56?',
        choice1: 'Matthew Stafford',
        choice2: 'Eli Apple',
        choice3: 'Joe Burrow',
        choice4: 'Cooper Kupp',
        answer: 4,
    },
    {
        question: 'Who narrates the docuseries Planet Earth?',
        choice1: 'Morgan Freeman',
        choice2: 'James Earl Jones',
        choice3: 'Sam Elliot',
        choice4: 'David Attenborough',
        answer: 4,
    },
    {
        question: 'What movie won the Oscar for best picture in 1995?',
        choice1: 'Pulp Fiction',
        choice2: 'Forrest Gump',
        choice3: 'The Shawshank Redemption',
        choice4: 'Schindlers List',
        answer: 2,
    }
]

//capitalize due to being fixed
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    //calculate question you are on and percentage
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    //.floor to round to random number to calculate value of questionsIndex
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)

    //keep track of what question you are on
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
    //know what choice will be clicking on
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach = (choice => {
    choice.addEventListener ('click', e => {
        
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        //dataset of number refers to choices 1-4
        const selectedAnswer = selectedChoice.dataset['number']
        //ternary operator
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        //add whenever answer is right
        selectedChoice.parentElement.classList.add(classToApply)
        //have time to show correct answer
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score

}

startGame();