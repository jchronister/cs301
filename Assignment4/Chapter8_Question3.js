// Print All Integers between 1 and User Selected Number

/*
Defining Table
Input                   Processing                  Output
User Enter              Loop to Print Integers      List of Integers to Number
Number                  to Number

*/

let prompt = require('prompt-sync')();

let num = parseInt(prompt("Please Enter Number: "));

for (let i = 1; i <= num; i+=1) {
    console.log(i);
}