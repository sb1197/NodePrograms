/*/**********************************************************************************
 *  Purpose         : Convert decimal to binary then swap the nibbles of binary number 
 *                    generated to form new decimal number.
 *  @file           : BinaryToDecimal.js
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
rl.question('Enter a number :',(number)=>
{
    if(number > 0)
    {
        utility.binaryToDecimal(number);
        process.exit();
    }
    else
    {
        console.log('Invalid Input..');
        process.exit();
    }
});


