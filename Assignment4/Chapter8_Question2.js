// Print User Entered Text User Selected n Times

/*
Defining Table
Input                   Processing                  Output
User Enter              Loop to Print Text          Text Printed n Times
Text to Print           n Times
n Times to Print        

*/

let prompt = require('prompt-sync')();

let text = prompt("Please Enter Text to Print: ");
let loop = parseInt(prompt("Please Enter Times to Print '" + text + "': "));

for (let i = 0; i < loop; i+=1) {
    console.log(text);
}