/*
Calculate Empoyee After Tax Pay

Defining Table
Input                   Processing                           Output
User Enter              Calculate After Tax Pay              Net Pay to User
Hour Worked             Calc Gross: Hr * Wage
Wage per Hour           Calc Tax: Gross * 15%
                        Calc Net: Gross - Tax                            

*/

let prompt = require('prompt-sync')();

let hours = parseFloat(prompt('Please Enter Hours Worked'));
let wage = parseFloat(prompt('Please Enter Wage in $ per Hour'));
let gross = hours * wage
let tax = gross * 0.15

console.log('After Tax Pay is $' +  (gross - tax))