// Function to Move Array Values One Spot to Left

function rotateLeft (list, multiplier) {

    let retrn = list.slice(); //Copy Array
    let first = retrn[0];
    retrn.shift();
    retrn.push(first);

    return retrn;

}

let ary = [17, 8, 9, 5, 20];

console.log(rotateLeft(ary));