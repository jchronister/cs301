
function msgName (name){
    alert(name);
}

function sumMe (number){
    var total=0, numberInt = parseInt(number,10);
    for(var i = 1;i <= numberInt;i+=1){
      total += i;
    } 
    return total;
}

console.log(sumMe(10));
