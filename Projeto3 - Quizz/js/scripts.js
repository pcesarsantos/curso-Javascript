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
                "correct": true
            },
            {
                "answer": "front-end",
                "correct": false
            },
            {
                "answer": "Sistema Operacional",
                "correct": false
            },
            {
                "answer": "Banco de dados",
                "correct": false
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
        answerTemplate.classList.remove("answer-template");

        //inseerir a alternativa na tela
        answersBox.appendChild(answerTemplate);

        //inserir um eevento de click no botão
        answerTemplate.addEventListener("click", function(){
            checkAnswer(this);
        });

    });

    //incrementar o número da questão
    actualQuestion++;

}

//Verifica resposta do usuario
function checkAnswer(btn) {
    //seleciona todos os botões
    const buttons = answersBox.querySelectorAll("button");

    //verifica se a resposta esta correta
    buttons.forEach(function(button){
        if(button.getAttribute("correct-answer") == "true") {
            button.classList.add("correct-answer");
            // checa se o usuário acerto a pergunta
            if(btn === button) {
                // incremento dos pontos
                points++;
            }
        } else {
            button.classList.add("wrong-answer");
        }
    });

    // Exibir prodima pergunta
    nextQuestion();
}

//EExibe a pproxima ppeergunta do quizz
function nextQuestion() {
    // timer para o usuario ver as respostas

    setTimeout(function() {
        //verifica se ainda há operguntas
        if(actualQuestion >= questions.length) {
            // apresenta a mensagem de sucessoo
            showSuccessMessage();
            return;
        }

        createQuestion(actualQuestion);
    }, 1500);
}

//xibee a tela final
function showSuccessMessage() {

    hideOrShowQuizz();

    //trocar dados da tela de sucesso

    //calcular o score
    const score = ((points / questions.length) * 100).toFixed(2);
    console.log(score);

    const displayScore = document.querySelector("#display-score span");

    displayScore.textContent = score.toString();

    //alterar o númeero de perguntas corretas

    const correctAnswers = document.querySelector("#correct-answers");
    correctAnswers.textContent = points;

    //Alterar o total de perguntas
    const totalQuestions = document.querySelector("#questions-qty");
    totalQuestions.textContent = questions.length;
}

//Exibe ou oculta o score
function hideOrShowQuizz() {
    quizzContainer.classList.toggle("hide");
    scoreContainer.classList.toggle("hide");
}

//Reiniciar Quizz
const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", function(){
    //zeerar oo jogo
    actualQuestion = 0;
    points = 0;
    hideOrShowQuizz();
    init();
});

//inicialização do quizz
init();