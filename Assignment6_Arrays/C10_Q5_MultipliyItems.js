// Functions to Multiply Each Element in Array by a Number

'use strict';

function multiply (list, multiplier) {

    let retrn = [];

    for (let i = 0; i < list.length; i+=1) {
        retrn[i] = (list[i] * multiplier);
    }

    return retrn;
}

let ary = [17, 8, 9, 5, 20];

console.log(multiply(ary, 3));



// Using .map Method
function multMap (list,multiplier) {
    return list.map(n=>n*multiplier);
}
console.log(multMap(ary, 3));