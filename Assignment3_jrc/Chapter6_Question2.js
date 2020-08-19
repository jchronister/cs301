// Choose Footware for Days Weather

/*
Defining Table
Input                   Processing                  Output
User Enter              Pick Foot Wear Based        Footware to User
Weather                 on Weather

*/

let prompt = require('prompt-sync')();

let weather = prompt('Please Enter Weather: '), shoes = '';

switch (weather) {

case 'hot':
    shoes = 'Sandals';
    break;
case 'rain':
    shoes = 'Galohes';
    break;    
case 'snow':
    shoes = 'boots';
    break;
default:
    shoes = 'shoes';
}

console.log('You Should Wear ' + shoes + ' in the ' + weather + ' Weather');
