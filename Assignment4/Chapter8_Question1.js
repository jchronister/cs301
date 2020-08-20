// Print 'sunshine' User Selected n Times

/*
Defining Table
Input                   Processing                  Output
User Enter              Loop to Print sunshine      sunshine Printed n Times
n Times to Print        n Times

*/

let prompt = require('prompt-sync')();

let loop = parseInt(prompt("Please Enter Times to Print 'sunshine': "));

for (let i = 0; i < loop; i+=1) {
    console.log('sunshine');
}