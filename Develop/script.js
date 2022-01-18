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
  // THEN I am presented with a series of prompts for password criteria
 
  // Prompt the user for password length
  var passwordLength = getPasswordLengthFromUser();

  // check whatever the user gave us is between 8-128 characters
  if (passwordLengthIsValid(passwordLength)) {
    // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    var includeLowercase = confirm("Click OK if you want to include lowercase in your password.");
    var includeUppercase = confirm("Click OK if you want to include uppercase in your password.");
    var includeNumeric = confirm("Click OK if you want to include numbers in your password.");
    var includeSpecialChar = confirm("Click OK if you want to include special characters in your password.");    
  } else {
    alert("Invalid number, please try again.");
  }

  // THEN my input should be validated and at least one character type should be selected
  if (includeLowercase || includeUppercase || includeNumeric || includeSpecialChar) {
    returnPassword = generatePasswordFromUserInput(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecialChar);
    // If we got inside here then at least one character type was selected.
  } else {
    alert("You need to at least pick one character type, please try again.");
  }

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria

  return returnPassword;

}

function getPasswordLengthFromUser() {
  // Prompt user
  var userResponse = prompt("Select a password length between 8 and 128.");
  return userResponse;
}

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
    // Add characters  
    returnPassword = returnPassword + getRandomValidCharacter(includeLowercase, includeUppercase, includeNumeric, includeSpecialChar);
 }

  return returnPassword;
}

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
  //var i = random(passwordArray.length);    

  return passwordArray[i];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


