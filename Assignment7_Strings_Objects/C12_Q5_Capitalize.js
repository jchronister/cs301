// Function to Capitalizer the First Letter in Each Word of Given String
// this is a test -> This Is A Test

'use strict';

const prompt = require('prompt-sync')();


function titleCase(s) {

    let strArry = str.split(" ");

    let fstrArr = strArry.map(function(n){
        let str = n.trim();
        return n.charAt(0).toUpperCase() + str.substr(1);
    });
    
    let filtArr = fstrArr.filter(n=>n!==""); //Remove Empty Spaces

    return filtArr.join(" ");

}



let str = prompt("Please Enter String: ");

console.log(titleCase(str));