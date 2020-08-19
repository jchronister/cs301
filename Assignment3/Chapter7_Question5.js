// Calculate Childs Bedtime

/*
Defining Table
Input                   Processing                  Output
User Enter              Calculate Bed Time          Bed Time
Child Age               Based on Age and
Season                  Season

*/

let prompt = require('prompt-sync')();

let age = parseInt(prompt('Please Childs Age: '));
let season = prompt('Please Enter Season: ');
let bedTime = '';

if (age && (season === 'summer' || season === 'fall' || season === 'winter' || season === 'spring')) {

    if (age < 6) {
        if (season === 'summer' || season === 'fall') {
            bedTime = '8:30 PM'
        } else {
            bedTime = '8:00 PM'
        }
    } else if (age < 13) {
        if (season === 'summer') {
            bedTime = '9:30 PM'
        } else {
            bedTime = '8:30 PM'
        }
    } else {
        if (season === 'summer') {
            bedTime = '10:30 PM'
        } else {
            bedTime = '9:30 PM'
        }
    }
}

if(!bedTime) bedTime = 'Unknown'

console.log ('Child of ' + age + ' Years Old Bed Time is ' + bedTime + ' in the ' + season)
