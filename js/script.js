// Slideshow e player de música (como antes)

// Quiz
const quizData = [
    {
        question: "Qual é a cor do amor?",
        options: ["Azul", "Vermelho", "Verde"],
        answer: "Vermelho"
    },
    {
        question: "Qual é a flor mais romântica?",
        options: ["Rosa", "Tulipa", "Girassol"],
        answer: "Rosa"
    },
    {
        question: "Qual é o melhor lugar para um encontro romântico?",
        options: ["Cinema", "Parque", "Restaurante"],
        answer: "Parque"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const question = quizData[currentQuestion];
    document.querySelector(".quiz-question").textContent = question.question;
    const options = document.querySelector(".quiz-options");
    options.innerHTML = "";
    question.options.forEach((option, index) => {
        options.innerHTML += `<label><input type="radio" name="answer" value="${option}">${option}</label>`;
    });
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === quizData[currentQuestion].answer) {
            score++;
            document.querySelector(".quiz-result").textContent = "Resposta correta!";
        } else {
            document.querySelector(".quiz-result").textContent = "Resposta incorreta.";
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            document.querySelector(".quiz-container").innerHTML = `Quiz finalizado! Pontuação: ${score}/${quizData.length}`;
        }
    }
}

// Roleta
const outcomes = ["Paris", "Roma", "Veneza", "Florença", "Santorini"];

function spinRoulette() {
    // Lógica da roleta aqui
}

// Inicialização
document.addEventListener("DOMContentLoaded", function() {
    // Slideshow e player de música (como antes)
    loadQuestion();
    document.getElementById("spin-btn").addEventListener("click", spinRoulette);
});
