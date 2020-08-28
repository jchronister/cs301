// Function to Get Given Name from String 'Family Name, Given Name'
// Return "Ronald" from "Reagan, Ronald"

'use strict';

function extractGivenName(fullName) {
    let splitName = fullName.split(", ");
    return splitName[1];
}


let prompt = require('prompt-sync')();

let str1 = prompt("Please Enter First String: ");

console.log(extractGivenName(str1));

