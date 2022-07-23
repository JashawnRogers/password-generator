// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthOfPassword;
var userUppercase;
var userLowercase;
var userSpecialChar;
var userNumber;
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialChar = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', ':', ';', '[', ']', '{', '}', '<', ',', '>', '.', '/', '?', '|'];
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var chosenPassword = [];

// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password"); 
  lengthOfPassword = prompt("Choose a number between 8 and 128. This will be the length of your new password.");

  // checks for user input
  if (lengthOfPassword == null) {
    alert("You must enter a value");
  } 
  // Checks if input is between 8 and 128
  else if (lengthOfPassword <= 8 || lengthOfPassword >= 128){
      alert("Must choose a number in between 8 and 128");
  } else {
    // Then checks for rest of criteria
    userLowercase = confirm("Password contains lowercase characters?");
    userUppercase = confirm("Password contains uppercase characters?");
    userNumber = confirm("Password contains numbers?");
    userSpecialChar = confirm("Password contains special characters?");
  }

  // if statement for validation of confirm prompts
  // if all 4 options were denied
  if (!userLowercase && !userUppercase && !userNumber && !userSpecialChar && lengthOfPassword >= 8 && lengthOfPassword <= 128) {
    alert("You must choose at least one option.");
  } 
  // if all 4 options were chosen
  if (userLowercase && userUppercase && userNumber && userSpecialChar) {
    chosenPassword = lowercase.concat(uppercase, number, specialChar);
  }
  // different variations if 3 options were chosen
  else if (userLowercase && userUppercase && userNumber) {
    chosenPassword = lowercase.concat(uppercase, number);
  }
  else if (userLowercase && userUppercase && userSpecialChar) {
    chosenPassword = lowercase.concat(uppercase, specialChar);
  }
  else if (userLowercase && userNumber && userSpecialChar) {
    chosenPassword = lowercase.concat(number, specialChar);
  }
  else if (userUppercase && userNumber && userSpecialChar) {
    chosenPassword = uppercase.concat(number, specialChar);
  }
  // if 2 options were chosen
  else if (userLowercase && userUppercase) {
    chosenPassword = lowercase.concat(uppercase);
  }
  else if (userLowercase && userSpecialChar) {
    chosenPassword = lowercase.concat(specialChar);
  }
  else if (userLowercase && userNumber) {
    chosenPassword = lowercase.concat(number);
  }
  else if (userUppercase && userSpecialChar) {
    chosenPassword = uppercase.concat(specialChar);
  }
  else if (userUppercase && number) {
    chosenPassword = uppercase.concat(number);
  }
  else if (userSpecialChar && userNumber) {
    chosenPassword = specialChar.concat(number);
  }
  // if 1 option was chosen
  else if (userLowercase) {
    chosenPassword = lowercase;
  }
  else if (userUppercase) {
    chosenPassword = uppercase;
  }
  else if (userSpecialChar) {
    chosenPassword = specialChar;
  }
  else if (userNumber) {
    chosenPassword = number;
  }


  function generatePassword(){
   //placeholder array to hold choices
    var pw = [];
    
    //Randomly selects array items of chosenPassword based on value of lengthOfPassword 
    for (var i = 0; i < lengthOfPassword; i++) {
      var choices = chosenPassword[Math.floor(Math.random() * chosenPassword.length)];

      pw.push(choices);
    }

    //Joins pw array and converts it to a string
    var ps = pw.join(''); 
    passwordText.textContent = ps;
  }

  generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
