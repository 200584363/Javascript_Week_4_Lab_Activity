// Code by Utsav Patel
// Calculator Challenge
function myCalculator(num1, num2, operator) {
    // Use a switch statement to handle different operations
    switch (operator) {
        case '+':
            // If the operator is '+', return the sum of num1 and num2
            return num1 + num2;
        case '-':
            // If the operator is '-', return the difference between num1 and num2
            return num1 - num2;
        case '*':
            // If the operator is '*', return the product of num1 and num2
            return num1 * num2;
        case '/':
            // If the operator is '/', check if num2 is not 0 to avoid division by zero
            return num2 !== 0 ? num1 / num2 : "Error: Division by zero.";
        default:
            // If an invalid operator is passed, return an error message
            return "Error: Invalid operator.";
    }
}

// Test the calculator function with different operations
console.log(myCalculator(4, 3, '+'));  
console.log(myCalculator(4, 3, '-'));  
console.log(myCalculator(4, 3, '*'));  
console.log(myCalculator(4, 3, '/'));  
console.log(myCalculator(4, 1, '&'));  