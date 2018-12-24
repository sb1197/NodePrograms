const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var utility = require('../utility/Utility'); 

rl.question('Please enter number :',(number)=>{
    if(number>0)
    {
        utility.calculatePrimeFactors(number);
        process.exit();
    }
    else
    {
        console.log('Please enter valid number..');
        process.exit();
    }
});
