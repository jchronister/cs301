/*
Convert Quarts to Liters

Defining Table
Input                   Processing                  Output
User Enter Quarts       Convert Quart to Liter      Liter to User
                        1 Qt = 0.946353 Liter
*/

let prompt = require('prompt-sync')();

let quart = parseFloat(prompt('Please Enter Volume in Quarts'));
console.log(quart * 0.946353 + ' Liters')
