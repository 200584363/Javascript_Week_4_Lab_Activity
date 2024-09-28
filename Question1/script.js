// Code by Utsav Patel
// Q1: Check if a number is a multiple of 5

// Prompt the user to input a number
let userInputValue = prompt("Enter a number to check:");

// Check if the number is divisible by 5 (remainder is 0)
if (userInputValue % 5 === 0) {
    // If true, print that the number is a multiple of 5
    console.log(`${userInputValue} is a multiple of 5.`);
} else {
    // If false, print that the number is not a multiple of 5
    console.log(`${userInputValue} is not a multiple of 5.`);
}
