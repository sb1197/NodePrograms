/*/**********************************************************************************
 *  Purpose         : Check if input year is Leap year or not.
 *  @file           : LeapYear.js
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
rl.question('Enter the year :',(year)=>{
   if(year>0)
   {
      if(utility.checkLeapYear(year)===true) 
      {
         console.log(year,"is a Leap Year.");
      }
      else
      {
         console.log(year,"is not a Leap Year.");
      }
      process.exit();
   }
   else
   {
      console.log('Please Enter positive number..');
      process.exit();
   }
});