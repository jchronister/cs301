// Return Absolute Difference Between Numbers

/*
Defining Table
Input                   Processing                  Output
User Enter              Sort Numbers in Order       Absolute Difference to User
Number 1                Subtract Largest from
Number 2                Smallest

*/

let prompt = require('prompt-sync')();

let num1 = parseFloat(prompt('Please Enter Number 1: '));
let num2 = parseFloat(prompt('Please Enter Number 2: '));

// Verify Num2 > Num1
if (num2 < num1) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
}

diff = num2 - num1

console.log('The Absolute Difference of ' + num1 + ' and ' + num2 + ' is ' +diff);




