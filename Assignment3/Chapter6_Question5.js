// Calculate Library Book Borrow Time

/*
Defining Table
Input                   Processing                  Output
User Enter              Calculate Borrow Time       Borrow Time
Person Status           Based on Status and
Number of Past          Past Overdue Books
Overdue Books              

*/

let prompt = require('prompt-sync')();

let status = prompt('Please Enter Patron Status: ');
let overdueBooks = parseInt(prompt('Please Enter Number of Overdue Books Last Year: '));
let borrowTime;

if (status === 'student') {
    if (overdueBooks === 0 ) {
        borrowTime = 6;
    } else if (overdueBooks < 3) {
        borrowTime = 4;
    } else {
        borrowTime = 2;
    }
} else if (status === 'faculty') {
    if (overdueBooks === 0 ) {
        borrowTime = 16;
    } else if (overdueBooks < 3) {
        borrowTime = 12;
    } else {
        borrowTime = 8;
    }
} else {
    if (overdueBooks === 0 ) {
        borrowTime = 4;
    } else if (overdueBooks < 3) {
        borrowTime = 3;
    } else {
        borrowTime = 2;
    }
}    

console.log('The ' + status + ' May Borrow the Book for ' + borrowTime + ' weeks');