// Function Counts Even Numbers in Array and Returns Count

'use strict';

function countEvens(list){
    
    let count = 0;

    for (let i = 0; i < list.length; i+=1) {
        if (list[i] % 2 === 0) count+=1;
    }

    return count;
    
}

 let ary = [2,17, 8, 9, 5, 20];
// let ary = [12, 4, 8, 15, 17, 5, 20, 11];

console.log(countEvens(ary));



// Using. reduce Method
function countEven(list){
    return list.reduce(function(p,n){
        if(n%2===0) {
            return p+1;
        } else {
            return p;
        }
    },0);
}

console.log(countEven(ary));