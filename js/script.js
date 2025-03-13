document.addEventListener("DOMContentLoaded", function() {
    // Quiz Interativo
    const quizData = [
        {
            question: "Quem é o amor da minha vida?",
            options: ["SPFC", "Neymar", "Futebol", "Ester ❤️"],
            correct: 4
        },
        {
            question: "Qual ano a gente deu o primeiro beijo?",
            options: ["2024", "2013", "2020", "2023"],
            correct: 2
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
            const outcomes = ["Japa", "Massa", "Hamburguer", "Dogao", "Camarao", "Churrasco"];
            resultText.textContent = `Você caiu em: ${outcomes[sector]}`;
            isSpinning = false;
        }, 4000);
    });
});

