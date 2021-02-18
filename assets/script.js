// Assignment Code
var generateBtn = document.querySelector("#generate");

// Special characters options created
const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompts presented after clicking generate password
function generatePassword() {
    var passwordLength = prompt("Please enter the number of characters you want in your password. It must have at least 8 and no more than 128.");

    var upperCases = confirm("Click OK if you want upper case letters in your password?");

    var lowerCases = confirm("Click OK if you want lower case letters in your password?");

    var numbers = confirm("ClickOK if you want numbers in your password?");

    var special = confirm("Click OK if you want special characters in your password?");

    
}

generatePassword();