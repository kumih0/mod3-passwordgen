# mod3-passwordgen
Module 3 Challenge - Password Generator

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
## Random Password Generator

```
    #Pseudo-code
    1) add click event to generate button
     -Add alert to instruct user to click button to begin
    2) ask user to input the length for their new password
     -Add alert if user enters an invalid input (not a number, or a value either less than 8 or greater than 128)
      -After alert, ask user again to input length
     -terminate function if user chooses "cancel" instead of entering a valid input
     -save the user's input for length
     3) ask user if they want to include uppercase letters, lowercase letters, numbers, and/or special characters in their new password
      -save their selections
      -Add alert if user doesn't select any category to include that they must choose at least one
       -After alert, ask user again if they want to include uppercase letters, lowercase letters, numbers, and/or special characters
      4) combine categories of characters to choose from based on user selection
      5) select characters randomly from the selected categories and as many characters as defined by user's input for length
      6) print the resulting randomly generated password as a string for user to see

```
# Screenshot of Website
![03-javascript-homework-demo](https://github.com/kumih0/mod3-passwordgen/assets/132851569/1b60586d-2104-42a7-bbf6-ddabe9dfdd2e)

# Deployed Link
https://kumih0.github.io/mod3-passwordgen/
