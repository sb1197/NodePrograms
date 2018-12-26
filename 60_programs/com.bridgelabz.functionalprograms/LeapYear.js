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