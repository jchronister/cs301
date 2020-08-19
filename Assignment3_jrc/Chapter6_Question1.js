// Return Absolute Difference Between Numbers

/*
Defining Table
Input                   Processing                  Output
User Enter              Sort Numbers in Order       Absolute Difference to User
Number 1                Calulate Difference
Number 2                Based on Reference to 0
*/

let prompt = require('prompt-sync')();

let num1 = parseFloat(prompt('Please Enter Number 1: '));
let num2 = parseFloat(prompt('Please Enter Number 2: '));
let  = 0;

// Verify Num2 > Num1
if (num2 < num1) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
}

// if (num2 < 0) {
//     // Both < 0
//     //diff = Math.abs(num1 - num2);
//     diff = -num1 + num2 // Same as Line Above
// } else if (num1 > 0) {
//     // Both > 0
//     diff = num2 - num1;
// } else {
//     // Split 0
//     diff = -num1 + num2;
// }
// Which Reduces to ...

if (num1 > 0) {
    // Both > 0
    diff = num2 - num1;
} else {
    diff = -num1 + num2;
}

console.log('The Absolute Difference of ' + num1 + ' and ' + num2 + ' is ' +diff);
