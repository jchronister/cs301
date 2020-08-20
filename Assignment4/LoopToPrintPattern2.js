// Loop to Printout the Following Pattern

// 1
// 12
// 123
// 1234
// 12345

let row = ''
for (let i = 1; i <= 5; i+=1){
    for (let j = 1; j <= i; j+=1){
        row += j;
    }
    console.log(row);
    row = '';
}
