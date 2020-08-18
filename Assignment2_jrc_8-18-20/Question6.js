/*
Calculate Heart Rate Range

Defining Table
Input                   Processing                                  Output
User Enter              Calculate Heart Rate Range                  Min & Max Range to User
Age                     Calc Max: 220 - Age
                        Calc Bottom Range: Max * .65
                        Calc Top Range: Max * .85                            

*/

let prompt = require('prompt-sync')();

let age = parseFloat(prompt('Please Enter Your Age'));
let max = 220 - age;

console.log('To Strengthen Heart Keep between ' +  Math.ceil(max * 0.65) + ' and ' + Math.ceil(max * .85) + ' bpm')