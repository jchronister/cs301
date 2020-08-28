// Function to Return Common Suffix from Two Strings

'use strict';

function suffix(string1, string2) {
    let com = '';
    let str1Cnt = string1.length-1;
    let str2Cnt = string2.length-1;

    while (str1Cnt >=0 && str2Cnt >=0) {

        if (string1[str1Cnt] === string2[str2Cnt]) {
            com = string1[str1Cnt] + com;
        } else {
            break;
        }

        str1Cnt-=1;
        str2Cnt-=1;

    } 

    return com;
}

let prompt = require('prompt-sync')();

let str1 = prompt("Please Enter First String: ");
let str2 = prompt("Please Enter Second String: ");

console.log(suffix(str1,str2));