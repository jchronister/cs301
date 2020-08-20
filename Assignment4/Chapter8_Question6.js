// Prints Powers of 2 from 0 to 31

/*
Defining Table
Input                   Processing                  Output
Power of 2 from         Loop to Calculate           Powers Table Printout
0 to 31                 Powers

*/

let times = 2;

for (let i = 0; i <= 31; i+=1) {
    console.log(times + '^' + i + ' = ' + Math.pow(times , i));
}
