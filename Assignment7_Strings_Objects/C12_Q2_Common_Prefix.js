// Function to Return Common Prefix from Two Strings

'use strict';

function prefix(string1, string2) {
    let com = '';
    for(let i = 0; i < string1.length; i+=1) {
        if (string1[i] === string2[i]) {
            com+=string1[i];
        } else {
            break;
        }
    }
    return com;
}

let prompt = require('prompt-sync')();

let str1 = prompt("Please Enter First String: ");
let str2 = prompt("Please Enter Second String: ");

console.log(prefix(str1,str2));