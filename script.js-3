// === Interactive Quiz ===
const quizQuestions = [
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS"
  },
  {
    question: "Which language adds interactivity to web pages?",
    options: ["HTML", "C", "JavaScript", "SQL"],
    answer: "JavaScript"
  },
  {
    question: "Which HTML attribute specifies an image source?",
    options: ["src", "href", "alt", "title"],
    answer: "src"
  }
];

const quizContainer = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submit-btn");
const result = document.getElementById("result");

// Display quiz questions
function loadQuiz() {
  quizContainer.innerHTML = "";
  quizQuestions.forEach((q, index) => {
    const questionHTML = `
      <div class="question-block">
        <p><strong>${index + 1}. ${q.question}</strong></p>
        ${q.options
          .map(
            (opt) =>
              `<label>
                <input type="radio" name="q${index}" value="${opt}"> ${opt}
              </label><br>`
          )
          .join("")}
      </div>
    `;
    quizContainer.innerHTML += questionHTML;
  });
}

// Check answers
function checkAnswers() {
  let score = 0;
  quizQuestions.forEach((q, index) => {
    const selected = document.querySelector(
      `input[name="q${index}"]:checked`
    );
    if (selected && selected.value === q.answer) {
      score++;
    }
  });
  result.textContent = `You scored ${score} out of ${quizQuestions.length}!`;
}

loadQuiz();
submitBtn.addEventListener("click", checkAnswers);

// === Fetch data from a public API (Random Joke) ===
const jokeBtn = document.getElementById("joke-btn");
const jokeText = document.getElementById("joke-text");

async function fetchJoke() {
  jokeText.textContent = "Loading joke...";
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const data = await response.json();
    jokeText.textContent = data.joke || "Couldn't fetch a joke right now.";
  } catch (error) {
    jokeText.textContent = "Error fetching joke!";
    console.error(error);
  }
}

jokeBtn.addEventListener("click", fetchJoke);
