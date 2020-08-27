// Function to Convert Temperature ºF to Temperature ºC

'use strict';

function farhToCels (tempF) {
    return 5/9*(tempF - 32);
}

let prompt = require('prompt-sync')();
let temp = parseFloat(prompt('Enter Temperature ºF to Convert to ºC: '));

console.log(farhToCels (temp)+'ºC');

