var header = document.getElementsByTagName('h1');
header[0].align = 'center';

document.body.style.backgroundColor = 'lightgrey';
// document.getElementsByClassName("wrapper").style.backgroundColor = 'white';
// document.getElementsByClassName("wrapper").style.margin = '5%';

var characterCount = prompt("How many characters would you like your password to be? \nMust be between 8 and 128 characters.");
// console.log(characterCount);
var specialCharacters = prompt('would you like to include special characters? \nYes or No');
// console.log(specialCharacters);
var numericCharacter = prompt('Would you like to include numeric characters? \nYes or No');
// console.log(numericCharacter);
var lowerCase = prompt('Would you like to include lower case letter? \nYes or No');
// console.log(lowerCase);
var upperCase = prompt('would you like to include upper case letters? \nYes or No');
// console.log(upperCase);

var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArray = ['Z','X','C','V','B','N','M','L','K','J','H','G','F','D','S','A','Q','W','E','R','T','Y','U','I','O','P'];
var numericArray = [1,2,3,4,5,6,7,8,9,0];
var specialCharacterArray = ['?','!',',','.','<','>',';',':','/','#','@','-','_'];


// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.style.backgroundColor = 'red';
generateBtn.style.color = 'white';


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
