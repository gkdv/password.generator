

// user input prompts
var characterCount;
var specialCharacters;
var numericCharacter;
var lowerCase;
var upperCase;

console.log(characterCount);
console.log(specialCharacters);
console.log(numericCharacter);
console.log(lowerCase);
console.log(upperCase);

// variables arrays to be used for random selection when creating password.
// var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var upperCaseArray = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'L', 'K', 'J', 'H', 'G', 'F', 'D', 'S', 'A', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
// var numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// var specialCharacterArray = ['?', '!', ',', '.', '<', '>', ';', ':', '/', '#', '@', '-', '_'];


if (specialCharacters === false){
  var characterSet = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"]

} else if (numericCharacter === false){
  var characterSet = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,?!@#$%&*-_|`~'];

} else if (lowerCase === false){
  var characterSet = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ.,?!@#$%&*-_|`~1234567890']

} else if (upperCase === false){
  var characterSet = ['.,?!@#$%&*-_|`~1234567890abcdefghijklmnopqrstuvwxyz']

} else{
  var characterSet = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,?!@#$%&*-_|`~1234567890']
}

function generatePassword(){
  var theString = []
  for (i = 0; i <= characterCount; i++){
    characterSet = characterSet.toString('');
    rndmIndex = Math.floor(Math.random()*characterSet.length);
    theString.push(characterSet[rndmIndex])
  }
  return(theString.toString().replace(/,/g, ""));
}


function genPass(){
  characterCount = prompt("How many characters would you like your password to be? \nMust be between 8 and 128 characters.");
  specialCharacters = confirm('would you like to include special characters?');
  numericCharacter = confirm('Would you like to include numeric characters?');
  lowerCase = confirm('Would you like to include lower case letter?');
  upperCase = confirm('would you like to include upper case letters?');
  document.querySelector('#password').innerHTML = generatePassword();
}

function clipBoard(){
  var copyText = document.getElementById("#password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
}








// // Assignment Code
// var generateBtn = document.querySelector("#generate");
// generateBtn.style.backgroundColor = 'red';
// generateBtn.style.color = 'white';


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
// }

// function copyToClipboard() {
//   // BONUS 
// }


// // BONUS EVENT LISTENER
