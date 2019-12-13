

// user input prompts
var characterCount = prompt("How many characters would you like your password to be? \nMust be between 8 and 128 characters.");
var specialCharacters = confirm('would you like to include special characters?');
var numericCharacter = confirm('Would you like to include numeric characters?');
var lowerCase = confirm('Would you like to include lower case letter?');
var upperCase = confirm('would you like to include upper case letters?');

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
    // console.log(rndmIndex + 'first')
    theString.push(characterSet[rndmIndex])
    // console.log(characterSet + 'second') 
  }
  // var randomNumber = Math.random().toString().split('')

  return(theString)
}
console.log(generatePassword())



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

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // BONUS EVENT LISTENER
