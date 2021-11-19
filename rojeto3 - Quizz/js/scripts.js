// Deeclaração de evariaveis

const question       = document.querySelector("#question");
const answersBox     = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a","b","c","d"];
let points = 0;
let actualQuestion = 0;

//Perguntas
const questions = [
    {
        "question": "PHP foi desenvolvido para qual fim?",
        "answers": [
            {
                "answer": "back-end",
                "correect": true
            },
            {
                "answer": "front-end",
                "correect": false
            },
            {
                "answer": "Sistema Operacional",
                "correect": false
            },
            {
                "answer": "Banco de dados",
                "correect": false
            },
        ]
    },
    {
        "question": "Uma forma de declarar variavel em Javascript:",
        "answers": [
            {
                "answer":"$var",
                "correct": false
            },
            {
                "answer":"var",
                "correct": true
            },
            {
                "answer":"@var",
                "correct": false
            },
            {
                "answer":"#let",
                "correct": false
            }
        ]
    },
    {
        "question": "Qual o seletor de id no CSS?",
        "answers": [
            {
                "answer":"#",
                "correct": true
            },
            {
                "answer":".",
                "correct": false
            },
            {
                "answer":"!",
                "correct": false
            },
            {
                "answer":"/",
                "correct": false
            }
        ]
    },
];

//Substituição do quizz ppara a primeira pergunta

function init() {
    //criar a primeira pergunta
    createQuestion(0); 
}
    

//cria uma pergunta
function createQuestion(i) {
    //limpar a questão anterior
    const oldButtons = answersBox.querySelectorAll("button");

    oldButtons.forEach(function(btn) {
        btn.remove();
    });

    //alterar texto da pergunta
    const questionText = question.querySelector("#question-text");
    const questionNumber =  question.querySelector("#question-number");

    questionText.textContent = questions[i].question;
    questionNumber.textContent =  i + 1;

    //inseere as alternativas
    questions[i].answers.forEach(function(answer, i){
        //Cria o template do botão
        const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer");

        letterBtn.textContent = letters[i];
        answerText.textContent = answer['answer'];

        answerTemplate.setAttribute("correct-answer", answer["correct"]);
        
        // Removendo hide e template class
        answerTemplate.classList.remove("hide");
        answerTemplate.classList.remove("answer-tempplate");

        //inseerir a alternativa na tela
        answersBox.appendChild(answerTemplate);

        //inserir um eevento de click no botão
        answerTemplate.addEventListener("click", function(){
            console.log(this);
        });

    });

    //incrementar o número da questão
    actualQuestion++;

}

//inicialização do quizz
init();