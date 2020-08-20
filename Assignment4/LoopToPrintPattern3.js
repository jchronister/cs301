// Loops to Printout the Following Pattern

// 55555
// 4444
// 333
// 22
// 1

let row = ''
for (let i = 5; i >= 1; i-=1){
    for (let j = 1; j <= i; j+=1){
        row += i;
    }
    console.log(row);
    row = '';
}