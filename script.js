const riddles = [
    {
      question: "O que tem dentes mas não morde?",
      answer: "pente"
    },
    {
      question: "O que quanto mais seca, mais molhada fica?",
      answer: "toalha"
    },
    {
      question: "O que é, o que é: tem escamas mas não é peixe, tem coroa mas não é rei?",
      answer: "abacaxi"
    },
    {
      question: "O que é, o que é: quanto mais se tira, maior fica?",
      answer: "buraco"
    },
    {
      question: "O que é, o que é: tem folhas sem ser árvore, tem capa mas não é gente?",
      answer: "livro"
    },
    {
      question: "O que é, o que é: tem cabeça, tem dente, mas não é bicho nem gente?",
      answer: "alho"
    },
    {
      question: "O que é, o que é: anda sempre com os pés na cabeça?",
      answer: "piolho"
    },
    {
      question: "O que é, o que é: fica no meio do ovo?",
      answer: "letra v"
    },
    {
      question: "O que é, o que é: tem coroa mas não é rei, tem escamas mas não é peixe?",
      answer: "abacaxi"
    },
    {
      question: "O que é, o que é: tem pernas mas não anda, tem braços mas não abraça?",
      answer: "cadeira"
    }
  ];
  
  let currentRiddleIndex = 0;
  
  const riddleQuestion = document.getElementById('riddle-question');
  const userAnswer = document.getElementById('user-answer');
  const submitButton = document.getElementById('submit-answer');
  const showAnswerButton = document.getElementById('show-answer');
  const nextRiddleButton = document.getElementById('next-riddle');
  const feedback = document.getElementById('feedback');
  
  // Função para exibir a charada
  function displayRiddle(index) {
    riddleQuestion.textContent = riddles[index].question;
    userAnswer.value = '';
    feedback.classList.add('hidden');
  }
  
  // Função para verificar a resposta
  function checkAnswer() {
    const userGuess = userAnswer.value.trim().toLowerCase();
    const correctAnswer = riddles[currentRiddleIndex].answer.toLowerCase();
  
    feedback.classList.remove('hidden');
  
    if (userGuess === correctAnswer) {
      feedback.textContent = "Parabéns! Você acertou! 🎉";
      feedback.className = 'feedback correct';
    } else {
      feedback.textContent = "Não foi dessa vez. Tente novamente! 🤔";
      feedback.className = 'feedback incorrect';
    }
  }
  
  // Função para mostrar a resposta
  function showAnswer() {
    const userGuess = userAnswer.value.trim();
  
    if (userGuess === '') {
      feedback.classList.remove('hidden');
      feedback.textContent = 'Por favor, digite uma resposta antes de ver a solução.';
      feedback.className = 'feedback incorrect';
    } else {
      feedback.classList.remove('hidden');
      feedback.className = 'feedback';
      feedback.textContent = `A resposta é: ${riddles[currentRiddleIndex].answer}`;
    }
  }
  
  // Função para carregar a próxima charada
  function nextRiddle() {
    currentRiddleIndex = (currentRiddleIndex + 1) % riddles.length;
    displayRiddle(currentRiddleIndex);
  }
  
  // Event Listeners
  submitButton.addEventListener('click', checkAnswer);
  showAnswerButton.addEventListener('click', showAnswer);
  nextRiddleButton.addEventListener('click', nextRiddle);
  
  // Inicializar a primeira charada
  displayRiddle(currentRiddleIndex);
  
  // Permitir enviar resposta ao pressionar Enter
  userAnswer.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  });
  