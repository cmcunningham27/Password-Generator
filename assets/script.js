

// Assignment Code
var generateBtn = document.querySelector("#generate");


var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

var character = ["upper case", "lower case", "numbers", "special characters"];

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

    var characterTypes = prompt("Please enter each caracter type you would like in your password (upper case, lower case, numbers, special characters).");

    characterTypes = characterTypes.toLowerCase();

    var minimumCount = 0;

    var minimumUpper = " ";
    var minimumLower = " ";
    var miniimumNumbers = " ";
    var minimumSpecial = " ";
   

    //To generate criteria chosen
    var functionArray = {

      getUpperCase: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      },

      getLowerCase: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
      },

      getNumbers: function() {
        return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
      },

      getSpecialCharacters: function() {
        return String.fromCharCode(Math.floor(Math.random() * specialCharacters.length));
      }
      
    };
    
    if (characterTypes === "upper case") {
      minimumUpper = functionArray.getUpperCase();
      minimumCount++;
    } else if (characterTypes === "lower case") {
      minimumLower = functoniArray.getLowerCase();
      minimumCount++;
    } else if (characterTypes === "numbers") {
      minimumNumbers = functionArray.getNumbers();
      minimumCount++;
    } else {
      minimumSpeacial = functonArray.getSpecialCharacters();
      minimumCount++;
    };




    }



    
}

generatePassword();