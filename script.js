// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lengthOfPassword = prompt("Password must be between 8 and 128 characters: Enter Now!");

  if (lengthOfPassword <= 8 || lengthOfPassword >= 128)
    alert("Password length must be a number between 8 and 128.");
    return;
}

var useLowercase = confirm("Add lowercase characters?");
var useLowercase = confirm("Add uppercase characters?");
var useLowercase = confirm("Add numeric characters?");
var useLowercase = confirm("Add special characters?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
