// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lengthOfPassword = prompt("Password must be between 8 and 128 characters: Enter Now!");
  lengthOfPassword = parseInt(lengthOfPassword);

  if (typeof lengthOfPassword !== 'number' || lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert("Password lenght must be a number between 8 and 128");
    return;
  }

var useLowercase = confirm("Add lowercase characters?");
var useUppercase = confirm("Add uppercase characters?");
var useNumeric = confirm("Add numeric characters?");
var useSpecial = confirm("Add special characters?");

if(!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
  alert("You have to choice at least one character type");
  return;
}
var characters ="";
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+";

if (useLowercase) characters += lowercaseChars;
if (useUppercase) characters += uppercaseChars;
if (useNumeric) characters += numericChars;
if (useSpecial) characters += specialChars;


var password = "";
for (var i = 0; i < lengthOfPassword; i++) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  password += characters.charAt(randomIndex);
}

return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

