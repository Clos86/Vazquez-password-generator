// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var returnPassword = "";
  var passwordLength = getPasswordLengthFromUser();

  // Prompting user for style of password
  if (passwordLengthIsValid(passwordLength)) {    
    var includeLowercase = confirm("Click OK if you want to include lowercase in your password.");
    var includeUppercase = confirm("Click OK if you want to include uppercase in your password.");
    var includeNumeric = confirm("Click OK if you want to include numbers in your password.");
    var includeSpecialChar = confirm("Click OK if you want to include special characters in your password.");    
  } else {
    alert("Invalid number, please try again.");
  } 

  if (includeLowercase || includeUppercase || includeNumeric || includeSpecialChar) {
    returnPassword = generatePasswordFromUserInput(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecialChar);    
  } else {
    alert("You need to at least pick one character type, please try again.");
  }

  return returnPassword;
}

// Prompt user for password length
function getPasswordLengthFromUser() { 
  var userResponse = prompt("Select a password length between 8 and 128.");
  return userResponse;
}

// Making sure the user inputs within the correct password length
function passwordLengthIsValid(passwordLength) {  
  if (passwordLength < 8) {
    return false;
  }

  if (passwordLength > 128) {
    return false;
  }

  return true;
}

function generatePasswordFromUserInput(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecialChar) {
  var returnPassword = "";
  
  while (returnPassword.length < passwordLength) {    
    returnPassword = returnPassword + getRandomValidCharacter(includeLowercase, includeUppercase, includeNumeric, includeSpecialChar);
 }

  return returnPassword;
}

// Generating password from given user input
function getRandomValidCharacter(includeLowercase, includeUppercase, includeNumeric, includeSpecialChar) {
  var lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  var numericSet = "0123456789";
  var specialCharSet = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  var passwordPossibleCharacterString = "";

  if (includeLowercase) {
    passwordPossibleCharacterString = passwordPossibleCharacterString + lowerCaseSet;
  }
  if (includeUppercase) {
    passwordPossibleCharacterString = passwordPossibleCharacterString + upperCaseSet;
  }
  if (includeNumeric) {
    passwordPossibleCharacterString = passwordPossibleCharacterString + numericSet;
  }
  if (includeSpecialChar) {
    passwordPossibleCharacterString = passwordPossibleCharacterString + specialCharSet;
  }

  var passwordArray = passwordPossibleCharacterString.split('');
  var i = Math.floor(Math.random() * passwordArray.length);    

  return passwordArray[i];
}

generateBtn.addEventListener("click", writePassword);