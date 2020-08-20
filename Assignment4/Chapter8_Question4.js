// Sum Odd Numbers Between 1 and User Selected Number

/*
Defining Table
Input                   Processing                  Output
User Enter              Loop to Sum Odd Numbers     Sum of Odd Numbers
Number                  to Number

*/

let prompt = require('prompt-sync')();

let num = parseInt(prompt("Please Enter Number: ")),sum = 0;

for (let i = 1; i <= num; i+=2) {
    sum+=i;
}

console.log(sum);