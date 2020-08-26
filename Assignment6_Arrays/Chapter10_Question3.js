// Function That Returns the Array Middle Element
// Returns Averge of Middle Elements if Even Array


function getMiddle(list){
    let mid = (list.length - 1) / 2;
    return (list[Math.floor(mid)] + list[Math.ceil(mid)]) / 2 ;
}

//let ary = [17, 8, 9, 5, 20];
let ary = [12, 4, 8, 15, 17, 5, 20, 11];

console.log(getMiddle(ary));