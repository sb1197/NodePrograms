/*/**********************************************************************************
 *  Purpose         : Calculate Day of Week the Input Date falls on.
 *  @file           : DayOfWeek.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 12-09-2018
 **********************************************************************************/
/*
 *readline module provides an interface for reading data from a Readable stream one line 
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var utility = require('../utility/Utility');
rl.question('Enter day :',(day)=>
{
    rl.question('Enter month :',(month)=>
    {
        rl.question('Enter year :',(year)=>
        {
            if(day>0 && month>0 && year>0)
            {
                var result = utility.dayOfWeek(day, month, year);
			    var week= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                console.log("Day of week is :"+week[result]);
                process.exit();
            }
            else
            {
                console.log('Invalid Date...');
                process.exit();
            }
        });
    });
});