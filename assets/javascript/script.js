//defining the arrays for uppercase, lowercase, numbers, and special characters for the password to be generated from
var bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lilLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbahs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specials = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var wutDo= alert("Press the Generate Password button to start.");

//defined vars inside generatePassword function to call other functions and store the result
function generatePassword(){
  var pLength = passwordLength();
  //if user hits cancel on first prompt, this terminates function and enters a message in the generate password box
    if (pLength==null||pLength==undefined) {
      return "thanks for playing :)";
    }
  var passArray = scattagories();
  
  //declared newPw var as a string so that it prints each character consecutively rather than as individual items in an array; to get rid of password being generated with commas in it
  var newPw = "";
  for (var i = 0; i < pLength; i++) {
  var getRandom = Math.floor(Math.random() * passArray.length);
   newPw += passArray[getRandom];
     
  }
  
  return newPw;
}

//broke generating password into steps organized by prompts taken from the user; done to organize self with testing/debugging code and create better loops back to relevant prompt rather than the start
function passwordLength(){
    var pwlength = Number(prompt("Enter the desired length of your password (8-128 characters)"));

    if (pwlength>=8 && pwlength<=128) { 

      return pwlength;
    } else
    {  
      alert("You've entered an invalid input. Please enter a number between 8-128.");
       if (pwlength==0){
         return;
       } 
       return passwordLength();
    }
}

//combines category arrays into an array of characters to choose from based on choices from user 
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