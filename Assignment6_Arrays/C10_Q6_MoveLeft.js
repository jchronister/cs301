// Function to Move Array Values One Spot to Left

'use strict';

function rotateLeft (list) {
    let first = list[0],retrn =[];
    for (let i = 1; i < list.length; i+=1) {
        retrn[i-1] = list[i];
    }
    retrn[list.length-1] = first;

    return retrn;

}

let ary = [17, 8, 9, 5, 20];

console.log(rotateLeft(ary));




// Using Methods
function rotateLeft1 (list) {

    let retrn = list.slice(1);
    retrn.push(list[0]);

    return retrn;

}

console.log(rotateLeft1(ary));

