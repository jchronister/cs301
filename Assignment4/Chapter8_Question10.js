// Output a 12 x 12 Multiplication Table

/*
Defining Table
Input                   Processing                      Output
12 x 12                 Loop to Calculate Numbers       Calculations
Multiplication Table                  

*/

for (let i = 1, row = ''; i <= 12; i+=1) {
    
    for (let j = 1; j <= 12; j+=1) {
        row += i*j + '\t';
    }
    console.log(row);
    row = '';

}