// Function to Move Array Values One Spot to Right

'use strict';

function rotateRight (list) {

    let retrn = [list[list.length - 1]];
    for(let i = 0; i < list.length - 1; i+=1) {
        retrn[i+1] = list[i];
    }
    
    return retrn;

}



let ary = [17, 8, 9, 5, 20];

console.log(rotateRight(ary));



// Using Methods
function rotateRight1 (list) {

    let retrn = list.slice(0,list.length - 1);
    retrn.unshift(list[list.length-1]);

    return retrn;

}

console.log(rotateRight1(ary));

