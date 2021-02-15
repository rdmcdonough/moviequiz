// Assignment Code
var startBtn = document.querySelector("#start");
//^^created for event listener
// var nextBtn = document.querySelector("#start");

var questionSpan = document.querySelector("#question");
//created for using textContent downline to fill in the user generated question

var questionGenerated = "";
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
var originalTriviaQuestions = ["What is a 'baby'?", "What is a 'blonde'?", "what is a 'midget'?", "what does the term 'strike' mean?", "What does the term 'kill' mean?", "What is the role of the 'bestboy'?", "What is a 'gaffer'?", "What is a pancake?", "what is a 'roadrunner'?"];
//must create array the length of the user slected "what length do you want your password?" promt
// var finalArr = [];
var remainingTriviaQuestions = [];

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
    console.log(remainingTriviaQuestions)
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


function showQuestionGenerated () {
    questionSpan.textContent = (questionGenerated);
}

startBtn.addEventListener("click", function() {
  console.log("hello");
  writeQuestion();
  showQuestionGenerated();
  hideStart ();
  // remainingTriviaQuestions = (originalTriviaQuestions.splice(triviaQuestionRandomIndex, 1));
  // console.log("These are the remaining trivia questions");
  // console.log(remainingTriviaQuestions);

  });