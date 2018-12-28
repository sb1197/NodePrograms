/*/**********************************************************************************
 *  Purpose         : Calculates the power of 2 of input number.
 *  @file           : PowerOf2.js
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
    if(0<=number && number<31){
        utility.powerOf2(number);
        process.exit();
    }
    else{
        console.log('Please Enter valid number..');
        process.exit();
    }
});