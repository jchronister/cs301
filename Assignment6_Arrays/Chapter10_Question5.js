// Function to Multiply Each Element in Array by a Number

function multiply (list, multiplier) {

    let retrn = [];

    for (let i = 0; i < list.length; i+=1) {
        retrn.push(list[i] * multiplier);
    }

    return retrn;
}

let ary = [17, 8, 9, 5, 20];

console.log(multiply(ary, 3));
