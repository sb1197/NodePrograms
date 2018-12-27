/*/**********************************************************************************
 *  Purpose         : Calculates the prime factors of input numbers.
 *  @file           : PrimeFactors.js
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
