// script.js

// Quiz data
const quizData = [
  {
      question: "What is the function of CPU in a computer?",
      answers: {
          a: "Rendering graphics",
          b: "Storing data",
          c: "Executing instructions from software programs",
          d: "Powering the computer"
      },
      correctAnswer: "c"
  },
  {
      question: "What does RAM stand for?",
      answers: {
          a: "Random Access Memory",
          b: "Read And Multiply",
          c: "Remote Access Module",
          d: "Rapid Application Management"
      },
      correctAnswer: "a"
  },
  {
      question: "Which component is responsible for converting electricity into usable power for the computer?",
      answers: {
          a: "CPU",
          b: "RAM",
          c: "GPU",
          d: "PSU"
      },
      correctAnswer: "d"
  },
  {
      question: "What does GPU stand for?",
      answers: {
          a: "Graphite Processing Unit",
          b: "General Processing Unit",
          c: "Graphics Processing Unit",
          d: "Game Processing Unit"
      },
      correctAnswer: "c"
  },
  {
      question: "Which component connects all other components in a computer and allows communication between them?",
      answers: {
          a: "CPU",
          b: "Motherboard",
          c: "GPU",
          d: "RAM"
      },
      correctAnswer: "b"
  },
  {
      question: "What is the primary purpose of a cooling system in a computer?",
      answers: {
          a: "To make the computer quieter",
          b: "To improve internet connectivity",
          c: "To keep components from overheating",
          d: "To increase processing speed"
      },
      correctAnswer: "c"
  }
];

// Function to generate quiz HTML
function generateQuiz() {
  const quizContainer = document.createElement('div');
  quizContainer.classList.add('quiz-container');

  quizData.forEach((questionData, index) => {
      const questionElement = document.createElement('div');
      questionElement.classList.add('question');

      const questionText = document.createElement('p');
      questionText.textContent = `${index + 1}. ${questionData.question}`;
      questionElement.appendChild(questionText);

      for (const option in questionData.answers) {
          const answerLabel = document.createElement('label');
          const radioInput = document.createElement('input');
          radioInput.type = 'radio';
          radioInput.name = `question${index}`;
          radioInput.value = option;
          answerLabel.appendChild(radioInput);
          answerLabel.innerHTML += ` ${questionData.answers[option]}`;
          questionElement.appendChild(answerLabel);
      }

      quizContainer.appendChild(questionElement);
  });

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit Quiz';
  submitButton.addEventListener('click', calculateScore);

  quizContainer.appendChild(submitButton);
  document.body.appendChild(quizContainer);
}

// Function to calculate quiz score
function calculateScore() {
  let score = 0;
  quizData.forEach((questionData, index) => {
      const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
      if (selectedOption) {
          if (selectedOption.value === questionData.correctAnswer) {
              score++;
          }
      }
  });

  const totalQuestions = quizData.length;
  const resultPercentage = (score / totalQuestions) * 100;
  const resultMessage = `You scored ${score} out of ${totalQuestions}. (${resultPercentage}%)`;
  alert(resultMessage);
}

// Generate quiz on page load
generateQuiz();