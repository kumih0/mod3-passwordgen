var 

// Assignment Code
var generateBtn = document.querySelector("#generate");

console.log(generateBtn);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

console.log(writePassword);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

    var pwlength = prompt("Enter the desired length of your password (8-128 characters)");

    if (typeof pwlength!=="number"|| pwlength.value<8 || pwlength.value>128) {
      alert("You've entered an invalid input. Please enter a number between 8-128.");
      return generatePassword();
    }

    var isBigLetters = confirm("Include UPPERCASE letters in your password?");
    var isLilLetters = confirm("Include lowercase letters in your password?");
    var isNumbers = confirm("Includes numbers in your passsword?");
    var isSpecial = confirm("Includes special characters in your password?");

    if (isBigLetters!==true && isLilLetters!==true && isNumbers!==true && isSpecial!==true) {
      alert("You must select at least ONE category to generate a password.");
      return generatePassword();
    } else {
      
    }
   

}




// Write password to the #password input
// function writePassword() {
//   // alert("working")
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// function generatePassword(){
//   return "hello"
// }
 

//ask for length of a password
  //prompt
  //save it to a variable
//check the length provided by user is a number and in between 8 and 128
  
//confirm : 4 for uppercase, lowercase, numbers, special characters
  // save it to a variable
//check if one of the  uppercase or lowercase or num or sp char is there
   // combine the confirmed arrays
// create an array for uppercase letters, lowercase letters....
//create an array variable to have a new password with length provided by user. []
//random item from combined array and push it to new password array and do this step up to the length of user input.