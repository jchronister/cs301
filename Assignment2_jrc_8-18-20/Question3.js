/*
Calculate Box Stacks

Defining Table
Input                   Processing                      Output
User Enter Boxes        Calculate Number of             Stacks to User
and Boxes per Stack     Stacks: Boxes / Box per Stack
*/

let prompt = require('prompt-sync')();

let boxes = parseInt(prompt('Please Enter Total Number of Boxes'));
let boxPerStack = parseInt(prompt('Please Enter Boxes per Stack'));
console.log(Math.ceil(boxes / boxPerStack) + ' Stacks')