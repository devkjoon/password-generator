// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var random = Math.random()
  return Math.floor(min*(1 - random) + random*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function  generatePassword() {

  var userInput = window.prompt("What length would you like your password to be?")
  // Changing string to number
  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("Please enter a number!")
    return
  } 

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be more than 8 and less than 128 characters!")
    return
  }

  var passwordNumbers = window.confirm("Would you like numbers in your password?")
  var passwordSymbols = window.confirm("Would you like symbols in your password?")
  var passwordLowercase = window.confirm("Would you like lowercase letters in your password?")
  var passwordUppercase = window.confirm("Would you like uppercase letters in your password?")

  var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var preferences = []

  if (passwordNumbers === true) {
    preferences.push(numberList)
  }

  if (passwordSymbols === true) {
    preferences.push(symbolList)
  }

  if (passwordLowercase === true) {
    preferences.push(lowercaseList)
  }

  if (passwordUppercase === true) {
    preferences.push(uppercaseList)
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(preferences)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
