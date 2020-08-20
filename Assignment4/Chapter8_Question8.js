// Sum Number of Times to Pick Correct Number

/*
Defining Table
Input                   Processing                      Output
User Enter              Check to See User Guess         Count of Guesses
Number                  is Correct
                        Loop Until Correct

*/

let prompt = require('prompt-sync')();

const correctNum = 38;
let guessCnt = 0, num = -1;

while (true) {
    num = parseInt(prompt("Please Enter Integer Between 1 and 100: "));
    guessCnt += 1;
    if (num < correctNum) {
        console.log('Your Guess is Too Low');
    } else if (num > correctNum) {
        console.log('Your Guess is Too High');
    } else {
        console.log(num + ' is Correct in ' +guessCnt + ' Tries');
        break;
    }

} 

