// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lengthOfPassword = prompt("Password must be between 8 and 128 characters: Enter Now!");
  passwordLength = parseInt(passwordLength);


}

var useLowercase = confirm("Add lowercase characters?");
var useUppercase = confirm("Add uppercase characters?");
var useNumeric = confirm("Add numeric characters?");
var useSpecial = confirm("Add special characters?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
