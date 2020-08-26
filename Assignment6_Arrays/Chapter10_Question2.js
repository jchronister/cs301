// Function That Adds 1st and Last Values in Array


function addEnds(list){
    return list[0] + list[list.length - 1];
}


let ary = [17, 8, 9, 5, 20];

console.log(addEnds(ary));