/*
Calculate Vehicle mpg

Defining Table
Input                   Processing                                  Output
User Enter              Calculate mpg                               mpg to User
Starting Odometer       Calc Milage: End Meter - Start Meter
Ending Odometer         Calc mpg: Milage / Gas gal
Gallons of Gas Used      

*/

let prompt = require('prompt-sync')();

let startMeter = parseFloat(prompt('Please Enter Starting Odometer'));
let endMeter = parseFloat(prompt('Please Enter Ending Odometer'));
let gas = parseFloat(prompt('Please Enter Gallons of Gas Used'));
console.log((endMeter - startMeter)/gas + ' mpg')