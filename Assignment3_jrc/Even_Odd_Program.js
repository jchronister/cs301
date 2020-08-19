// Return Odd/Even Based on User Number Input

let prompt = require('prompt-sync')();

let num = parseInt(prompt('Please Enter Integer: '));
if (num % 2 === 0) {
    console.log(num + ' is an Even Number');
} else {
    console.log(num + ' is an Odd Number');
}
