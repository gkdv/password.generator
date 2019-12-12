var header = document.getElementsByTagName('h1');
header[0].align = 'center';

document.body.style.backgroundColor = 'lightgrey';
// document.getElementsByClassName("wrapper").style.backgroundColor = 'white';
// document.getElementsByClassName("wrapper").style.margin = '5%';



// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.style.backgroundColor = 'red';
generateBtn.style.color = 'white';
generateBtn.style.borderRadius = '3px';


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
