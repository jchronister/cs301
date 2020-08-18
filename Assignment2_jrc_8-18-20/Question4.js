/*
Calculate Teams

Defining Table
Input                       Processing                      Output
User Enter # Students       Calculate Number of             Students per Team to User
and # Students              Students per Team
                            # Students / Teams
                            Split Remainder Among Teams
*/

let prompt = require('prompt-sync')();

let students = parseInt(prompt('Please Enter Number of Students'));
let teams = parseInt(prompt('Please Enter Number of Teams'));

let teamCnt = Math.ceil(students / teams)
let remainder = students % teams

if(remainder ===0 ) {
    console.log(teams + ' Teams with ' + teamCnt + ' Members')
} else {
    console.log(remainder + ' Teams with ' + teamCnt + ' Members and ' + (teams - remainder) + ' Teams with ' + (teamCnt - 1) + ' Members')
}



