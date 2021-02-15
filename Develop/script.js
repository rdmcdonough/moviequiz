
var startBtn = document.querySelector("#start");
var questionSpan = document.querySelector("#question");
var aBtnSpan = document.querySelector("#Abtn");
var bBtnSpan = document.querySelector("#Bbtn");
var cBtnSpan = document.querySelector("#Cbtn");
var dBtnSpan = document.querySelector("#Dbtn");
var timerSpan = document.querySelector("#timer");
var highscoreSpan = document.querySelector("#highscore");

var timeRemaining = 60;

var triviaQuestionRandomIndex = "";
var questionGenerated = "";
var correctAnswerGenerated = "";
var falseAnswers1Generated = "";
var falseAnswers2Generated = "";
var falseAnswers3Generated = "";

var originalTriviaQuestions = ["What is a 'baby'?", "What is a 'blonde'?", "what is a 'midget'?", "what does the term 'strike the set' mean?", "what does the term 'strike the light' mean?", "What does the term 'kill the baby' mean?", "What is the role of the 'bestboy'?", "What is a 'gaffer'?", "What is a pancake?", "what is a 'roadrunner'?"];
var correctAnswers = ["a 1k Mole Richardson fresnel", "a 2k open-face light", "a 200w Mole Richardson fresnel", "to breakdown and wrap a set after shooting", "to turn on the light", "to turn off the 1k fresnel", "Assistant Chief Lighting Technician", "Chief Lighting Technician and head of the Set Lighting Department", "the thinnest apple-box", "a type of crankstand used for big lights"];
var falseAnswers1 = ["a 750w Leko", "a type of beer Lighting Technicians enjoy", "the Production Assistant in charge of the director's coffee", "used when a stunt car crashes on set", "to cover the light with a sider or topper", "crew nap time", "Lighting Intern", "a type of walkie-talkie common an sets", "a type of wedge", "a small and light weight bicycle used to move quickly around set"];
var falseAnswers2 = ["a 2k Mole Richardson fresnel", "a type of diffusion used to make the color of the light more yellow", "a 10k Par HMI light", "to turn a light on the set", "used when a stunt car crashes into a light", "to drop a double scrim in the light", "nobody really knows", "the DP's light meter", "a circular plate for reflecting light", "Production Assistant in charge of communication between basecamp and set"];
var falseAnswers3 = ["a snack at crafty", "a type of stand used for small lighs", "a short stand", "used when the camera sees the edge of the set", "to breakdown and wrap the light", "to turn on the 5k fresnel", "to drink beer in the truck", "1st Camera Operator and head of the camera department", "a object used for stacking cable", "an indestructible box used to hold light bulbs"];

var remainingTriviaQuestions = [];
var remainingCorrectAnswers = [];
var remainingFalseAnswers1 = [];
var remainingFlaseAnswers2 = [];
var remainingFalseAnswers3 = [];

var remaining8TriviaQuestions = [];
var remaining8CorrectAnswers = [];
var remaining8FalseAnswers1 = [];
var remaining8FlaseAnswers2 = [];
var remaining8FalseAnswers3 = [];

document.getElementById("Abtn").style.display = 'none';
document.getElementById("Bbtn").style.display = 'none';
document.getElementById("Cbtn").style.display = 'none';
document.getElementById("Dbtn").style.display = 'none';
document.getElementById("timer").style.display = 'none';
document.getElementById("highscorebox").style.display = 'none';

function writeQuestion() {
 questionGenerated = ""

  console.log("These are my trivia questions");
  console.log(originalTriviaQuestions);

  triviaQuestionRandomIndex = Math.floor(Math.random() * originalTriviaQuestions.length);
    console.log("this is random index of array originalTriviaQuestions");
    console.log(triviaQuestionRandomIndex);
    console.log("This is the question at that index");
    console.log(originalTriviaQuestions[triviaQuestionRandomIndex]);
    questionGenerated += originalTriviaQuestions[triviaQuestionRandomIndex];

  for(var i = 0; i < originalTriviaQuestions.length; i++)
    if (i != triviaQuestionRandomIndex) {
      remainingTriviaQuestions.push(originalTriviaQuestions[i])
    }
    console.log("These are the remaining trivia questions ");
    console.log(remainingTriviaQuestions);

  console.log("This is the generated question");
  console.log(questionGenerated);
}

function hideStart () {
  document.getElementById("start").style.display = 'none';
}

function showTimer () {
  document.getElementById("timer").style.display = 'block';
} 

function startTimer() {
  var timerInterval = setInterval(function() {
    timeRemaining--;
    timerSpan.textContent = "Time Remaining: " + timeRemaining;

    if(timeRemaining === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }

  }, 1000);
}


function generateAnswers () {
  document.getElementById("Abtn").style.display = 'block';
  document.getElementById("Bbtn").style.display = 'block';
  document.getElementById("Cbtn").style.display = 'block';
  document.getElementById("Dbtn").style.display = 'block';

  correctAnswerGenerated = "";
  falseAnswers1Generated = "";
  falseAnswers2Generated = "";
  falseAnswers3Generated = "";

  console.log("this is random index");
  console.log(triviaQuestionRandomIndex);
  console.log("This is the correct answer at that index");
  console.log(correctAnswers[triviaQuestionRandomIndex]);
  correctAnswerGenerated += correctAnswers[triviaQuestionRandomIndex];
  console.log("These are the false answers at that index");
  console.log(falseAnswers1[triviaQuestionRandomIndex])
  falseAnswers1Generated += falseAnswers1[triviaQuestionRandomIndex];
  console.log(falseAnswers2[triviaQuestionRandomIndex])
  falseAnswers2Generated += falseAnswers2[triviaQuestionRandomIndex];
  console.log(falseAnswers3[triviaQuestionRandomIndex])
  falseAnswers3Generated += falseAnswers3[triviaQuestionRandomIndex];

  for(var i = 0; i < correctAnswers.length; i++)
    if (i != triviaQuestionRandomIndex) {
      remainingCorrectAnswers.push(correctAnswers[i]);
      remainingFalseAnswers1.push(falseAnswers1[i]);
      remainingFlaseAnswers2.push(falseAnswers2[i]);
      remainingFalseAnswers3.push(falseAnswers3[i]);
    }
    console.log("These are the remaining correct answers ");
    console.log(remainingCorrectAnswers);
    console.log("These are the remaining flaseanswers1 ");
    console.log(remainingFalseAnswers1);
    console.log("These are the remaining fasleanswers2 ");
    console.log(remainingFlaseAnswers2);
    console.log("These are the remaining falseanswers3 ");
    console.log(remainingFalseAnswers3);
}


function showQuestionGenerated () {
    questionSpan.textContent = (questionGenerated);
}

function showAnswersGenerated () {
  aBtnSpan.textContent = (correctAnswerGenerated);
  bBtnSpan.textContent = (falseAnswers1Generated);
  cBtnSpan.textContent = (falseAnswers2Generated);
  dBtnSpan.textContent = (falseAnswers3Generated);
}

function writeNextQuestion() {
  questionGenerated = ""

   console.log("These are my remaining trivia questions");
   console.log(remainingTriviaQuestions);

   triviaQuestionRandomIndex = Math.floor(Math.random() * remainingTriviaQuestions.length);
     console.log("this is random index of array remainingTriviaQuestions");
     console.log(triviaQuestionRandomIndex);
     console.log("This is the question at that index");
     console.log(remainingTriviaQuestions[triviaQuestionRandomIndex]);
     questionGenerated += remainingTriviaQuestions[triviaQuestionRandomIndex];
  
  for(var i = 0; i < remainingTriviaQuestions.length; i++) {
     if (i != triviaQuestionRandomIndex) 
       remaining8TriviaQuestions.push(remainingTriviaQuestions[i])
     }

     console.log("These are now the remaining8 trivia questions ");
     console.log(remaining8TriviaQuestions);
 
   console.log("This is the generated question");
   console.log(questionGenerated);
}

function generateNextAnswers () {
      correctAnswerGenerated = "";
      falseAnswers1Generated = "";
      falseAnswers2Generated = "";
      falseAnswers3Generated = "";
    
      console.log("this is random index");
      console.log(triviaQuestionRandomIndex);
      console.log("This is the remaining correct answer at that index");
      console.log(remainingCorrectAnswers[triviaQuestionRandomIndex]);
      correctAnswerGenerated += remainingCorrectAnswers[triviaQuestionRandomIndex];
      console.log("These are the remaining false answers at that index");
      console.log(remainingFalseAnswers1[triviaQuestionRandomIndex])
      falseAnswers1Generated += remainingFalseAnswers1[triviaQuestionRandomIndex];
      console.log(remainingFlaseAnswers2[triviaQuestionRandomIndex])
      falseAnswers2Generated += remainingFlaseAnswers2[triviaQuestionRandomIndex];
      console.log(remainingFalseAnswers3[triviaQuestionRandomIndex])
      falseAnswers3Generated += remainingFalseAnswers3[triviaQuestionRandomIndex];
    
      for(var i = 0; i < remainingCorrectAnswers.length; i++)
        if (i != triviaQuestionRandomIndex) {
          remaining8CorrectAnswers.push(remainingCorrectAnswers[i]);
          remaining8FalseAnswers1.push(remainingFalseAnswers1[i]);
          remaining8FlaseAnswers2.push(remainingFlaseAnswers2[i]);
          remaining8FalseAnswers3.push(remainingFalseAnswers3[i])
        }
        console.log("These are the remaining8 correct answers ");
        console.log(remaining8CorrectAnswers);
        console.log("These are the remaining8 flaseanswers1 ");
        console.log(remaining8FalseAnswers1);
        console.log("These are the remaining8 fasleanswers2 ");
        console.log(remaining8FlaseAnswers2);
        console.log("These are the remaining8 falseanswers3 ");
        console.log(remaining8FalseAnswers3);
}

function endQuiz () {
  document.getElementById("Abtn").style.display = 'none';
  document.getElementById("Bbtn").style.display = 'none';
  document.getElementById("Cbtn").style.display = 'none';
  document.getElementById("Dbtn").style.display = 'none';
  timerSpan.textContent = "Your Time is Up - The Quiz is Over";
  questionSpan.textContent = "Your results show here";
  document.getElementById("highscorebox").style.display = 'block';
}

// if (remainingCorrectAnswers.length === 0) {
//   endQuiz ();
// }

startBtn.addEventListener("click", function() {
  console.log("hello");
  console.log(originalTriviaQuestions.length);
  console.log(correctAnswers.length);
  console.log(falseAnswers1.length);
  console.log(falseAnswers2.length);
  console.log(falseAnswers3.length);
  writeQuestion();
  showQuestionGenerated();
  hideStart ();
  showTimer ();
  startTimer ();
  generateAnswers ();
  showAnswersGenerated ();
});

aBtnSpan.addEventListener("click", function() {
    console.log("aBtn clicked")
    writeNextQuestion ();
    showQuestionGenerated ();
    generateNextAnswers ();
    showAnswersGenerated ();
});

bBtnSpan.addEventListener("click", function() {
    console.log("bBtn clicked")
    writeNextQuestion ();
    showQuestionGenerated ();
    generateNextAnswers ();
    showAnswersGenerated ();
});

cBtnSpan.addEventListener("click", function() {
    console.log("cBtn clicked")
    writeNextQuestion ();
    showQuestionGenerated ();
    generateNextAnswers ();
    showAnswersGenerated ();
});

dBtnSpan.addEventListener("click", function() {
    console.log("dBtn clicked")
    writeNextQuestion ();
    showQuestionGenerated ();
    generateNextAnswers ();
    showAnswersGenerated ();
});