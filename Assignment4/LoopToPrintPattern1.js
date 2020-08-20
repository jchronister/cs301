// Loops to Printout the Following Pattern

// 1
// 22
// 333
// 4444
// 55555

let row = ''
for (let i = 1; i <= 5; i+=1){
    for (let j = 1; j <= i; j+=1){
        row += i;
    }
    console.log(row);
    row = '';
}
