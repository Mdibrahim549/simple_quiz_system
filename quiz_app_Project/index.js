const quizData = [
    {
      question: "What is the capital of France?",
      choice: ["Paris", "London", "Berlin", "Rome"],
      correct: 0
    },
    {
      question: "Which planet is known as the Red Planet?",
      choice: ["Earth", "Venus", "Mars", "Jupiter"],
      correct: 2
    },
    {
      question: "Who wrote 'Hamlet'?",
      choice: ["Charles Dickens", "William Shakespeare", "J.K. Rowling", "Mark Twain"],
      correct: 1
    },
    {
      question: "What is the chemical symbol for water?",
      choice: ["H2O", "O2", "CO2", "NaCl"],
      correct: 0
    }
  ];

  let currentQuestion = 0;
  let score = 0;

  function loadQuestion () {
    let currentQuestionData = quizData[currentQuestion]

    //add question title
    
    document.getElementById("question").textContent =currentQuestion + 1 + ". " + currentQuestionData.question

    let choices = document.querySelectorAll(".choice");
    choices.forEach((choice,index) => {
        choice.textContent = currentQuestionData.choice[index];
        choice.style.background = "#007bff"
        choice.disabled = false;
    })

    document.getElementById("nextButton").style.display = "none"
  }
  

  function selectanswar(index) {
    let currentQuestionData = quizData[currentQuestion]
    let choices = document.querySelectorAll(".choice");

if(index == currentQuestionData.correct){
    score++
    choices[index].style.background ="#28a745"
}
else{
    choices[index].style.background ="#dc3545"
    choices[currentQuestionData.correct].style.background ="#28a745"
}

    choices.forEach((choice) => {
        choice.disabled = true
    })

    document.getElementById("nextButton").style.display = "block"
  }

  function nextQuestion(){
    currentQuestion++
    if(currentQuestion < quizData.length){
        loadQuestion()
    }else{
        showScore()
    }
         
  }

  function showScore(){
    document.getElementById("quiz").innerHTML =`
        <h2>Your Score: ${score} out of ${quizData.length}</h2>
        <button id="restartButton">Restart Quiz</button>
    `
    document.getElementById("restartButton").addEventListener("click",restartQuiz)
  }

  function restartQuiz(){
    window.location.reload();
  }


  window.onload = loadQuestion()