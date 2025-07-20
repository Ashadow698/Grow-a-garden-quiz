const allQuestions = [
  {
    question: "What is the first tool you unlock in Grow a Garden?",
    answers: {
      a: "Watering Can",
      b: "Spade",
      c: "Hoe"
    },
    correctAnswer: "a"
  },
  {
    question: "What do you need to plant a Golden Sunflower?",
    answers: {
      a: "100 coins",
      b: "Golden Seed",
      c: "Rare Soil"
    },
    correctAnswer: "b"
  },
  {
    question: "Which pet boosts your plant growth speed?",
    answers: {
      a: "Sprout Cat",
      b: "Bloom Bunny",
      c: "Soil Dog"
    },
    correctAnswer: "b"
  },
  {
    question: "What happens when you overwater a plant in Grow a Garden?",
    answers: {
      a: "It grows faster",
      b: "It turns purple",
      c: "It wilts"
    },
    correctAnswer: "c"
  },
  {
    question: "Which fertilizer gives the best XP bonus?",
    answers: {
      a: "Basic Fertilizer",
      b: "Super Grow",
      c: "Mega Bloom"
    },
    correctAnswer: "c"
  },
  {
    question: "How do you unlock the Desert Garden zone?",
    answers: {
      a: "Collect 5 cactus seeds",
      b: "Reach level 10",
      c: "Defeat the Sandstorm Boss"
    },
    correctAnswer: "b"
  },
  {
    question: "Which flower is the rarest in Grow a Garden?",
    answers: {
      a: "Rainbow Rose",
      b: "Blue Tulip",
      c: "Fire Lily"
    },
    correctAnswer: "a"
  },
  {
    question: "What can you craft using nectar in the game?",
    answers: {
      a: "Flower Potion",
      b: "Bee Attractor",
      c: "Sticky Honey Trap"
    },
    correctAnswer: "b"
  },
  {
    question: "What does the Garden Gnome do?",
    answers: {
      a: "Decorates your garden",
      b: "Scares away pests",
      c: "Increases XP"
    },
    correctAnswer: "b"
  },
  {
    question: "What currency is used to buy rare seeds?",
    answers: {
      a: "Coins",
      b: "Petals",
      c: "Gems"
    },
    correctAnswer: "c"
  }
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

