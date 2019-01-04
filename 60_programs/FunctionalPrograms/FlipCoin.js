/*/**********************************************************************************
 *  Purpose         : Flip coin to calculate the percentage of heads and tails.
 *  @file           : FlipCoin.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 12-09-2018
 **********************************************************************************/
/*
 *readline module provides an interface for reading data from a Readable stream one line 
*/

var rl = require('readline-sync');
var utility = require('../utility/Utility');
var number = rl.question('Please enter number of times to flip coin:');
    if(number>0)
    {
        utility.flipCoin(number);
        process.exit();
    }
    else
    {
        console.log('Please Enter positive number..');
        process.exit();
    }


