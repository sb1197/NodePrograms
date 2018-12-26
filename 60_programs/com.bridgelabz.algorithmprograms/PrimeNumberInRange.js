const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var utility = require('../utility/Utility');

rl.question('Enter a number to print prime numbers :',(range)=>
{
    utility.printPrimeNumberInRange(range);
    process.exit();
});