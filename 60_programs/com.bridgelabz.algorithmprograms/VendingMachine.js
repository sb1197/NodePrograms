/*/**********************************************************************************
 *  Purpose         : Vending Machine to count the number of notes into input cash by user.
 *  @file           : VendingMachine.js
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