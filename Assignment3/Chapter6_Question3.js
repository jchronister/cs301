// Returns Students Year in School Based on Credits

/*
Defining Table
Input                   Processing                  Output
User Enter              Pick School Year Based      Student Name and Year in School
Student Name            on Completed Credits
Completed Credits
*/

let prompt = require('prompt-sync')();

let name = (prompt('Please Enter You Name: '));
let credits = parseInt(prompt('Please Enter Total Number of Completed Credits: '));
let year = '';

if (credits < 30) {
    year = 'Freshman'
} else if (credits < 60) {
    year = 'Sophomore'
} else if (credits < 90) {
    year = 'Junior'
} else {
    year = 'Senior'
}

console.log(name + ' is a ' + year)