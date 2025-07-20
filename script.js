const allQuestions = [
  // Add the full 200-question set here
  {
    question: "What do plants need to grow?",
    answers: {
      a: "Sunlight, water, and soil",
      b: "Soda, glue, and air",
      c: "TV, books, and oil"
    },
    correctAnswer: "a"
  },
  {
    question: "What part of the plant absorbs water?",
    answers: {
      a: "Stem",
      b: "Leaves",
      c: "Roots"
    },
    correctAnswer: "c"
  },
  {
    question: "Which vegetable grows underground?",
    answers: {
      a: "Carrot",
      b: "Lettuce",
      c: "Tomato"
    },
    correctAnswer: "a"
  },
  // ... Add up to 200 questions like these
];

function getRandomQuestions(arr, n) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

const questions = getRandomQuestions(allQuestions, 10);

function buildQuiz() {
  const quizContainer = document.getElementById("quiz");
  const output = [];

  questions.forEach((q, index) => {
    const answers = [];
    for (let letter in q.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${index}" value="${letter}">
          ${letter}: ${q.answers[letter]}
        </label><br>`
      );
    }

    output.push(
      `<div class="question">
         <p>${index + 1}. ${q.question}</p>
         <div class="answers">${answers.join("")}</div>
       </div>`
    );
  });

  quizContainer.innerHTML = output.join("");
}

function showResults() {
  const answerContainers = document.querySelectorAll(".answers");
  let score = 0;

  questions.forEach((q, index) => {
    const selector = `input[name=question${index}]:checked`;
    const userAnswer = (document.querySelector(selector) || {}).value;

    if (userAnswer === q.correctAnswer) {
      score++;
      answerContainers[index].style.color = "green";
    } else {
      answerContainers[index].style.color = "red";
    }
  });

  document.getElementById("results").innerHTML = `You scored ${score} out of ${questions.length}! 🌿`;
}

document.getElementById("submit").addEventListener("click", showResults);

buildQuiz();
