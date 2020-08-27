// Function to Check if Number is Prime. Returns true/false.

'use strict';

function checkPrime (number) {
    let end = Math.sqrt(number), prime = false;

    if (number === NaN) return false;
    if (number > 1) prime = true;

    for(let i = 2; i <= end; i+=1){
        if (number % i === 0) {
            prime = false;
            break;
        }
    }
    
    return prime;

}


let prompt = require('prompt-sync')();

let number = parseInt(prompt('Please Enter Integer to Check for Prime: '));

console.log(checkPrime(number));


