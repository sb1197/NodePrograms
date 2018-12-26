const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var utility = require('../utility/Utility');

rl.question('Enter the amount :',(amount)=>
{
    if(amount > 0)
    {
        utility.countCurrency(amount);
       
    }
    else
    {
        console.log('Invalid amount..');
        process.exit();
    }
});