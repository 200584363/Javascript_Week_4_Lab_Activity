// Code by Utsav Patel
// FizzBuzz Challenge
for (let i = 1; i <= 100; i++) {
    // Check if the number is divisible by both 3 and 5 (multiple of 3 and 5)
    if (i % 3 === 0 && i % 5 === 0) {
        // If true, print "FizzBuzz"
        console.log("FizzBuzz");
    }
    // Check if the number is divisible by 3 (multiple of 3)
    else if (i % 3 === 0) {
        // If true, print "Fizz"
        console.log("Fizz");
    }
    // Check if the number is divisible by 5 (multiple of 5)
    else if (i % 5 === 0) {
        // If true, print "Buzz"
        console.log("Buzz");
    }
    // If none of the above, just print the number
    else {
        console.log(i);
    }
}
