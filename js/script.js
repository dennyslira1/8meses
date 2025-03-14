document.addEventListener("DOMContentLoaded", function() {
    // Quiz Interativo
    const quizData = [
        {
            question: "Quem é o amor da minha vida?",
            options: ["SPFC", "Neymar", "Futebol", "Ester ❤️"],
            correct: 3
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
            feedbackElement.textContent = "Parabéns, acertou gatinha!";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "Moiô, bb! Vai ter que me pagar o pedágio";
            feedbackElement.style.color = "red";
        }
        setTimeout(() => {
            currentQuestion = (currentQuestion + 1) % quizData.length;
            loadQuestion();
            feedbackElement.textContent = "";
        }, 1000);
    }

    loadQuestion();

document.addEventListener("DOMContentLoaded", function() {
    const wheel = document.getElementById("wheel");
    const spinBtn = document.getElementById("spin-btn");
    const resultText = document.getElementById("result");
    let isSpinning = false;
    const outcomes = ["Japa", "Massa", "Hamburguer", "Dogao", "Camarão", "Churrasco"];

    spinBtn.addEventListener("click", function() {
        if (isSpinning) return;
        isSpinning = true;

        // Resultado pré-definido (exemplo: "Hamburguer")
        const predefinedResult = "Massa";
        const predefinedIndex = outcomes.indexOf(predefinedResult);
        const finalDegree = predefinedIndex * 60; // Calcula o grau final

        let randomDegree = 3600 + finalDegree; // Adiciona rotações completas

        wheel.style.transform = `rotate(${randomDegree}deg)`;

        setTimeout(() => {
            resultText.textContent = `Você caiu em: ${predefinedResult}`;
            isSpinning = false;
        }, 4000);
    });
});
    });
});

