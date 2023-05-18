var bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lilLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var lilLetters = bigLetters[].toLowercase()???
var numbahs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specials = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];



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

function passwordLength(){
  // parseint converts string into number
    var pwlength = parseInt(prompt("Enter the desired length of your password (8-128 characters)"));
// pwlength==NaN typeof pwlength!=="number"|| pwlength==NaN 
    if (pwlength>=8 || pwlength<=128) { 
      return passwordLength();
    } else{
      alert("You've entered an invalid input. Please enter a number between 8-128.");
      passwordLength();
    }
}
console.log(passwordLength);
// var pwArray = [scattagories()];
    //function time baybeeeeeeeee
function scattagories(){
    var isBigLetters = confirm("Include UPPERCASE letters in your password?");
    var isLilLetters = confirm("Include lowercase letters in your password?");
    var isNumbers = confirm("Includes numbers in your passsword?");
    var isSpecial = confirm("Includes special characters in your password?");

    var pwArray =[];

    if (isBigLetters!==true && isLilLetters!==true && isNumbers!==true && isSpecial!==true) {
      alert("You must select at least ONE category to generate a password.");
      scattagories();
      } else

      if (isBigLetters==true) {
      pwArray=pwArray.concat(bigLetters); 
    }

      if (isLilLetters==true) {
      pwArray=pwArray.concat(lilLetters);
    }

      if (isNumbers==true) {
      pwArray=pwArray.concat(numbahs);
    }

      if (isSpecial==true) {
      pwArray=pwArray.concat(specials);
    }
      return pwArray;
   }

    console.log(scattagories());

    var newPass = [];
    length = passwordLength();
    var passArray = [scattagories()];
    var getRandom = passArray[Math.floor((Math.random() * newPass.length))];
    
    for (let i = 0; i < newPass.length; i++) {
      newPass[i]= newPass.push(getRandom);
    }
    console.log(newPass.value);
    return generatePassword();
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