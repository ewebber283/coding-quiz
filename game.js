const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const progressBarFull = document.querySelector('#progressBarFull');
const scoreText = document.querySelector('#score');

//save as empty object
let currentQuestion = {}
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
        choice4: 'Daivd Attenborough',
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

