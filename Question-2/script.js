// Code by Utsav Patel
//Q2: Grade assignment based on scores
// Prompt the user to input their score
let checkScore = prompt("Enter your score to know grade:");

// Check the score range and assign the appropriate grade
if (checkScore >= 80 && checkScore <= 100) {
    // checkScore is between 80 and 100, assign grade A
    console.log("Grade: A");
} else if (checkScore >= 70 && checkScore <= 79) {
    // checkScore is between 70 and 79, assign grade B
    console.log("Grade: B");
} else if (checkScore >= 60 && checkScore <= 69) {
    // checkScore is between 60 and 69, assign grade C
    console.log("Grade: C");
} else if (checkScore >= 50 && checkScore <= 59) {
    // checkScore is between 50 and 59, assign grade D
    console.log("Grade: D");
} else if (checkScore >= 0 && checkScore <= 49) {
    // checkScore is below 50, assign grade F
    console.log("Grade: F");
} else {
    // If checkScore is out of the valid range, display an error message
    console.log("Invalid score.");
}
