// Assignment Code
var generateBtn = document.querySelector("#generate");
//^^already in hmw file - created for event listener

var passwordSpan = document.querySelector("#password");
//created for using textContent downline to fill in the user generated password

var passwordGenerated = "";
//password starts as empty vessel to be generated then final string get pushed in
// var userLength = prompt("What length do you want your password?");
// this will be used to create the length of finalArr

//must create arrays of all possible password content for user to choose to use array or not use array
// var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
// var lowerCase = ["a", "b", "c", "d"]
var lowerCaseArr = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numberArr = "0123456789".split("");
var specialArr = "!#$%&'()*+,-./:;<=>?@^_`{|}~".split("");

//must ask user what content they want in password
// var lowerCaseChoice = confirm("Do you want lower case?");
// var upperCaseChoice = confirm("Do you want Upper case?");
// var numberChoice = confirm("Do you want numbers?");
// var specialChoice = confirm("Do you want special characters? '!#$%&'()*+,-./:;<=>?@^_`{|}~'");

//must create array of all possible password content after user selection
var logicArr = [];
//must create array the length of the user slected "what length do you want your password?" promt
// var finalArr = [];


// Write password to the #password input
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function writePassword() {
 passwordGenerated = ""
 logicArr = []
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
 //^^^already written in homework file - need to check variables match

  //must fill logicArray with all the content the user selects in confirms
  if (lowerCaseChoice) {
    for(var i = 0; i < lowerCaseArr.length; i++) {
        logicArr.push(lowerCaseArr[i])
    } 
  }

  if (upperCaseChoice) {
     for(var i =0; i < upperCaseArr.length; i++) {
         logicArr.push(upperCaseArr[i])
    } 
  }

  if (numberChoice) {
     for(var i = 0; i < numberArr.length; i++) {
         logicArr.push(numberArr[i])
    } 
  }

  if (specialChoice) {
     for(var i = 0; i < specialArr.length; i++) {
         logicArr.push(specialArr[i])
    } 
  }
  console.log("This is my logic Array");
  console.log(logicArr)
   // so far created a master array of user defined content possibilty by pushing into logicArr
  //must fill finalArr with RANDOM selection of items from logicArr with a length equal to userLength


  for(var i = 0; i < userLength; i++) {
    passwordGenerated += logicArr[Math.floor(Math.random() * logicArr.length)]
  } 
  // now that finalArr is filled with random content of type chosen by user the length of user choice the password has been generated as finalArr which is Array format
  //this finalArr has to be transformed into a string in order to be used as password
  //this final string is then pushed to passwordGenerated
  // passwordGenerated.push(finalArr.join(""));
  console.log("This is the generated password")
  console.log(passwordGenerated)
}

function showPasswordGenerated () {
//when button is clicked run writePassword function then diplay generated password
//passwordGenerated needs to be displayed.. 
  if (userLength >= 8 && userLength <= 128) {
    passwordSpan.textContent = (passwordGenerated);
  } else {
    passwordSpan.textContent = ("password must have a length of at least 8 characters and no more than 128 characters");
  }

  if ((userLength < 8 || userLength > 128) && (!lowerCaseChoice && !upperCaseChoice && !numberChoice && !specialChoice)) {
    passwordSpan.textContent = ("password must have a length of at least 8 characters and no more than 128 characters, and consist of lowercase letters, uppercase letters, numbers, or special characters");
  } else if (!lowerCaseChoice && !upperCaseChoice && !numberChoice && !specialChoice) {
    passwordSpan.textContent = ("password must consist of lowercase letters, uppercase letters, numbers, or special characters");
  } 


  // if ((userLength < 5) && (!lowerCaseChoice && !upperCaseChoice && !numberChoice && !specialChoice)) {
  //   passwordSpan.textContent = ("password must have a length greater than 4 and consist of lowercase letters, uppercase letters, numbers, or special characters");
  // }
  
  // else if (!lowerCaseChoice || !upperCaseChoice || !numberChoice || !specialChoice) {
  //   passwordSpan.textContent = ("password must consist of lowercase letters, uppercase letters, numbers, or special characters");
  //   } 
  // else {
  //   passwordSpan.textContent = (passwordGenerated + "worked"); 
  //   console.log("show password function worked if worked is shown in box");
  // }

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
//^^ already in hmw file
generateBtn.addEventListener("click", function() {
  console.log("hello");
  userLength = prompt("What length do you want your password? *password must be in number format and at least 8 characers and no more than 128 characters*");
  
  if (!parseInt(userLength)) {
    alert("Password length must be input in number format")
  return
}


  console.log("password length is " + userLength);
  lowerCaseChoice = confirm("Do you want lower case?");
  console.log("Do you want lowercase?" + lowerCaseChoice);
  upperCaseChoice = confirm("Do you want Upper case?");
  console.log("Do you want uppercase?" + upperCaseChoice);
  numberChoice = confirm("Do you want numbers?");
  console.log("Do you want numbers?" + numberChoice);
  specialChoice = confirm("Do you want special characters? '!#$%&'()*+,-./:;<=>?@^_`{|}~'");
  console.log("Do you want special?" + specialChoice)
  writePassword();

  showPasswordGenerated();
});

