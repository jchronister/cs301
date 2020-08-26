// Function to Move Array Values One Spot to Right

function rotateRight (list, multiplier) {

    let last = list[list.length-1];
    retrn = list.slice(0,list.length - 1);
    retrn.unshift(last);
    return retrn;

}

let ary = [17, 8, 9, 5, 20];

console.log(rotateRight(ary));

