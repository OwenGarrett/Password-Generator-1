// Assignment code here
//Query Selectors
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// Variables for password
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "~`!@#$%^&*()-_=+[{]},.<>/?;:";

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
