// Output a Type of Multiplication Table

/*
Defining Table
Input                   Processing                      Output
User Enter              Loop to Calculate Numbers       Calculations
Number                  

*/

let prompt = require('prompt-sync')();

let num = parseInt(prompt("Please Enter Integer: ")), row = '';

for (let i = 1; i <= num; i+=1) {
    if (i === 1) console.log('n\t2*n\t3*n\tn*n\tn*n*n');
    row = i + '\t' + 2*i + '\t' + 3*i + '\t' + i*i + '\t' + i*i*i;
    console.log(row);
    row = '';
}

