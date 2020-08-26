// The 12 Days of Christmas Song. User Inputs Start Day

let prompt = require('prompt-sync')();
let print = console.log, lineEnd = '', lineStart = '';

let day = parseInt(prompt('Please Enter Integer from 1 to 12: ')) - 1;

let days = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eigth', 'Ninth','Tenth','Eleventh','Twelth']

let gifts = ['a partridge in a pear tree'];
gifts[1] ='two turtle doves';
gifts[2] ='three French hens';
gifts[3] ='four calling birds';
gifts[4] ='five golden rings';
gifts[5] ='six geese a laying';
gifts[6] ='seven swans a swimming';
gifts[7] ='eight maids a milking';
gifts[8] ='nine ladies dancing';
gifts[9] ='ten lords a leaping';
gifts[10] ='eleven pipers piping';
gifts[11] ='twelve drummers drumming';

print( 'On the ' + days[day] + ' day of Christmas, my true love gave to me:');

for (let i = day; i >= 0; i-=1) {

    if (i > 0) lineEnd = ',';
    if (i === 0 && day > 0) lineStart = 'and ';
    print(lineStart + gifts[i] + lineEnd);

}