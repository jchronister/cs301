// Function to Switch Upper/Lower Case in String
// "This Is A Test" -> "tHIS iS a tEST"

'use strict';

function switchCase(string) {
    let switched = '', chr;
    for (let i = 0; i < string.length; i+=1) {
        chr = string[i].toLowerCase();
        if (chr === string[i]) {
            switched+=string[i].toUpperCase();
        } else {
            switched+=chr;
        }
    }
    return switched;
}

let prompt = require('prompt-sync')();
let str = prompt("Please Enter String: ")
console.log(switchCase(str));