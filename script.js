const introContainer = document.querySelector(".intro-container");
const mainContainer = document.querySelector(".main-container");
const startBtn = document.getElementById("start-btn");

const scrambledWordElement = document.querySelector(".scrambled-word");
const hintElement = document.querySelector(".hint span");
const userInput = document.getElementById("user-input");
const submitBtn = document.getElementById("submit-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const feedback = document.querySelector(".feedback");

const words = [
  { word: "addition", hint: "The process of adding numbers" },
  { word: "meeting", hint: "Event in which people come together" },
  { word: "exchange", hint: "The act of trading" },
  { word: "canvas", hint: "Piece of fabric for oil painting" },
  { word: "garden", hint: "Space for planting flowers and plants" },
  { word: "feather", hint: "Hair-like outer covering of a bird" },
  { word: "comfort", hint: "A pleasant feeling of relaxation" },
  { word: "expansion", hint: "The process of increase or growth" },
  { word: "library", hint: "Place containing a collection of books" },
  { word: "rocket", hint: "A vehicle for space travel" },
];

let correctWord;

startBtn.addEventListener("click", () => {
  introContainer.classList.add("hidden");
  mainContainer.classList.remove("hidden");
  initGame();
});

const shuffleWord = (wordArray) => {
  for (let i = wordArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  return wordArray.join("");
};

const initGame = () => {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  correctWord = randomWord.word.toLowerCase();
  scrambledWordElement.textContent = shuffleWord(correctWord.split(""));
  hintElement.textContent = randomWord.hint;
  userInput.value = "";
  feedback.textContent = "";
};

const checkAnswer = () => {
  const userAnswer = userInput.value.trim().toLowerCase();
  if (userAnswer === correctWord) {
    feedback.textContent = "🎉 Correct! Great job!";
    feedback.className = "feedback correct";
    setTimeout(initGame, 2000);
  } else {
    feedback.textContent = "❌ Incorrect! Try again.";
    feedback.className = "feedback incorrect";
  }
};

submitBtn.addEventListener("click", checkAnswer);
shuffleBtn.addEventListener("click", () => {
  scrambledWordElement.textContent = shuffleWord(correctWord.split(""));
});