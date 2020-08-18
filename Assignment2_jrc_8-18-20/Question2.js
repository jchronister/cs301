/*
Convert Kilometers to Miles

Defining Table
Input                   Processing                      Output
User Enter Kilometers   Convert Kilometer to Mile       Mile to User
                        1 Kilometer = 0.621371 Mile
*/

let prompt = require('prompt-sync')();

let kilometer = parseFloat(prompt('Please Enter Distance in Kilometers'));
console.log(kilometer * 0.621371 + ' Miles')