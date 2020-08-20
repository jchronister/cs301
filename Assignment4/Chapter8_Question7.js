// Prints 1st 25 Numbers of Fibonacci Series Starting at 0

/*
Defining Table
Input                   Processing                  Output
Calculate 25 Times      Loop to Calculate           Fibonacci Series Printout
                        Fibonacci Series

*/

let preceed1 = 0, preceed2 = 1, cur = 0;

console.log(preceed1)
console.log(preceed2)

for (let i = 1; i <= 23; i+=1) {
    cur = preceed1 + preceed2;
    console.log(cur);
    preceed1 = preceed2
    preceed2 = cur
}
