quizInfo = [{
  question: "who is the current ceo of twitter",
  options: ["Eleon Musk", "Charles gabbage", "Dangote", "Elon Musk"],
  answer: "Elon Musk"
}, {
  question: "Who is the first civilian president of Nigeria",
  options: ["Eleon Musk", "Buhari", "Amino kano", "Nnamdi Azikuwe"],
  answer: "Nnamdi Azikuwe"
}, {
  question: "What is the tallest Moutain in Nigeria",
  options: ["elverest", "wonderland", "kilimanjaro", "Munungu"],
  answer: "Munungu"
}, {
  question: "Who is richest black man in the world ",
  options: ["Atiku", "Ahmed Bola Tinubu", "Dangote", "Femi Otedola"],
  answer: "Dangote"
}, {
  question: "Who is the current president of Nigeria",
  options: ["Olushegun Obasanjo", "Peter Gregory Obi", "Dangote", "Bola Ahmed Tinubu"],
  answer: " Bola Ahmed Tinubu "
}, {
  question: "Which Sport car company manufactures the 911?",
  options: ["Toyota", "Honda", "Lamborghini", "Porsche"],
  answer: "Porsche"
}, {
  question: "What countrybhas the highest life expectancy? ",
  options: ["Nigeria", "Ghana", "USA", "Hong kong"],
  answer: "Hong Kong"
}, {
  question: "What year did nigeria get her independent",
  options: ["1961", "1962", "1950", "1960"],
  answer: "1960"
}, {
  question: "how many minutes are in a full weak",
  options: ["10,000", "7,000", "12,000", "10,080"],
  answer: "10,080"
}, {
  question: "What Country has won the most world cups",
  options: ["Nigeria", "Argentina", "Germany", "Brazil"],
  answer: "Brazil"
}, {
  question: "How many Subject does the popular WAEC allow?",
  options: ["9", "10", "12", "7"],
  answer: "9"
}, {
  question: "How many bones do we have in the ear",
  options: ["4", "6", "7", "3"],
  answer: "3"
}, {
  question: "What is the worlds fatest bird",
  options: ["Dove", "Eagle", "Peregrine Falcon", "vulture"],
  answer: "Peregrine Falcon"
}, {
  question: "What planet is closest to the sun",
  options: ["Pluto", "Mercury", "Jupiter", "Mars"],
  answer: "Mercury"
}, {
  question: "What phone company produced the 3310",
  options: ["Iphone", "Sony", "Samsung", "Nokia"],
  answer: "Nokia"
}, {
  question: "where is the strongest human muscle located",
  options: ["Arm", "Back", "Jaw", "Knee"],
  answer: "Jaw"
}, {
  question: "What is the only continent with land in all four hemispheres?",
  options: ["Asia", "Europe", "Africa", "India"],
  answer: "Africa"
}, {
  question: "What is the capital of Nigeria",
  options: ["Dublin", "Abuja", "Lagos", "Nigeria"],
  answer: "Abuja"
}, {
  question: "Where is Angel falls. the world largest waterfall",
  options: ["Benin", "Venezuela", "Hong Kong", "Rivers State"],
  answer: "Venezuela"
}, {
  question: "How many colors does the Nigerian flag have",
  options: ["3", "2", "5", "8"],
  answer: "2"
}]



let currentQuestion = {}
const totalQuestions = 10;
const timeLimit = 120;
let currentQuestionIndex = 0;

// let questionsAsked = [];
let schoolName = document.querySelector(".div-001-h1");
let studentName = document.querySelector(".div-001-h");
let qbutton1 = document.querySelector(".qbutton1");
let qbutton2 = document.querySelector(".qbutton2");
let qbutton3 = document.querySelector(".qbutton3");
let qbutton4 = document.querySelector(".qbutton4");
let question = document.querySelector(".div-001-h3");
let timer01 = document.querySelector(".last-d1-h1");
let point01 = document.querySelector(".last-d1-h2");
let startButton = document.querySelector(".startgamer");
let scoreBoardSchool = document.querySelector(".scoreboard-school")
let scoreBoardName = document.querySelector(".scoreboard-name")
let scoreBoardPercentage = document.querySelector(".scoreboard-percentage")
let hour = document.querySelector(".one-p")
let minute = document.querySelector(".two-p")
let seconds = document.querySelector(".one-p")
let medalDiv = document.querySelector(".medal-div")
let points = 0;
let questionsAsked = [];


let timer = undefined;

// function initializeGame(){
//   if(timer!=undefined){clearInterval(timer)};
//   let timeRemaining = timeLimit;
//   timer = setInterval(function() {
//     timer01.textContent = "Time: " + timeRemaining;
//     timeRemaining--;

//     if (timeRemaining < 0) {
//       clearInterval(timer);
//       showNextQuestion();
//     }
//   }, 1000);

// }

function startGame() {

  let targetDate = new Date("May 29, 2023 16:00:00").getTime(); // Set the target date and time
  let currentDate = new Date().getTime();

  // if (currentDate < targetDate) {
    // document.querySelector(".three-p").style.display = "block";
    // document.querySelector(".main02-div02").style.display = "none";
    // let countdownTimer = setInterval(function() {
      // currentDate = new Date().getTime();
      // let timeRemaining = targetDate - currentDate;
      // let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      // let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      // let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      // let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      // document.querySelector(".three-p").textContent =
        // "Countdown: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      // if (timeRemaining < 0) {

        // clearInterval(countdownTimer);
        // document.querySelector(".three-p").style.display = "none";
        // document.querySelector(".main02-div02").style.display = "block";
  //       startGame();
  //     }
  //   }, 1000);

  //   return;
  // }


  if (timer != undefined) { clearInterval(timer) };
  let timeRemaining = timeLimit;
  timer = setInterval(function () {
    timer01.textContent = "Time: " + timeRemaining;
    timeRemaining--;

    if (timeRemaining < 0) {
      clearInterval(timer);
      showNextQuestion();
    }
  }, 1000);

  let loggedInUser = localStorage.getItem("loggedInUser")
  let currentUser = JSON.parse(loggedInUser);
  if (currentUser) {
    let firstName = currentUser.fname;
    let lastName = currentUser.lname;
    let school = currentUser.sname;

    schoolName.textContent = "School: " + school;
    studentName.textContent = "Name: " + firstName + " " + lastName;
    showNextQuestion();

    // let randomQuestionIndex = Math.floor(Math.random() * quizInfo.length);
    // currentQuestion = quizInfo[randomQuestionIndex];
    // question.textContent = currentQuestion.question;


    // let randomOptions = currentQuestion.options.sort(() => Math.random() - 0.5);


    // qbutton1.textContent = randomOptions[0];
    // qbutton2.textContent = randomOptions[1];
    // qbutton3.textContent = randomOptions[2];
    // qbutton4.textContent = randomOptions[3];
  }




}

function showNextQuestion() {
  // clearInterval(timer);
  currentQuestionIndex++;


  let loggedInUser = localStorage.getItem("loggedInUser")
  let currentUser = JSON.parse(loggedInUser);

  console.log(currentUser);
  if (currentQuestionIndex === totalQuestions) {
    // clearInterval(timer);
    let percentage = (points / (totalQuestions * 5)) * 100;
    scoreBoardSchool.textContent = "School: " + currentUser.sname;
    scoreBoardName.textContent = "Name: " + currentUser.fname + " " + currentUser.lname;
    scoreBoardPercentage.textContent = "Percentage: " + percentage.toFixed(2) + "%";

    document.querySelector(".inner-cover").style.display = "none";
    document.querySelector(".scoreboard-div").style.display = "block";
    document.querySelector(".scoreboard-div").classList.add("space")
    if (percentage >= 80) {
      let medalDiv = document.querySelector(".medal-div");
      let medalImage = document.createElement("img");
      medalImage.src = "./images/q16-removebg-preview.png";
      medalImage.alt = "Medal";
      medalDiv.appendChild(medalImage);
    }
    return;
  } else {

    let randomQuestionIndex;
    do {
      randomQuestionIndex = Math.floor(Math.random() * quizInfo.length);
    } while (questionsAsked.includes(randomQuestionIndex));

    questionsAsked.push(randomQuestionIndex);

    currentQuestion = quizInfo[randomQuestionIndex];

    // currentQuestion = quizInfo[currentQuestionIndex];
    question.textContent = currentQuestion.question;

    let randomOptions = currentQuestion.options.sort(() => Math.random() - 0.5);

    qbutton1.textContent = randomOptions[0];
    qbutton2.textContent = randomOptions[1];
    qbutton3.textContent = randomOptions[2];
    qbutton4.textContent = randomOptions[3];

    // startGame();
  }

}




function checkAnswer(selectedOption) {

  clearInterval(timer);

  if (selectedOption.textContent === currentQuestion.answer) {
    points += 5;

  }

  point01.textContent = "Points: " + points;


  startGame();
}

qbutton1.addEventListener("click", function () {
  checkAnswer(qbutton1);
});

qbutton2.addEventListener("click", function () {
  checkAnswer(qbutton2);
});

qbutton3.addEventListener("click", function () {
  checkAnswer(qbutton3);
});

qbutton4.addEventListener("click", function () {
  checkAnswer(qbutton4);
});


startButton.addEventListener("click", startGame);