// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^' ,'?' ,':' ,',' ,')' ,'(' ,'}' ,'{' ,']', '[', '~', '-', '_', '.',];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

function generatePassword() {
  var passwordLength = prompt("How long do you want your password?")

  var passwordNumber = parseInt(passwordLength)

  if(!passwordNumber){
    return generatePassword()
  }

  console.log(passwordLength)
  console.log(typeof passwordLength)
  var lowercase = confirm("Do you want lowercase letters?")
  var uppercase = confirm("Do you want uppercase letters?")
  var numbers = confirm("Do you want numbers?")
  var special = confirm("Do you want special characters?")

  console.log("lowercase!~~~",lowercase)
  var posibilities = []
  if (lowercase) {
    posibilities = posibilities.concat(lowerCasedCharacters)
  }

  if (uppercase) {
    posibilities = posibilities.concat(upperCasedCharacters)
  }

  if (special) {
    posibilities = posibilities.concat(specialCharacters)
  }

  if (numbers) {
    posibilities = posibilities.concat(numericCharacters)
  }
  console.log(posibilities)
  var password = ""

  for(var i=0; i<passwordNumber;i++) {
    var randomIndex = Math.floor(Math.random() * posibilities.length)
    var randomCharacter = posibilities[randomIndex] 
    password += randomCharacter
  }

    return password
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);