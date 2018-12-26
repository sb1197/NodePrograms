const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var utility = require('../utility/Utility');

rl.question('Enter the amount :',(amount)=>
{
    rl.question('Enter period :',(year)=>
    {
        rl.question('Enter rate of Interest :',(rate)=>
        {
            var monthlyPayment = utility.calculateMonthlyPay(amount, year, rate);
            console.log("Monthly Payment Calculated is :"+monthlyPayment);
            process.exit();
        });
    });
});
