// Calculate Down Payment

/*
Defining Table
Input                   Processing                  Output
User Enter              Calculate Down Payment      Down Payment
House Cost              Based on Price of House

*/

let prompt = require('prompt-sync')();

let cost = parseFloat(prompt('Please Enter Cost of House: ')), downpayment = 0;

if (cost < 50000) {
    downpayment = cost * 0.05;
} else if (cost < 100000) {
    downpayment = 2000 + (0.1 * (cost - 50000));
} else if (cost < 200000) {
    downpayment = 7500 + (0.2 * (cost - 100000));
} else {
    downpayment = 27500 + (0.25 * (cost - 200000));
}

console.log('Down Payment is $' + downpayment + ' for House Costing $' + cost)