/*/**********************************************************************************
 *  Purpose         : Calculates the monthly payment.
 *  @file           : MonthlyPayment.js
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
