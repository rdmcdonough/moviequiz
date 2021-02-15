// Assignment Code
var startBtn = document.querySelector("#start");
//^^created for event listener
// var nextBtn = document.querySelector("#start");

var questionSpan = document.querySelector("#question");
var aBtnSpan = document.querySelector("#Abtn");
var bBtnSpan = document.querySelector("#Bbtn");
var cBtnSpan = document.querySelector("#Cbtn");
var dBtnSpan = document.querySelector("#Dbtn");
//created for using textContent downline to fill in the user generated question

var triviaQuestionRandomIndex = "";
var questionGenerated = "";
var correctAnswerGenerated = "";
var falseAnswers1Generated = "";
var falseAnswers2Generated = "";
var falseAnswers3Generated = "";
//password starts as empty vessel to be generated then final string get pushed in
// var userLength = prompt("What length do you want your password?");
// this will be used to create the length of finalArr

//must create arrays of all possible password content for user to choose to use array or not use array
// var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
// var lowerCase = ["a", "b", "c", "d"]
// var lowerCaseArr = "abcdefghijklmnopqrstuvwxyz".split("");
// var upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// var numberArr = "0123456789".split("");
// var specialArr = "!#$%&'()*+,-./:;<=>?@^_`{|}~".split("");

//must ask user what content they want in password
// var lowerCaseChoice = confirm("Do you want lower case?");
// var upperCaseChoice = confirm("Do you want Upper case?");
// var numberChoice = confirm("Do you want numbers?");
// var specialChoice = confirm("Do you want special characters? '!#$%&'()*+,-./:;<=>?@^_`{|}~'");

//must create array of all possible password content after user selection
var originalTriviaQuestions = ["What is a 'baby'?", "What is a 'blonde'?", "what is a 'midget'?", "what does the term 'strike the set' mean?", "what does the term 'strike the light' mean?", "What does the term 'kill the baby' mean?", "What is the role of the 'bestboy'?", "What is a 'gaffer'?", "What is a pancake?", "what is a 'roadrunner'?"];
var correctAnswers = ["a 1k Mole Richardson fresnel", "a 2k open-face light", "a 200w Mole Richardson fresnel", "to breakdown and wrap a set after shooting", "to turn on the light", "to turn off the 1k fresnel", "Assistant Chief Lighting Technician", "Chief Lighting Technician and head of the Set Lighting Department", "the thinnest apple-box", "a type of crankstand used for big lights"];
var falseAnswers1 = ["a 750w Leko", "a type of beer Lighting Technicians enjoy", "the Production Assistant in charge of the director's coffee", "used when a stunt car crashes on set", "to cover the light with a sider or topper", "crew nap time", "Lighting Intern", "a type of walkie-talkie common an sets", "a type of wedge", "a small and light weight bicycle used to move quickly around set"];
var falseAnswers2 = ["a 2k Mole Richardson fresnel", "a type of diffusion used to make the color of the light more yellow", "a 10k Par HMI light", "to turn a light on the set", "used when a stunt car crashes into a light", "to drop a double scrim in the light", "nobody really knows", "the DP's light meter", "a circular plate for reflecting light", "Production Assistant in charge of communication between basecamp and set"];
var falseAnswers3 = ["a snack at crafty", "a type of stand used for small lighs", "a short stand", "used when the camera sees the edge of the set", "to breakdown and wrap the light", "to turn on the 5k fresnel", "to drink beer in the truck", "1st Camera Operator and head of the camera department", "a object used for stacking cable", "an indestructible box used to hold light bulbs"];

//must create array the length of the user slected "what length do you want your password?" promt
// var finalArr = [];
var remainingTriviaQuestions = [];
var remainingCorrectAnswers = [];
var remainingFalseAnswers1 = [];
var remainingFlaseAnswers2 = [];
var remainingFalseAnswers3 = [];

document.getElementById("Abtn").style.display = 'none';
document.getElementById("Bbtn").style.display = 'none';
document.getElementById("Cbtn").style.display = 'none';
document.getElementById("Dbtn").style.display = 'none';


// Write password to the #password input
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function writeQuestion() {
 questionGenerated = ""
//  remainingTriviaQuestions = ""

  console.log("These are my trivia questions");
  console.log(originalTriviaQuestions);
   // so far created a master array of user defined content possibilty by pushing into logicArr
  //must fill finalArr with RANDOM selection of items from logicArr with a length equal to userLength


  // for(var i = 0; i < userLength; i++) {
  triviaQuestionRandomIndex = Math.floor(Math.random() * originalTriviaQuestions.length);
    console.log("this is random index of array originalTriviaQuestions");
    console.log(triviaQuestionRandomIndex);
    console.log("This is the question at that index");
    console.log(originalTriviaQuestions[triviaQuestionRandomIndex]);
    questionGenerated += originalTriviaQuestions[triviaQuestionRandomIndex];
    
    // remainingTriviaQuestions = (originalTriviaQuestion.splice(triviaQuestionRandomIndex, 1);
    // console.log(originalTriviaQuestions.splice(0, 1));
    // remainingTriviaQuestions = originalTriviaQuestions.splice((triviaQuestionRandomIndex), (1));
    // console.log("These are the remaining trivia questions");
    // console.log(remainingTriviaQuestions);
  for(var i = 0; i < originalTriviaQuestions.length; i++)
    if (i != triviaQuestionRandomIndex) {
      remainingTriviaQuestions.push(originalTriviaQuestions[i])
    }
    console.log("These are the remaining trivia questions ");
    console.log(remainingTriviaQuestions);
  // } 
  // now that finalArr is filled with random content of type chosen by user the length of user choice the password has been generated as finalArr which is Array format
  //this finalArr has to be transformed into a string in order to be used as password
  //this final string is then pushed to passwordGenerated
  // passwordGenerated.push(finalArr.join(""));
  console.log("This is the generated question");
  console.log(questionGenerated);
    // startBtn.textContent = "Next";
  
  
  // // triviaQuestions.pop()
  // console.log("These are the remaining trivia questions");
  // console.log(remainingTriviaQuestions);
}

function hideStart () {
  document.getElementById("start").style.display = 'none';
  // startBtn.style.display = 'none';
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
      remainingFalseAnswers3.push(falseAnswers3[i])
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
  generateAnswers ();
  showAnswersGenerated ();
  // remainingTriviaQuestions = (originalTriviaQuestions.splice(triviaQuestionRandomIndex, 1));
  // console.log("These are the remaining trivia questions");
  // console.log(remainingTriviaQuestions);

  });