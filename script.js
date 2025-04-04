import { carregarCharadasDoFirebase } from "./scripts/firebase-config.js";

let riddles = [];
let currentRiddleIndex = 0;

const riddleQuestion = document.getElementById("riddle-question");
const userAnswer = document.getElementById("user-answer");
const submitButton = document.getElementById("submit-answer");
const showAnswerButton = document.getElementById("show-answer");
const nextRiddleButton = document.getElementById("next-riddle");
const feedback = document.getElementById("feedback");

async function init() {
  riddles = await carregarCharadasDoFirebase();
  if (riddles.length > 0) {
    displayRiddle(0);
  } else {
    riddleQuestion.textContent = "Nenhuma charada encontrada!";
  }
}

function displayRiddle(index) {
  riddleQuestion.textContent = riddles[index].question;
  userAnswer.value = "";
  feedback.classList.add("hidden");
}

function checkAnswer() {
  const userGuess = userAnswer.value.trim().toLowerCase();
  const correctAnswer = riddles[currentRiddleIndex].answer.toLowerCase();
  feedback.classList.remove("hidden");

  if (userGuess === correctAnswer) {
    feedback.textContent = "Parabéns! Você acertou! 🎉";
    feedback.className = "feedback correct";
  } else {
    feedback.textContent = "Não foi dessa vez. Tente novamente! 🤔";
    feedback.className = "feedback incorrect";
  }
}

function showAnswer() {
  if (riddles.length === 0) return;

  const userGuess = userAnswer.value.trim();

  if (userGuess === "") {
    feedback.classList.remove("hidden");
    feedback.textContent = "Digite uma resposta antes de ver a solução! 😉";
    feedback.className = "feedback incorrect";
  } else {
    feedback.classList.remove("hidden");
    feedback.className = "feedback correct"; // ← agora verde!
    feedback.textContent = `A resposta é: ${riddles[currentRiddleIndex].answer}`;
  }
}

function nextRiddle() {
  currentRiddleIndex = (currentRiddleIndex + 1) % riddles.length;
  displayRiddle(currentRiddleIndex);
}

// Eventos
submitButton.addEventListener("click", checkAnswer);
showAnswerButton.addEventListener("click", showAnswer);
nextRiddleButton.addEventListener("click", nextRiddle);

// Inicializa o jogo ao carregar a página
window.addEventListener("DOMContentLoaded", init);
