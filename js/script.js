document.addEventListener("DOMContentLoaded", function() {
    // Quiz Interativo
    const quizData = [
        {
            question: "Qual é a capital da França?",
            options: ["Londres", "Berlim", "Paris", "Roma"],
            correct: 2
        },
        {
            question: "Quanto é 5 + 3?",
            options: ["5", "8", "12", "15"],
            correct: 1
        }
    ];

    let currentQuestion = 0;
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");

    function loadQuestion() {
        let q = quizData[currentQuestion];
        questionElement.textContent = q.question;
        optionsElement.innerHTML = "";
        q.options.forEach((option, index) => {
            let button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => checkAnswer(index);
            optionsElement.appendChild(button);
        });
    }

    function checkAnswer(selected) {
        if (selected === quizData[currentQuestion].correct) {
            feedbackElement.textContent = "Correto!";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "Errado!";
            feedbackElement.style.color = "red";
        }
        setTimeout(() => {
            currentQuestion = (currentQuestion + 1) % quizData.length;
            loadQuestion();
            feedbackElement.textContent = "";
        }, 1000);
    }

    loadQuestion();

    // Roleta Giratória
    const wheel = document.getElementById("wheel");
    const spinBtn = document.getElementById("spin-btn");
    const resultText = document.getElementById("result");
    let isSpinning = false;

    spinBtn.addEventListener("click", function() {
        if (isSpinning) return;
        isSpinning = true;
        let randomDegree = Math.floor(3600 + Math.random() * 360);
        wheel.style.transform = `rotate(${randomDegree}deg)`;

        setTimeout(() => {
            let finalDegree = randomDegree % 360;
            let sector = Math.floor(finalDegree / 60);
            const outcomes = ["Vermelho", "Amarelo", "Azul", "Verde", "Laranja", "Roxo"];
            resultText.textContent = `Você caiu em: ${outcomes[sector]}`;
            isSpinning = false;
        }, 4000);
    });
});

