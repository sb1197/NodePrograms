/*/**********************************************************************************
 *  Purpose         : Guess a number within range using Binary Search.
 *  @file           : GuessANumber.js
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
    var powerValue = Math.pow(2,number);
    console.log('Value Calculated :',powerValue);
    var arr = [powerValue];
		for(let j=0;j<powerValue;j++)
		{
			  arr[j]=j;
    }
    
    utility.yourNumber(arr);
});