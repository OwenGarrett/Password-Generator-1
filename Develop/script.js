var characterLength = 8;
var choiceArr = [];

var lowercaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['`','~','!','@','#','$','%','^','&','*','(',')','-','_','+','='];


// Assignment code here
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {


}














/*
Assignment code here
//Query Selectors
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// Variables for password
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "~`!@#$%^&*()-_=+[{]},.<>/?;:";

// Event listener
// generateBtn.addEventListener("click, generatePassword");

// Prompt
function generatePassword() {
  var length = parseInt(
    prompt(
      "Please enter the length of your password. Password must be between 8 and 128 characters."
    )
  );
  if (!isNaN(length)) {
    if (length > 8 && length < 128) {
      console.log("correct length");
    } else {
      console.log("incorrect length");
    }
  } else {
    console.log("not a number");
  }

  return "Hello World";
}

// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/