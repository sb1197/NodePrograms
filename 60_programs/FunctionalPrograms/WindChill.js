/*/**********************************************************************************
 *  Purpose         : Calculates the windchill using formulae.
 *  @file           : WindChill.js
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
rl.question('Enter temperature :',(temperature)=>
{
    rl.question('Enter windspeed :',(windspeed)=>
    {
        //To calculate the wind chill the formula is not valid if t is larger than 50 
        //or if v is larger than 120 or less than 3 
        if(temperature<50 && windspeed>3 && windspeed<120)	
        {
            var result = utility.calculateWindChill(temperature,windspeed);
            // Print the values of t, v, w
            console.log("Temperature = " , temperature);
            console.log("Wind speed  = " , windspeed);
            console.log("Wind chill  = " , result);
            process.exit();
        }
        else
            console.log("Invalid Input..Try Again..");
            process.exit();
    });
});
		