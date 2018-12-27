/*/**********************************************************************************
 *  Purpose         : Calculates the square root of input number using Newton's square root method.
 *  @file           : NewtonSqrt.js
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

rl.question('Enter a number to find square root of :',(number)=>
{
    if(number<0)
    {
        console.log('Invalid Input.. Try Again.');
    }
    else
    {
        // print out the square root of c	       
        var result = utility.calculateSquareRoot(number);
        console.log('Square root of given number '+number+' is : '+result);
        process.exit();
    }
});
		 
