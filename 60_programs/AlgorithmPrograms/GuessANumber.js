/*/**********************************************************************************
 *  Purpose         : Guess a number within range using Binary Search.
 *  @file           : GuessANumber.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 28-12-2018
 **********************************************************************************/
/*
 *readline module provides an interface for reading data from a Readable stream one line 
*/
var utility = require('../utility/Utility');
var read = require('readline-sync');
var number = read.question('Enter a number :');
var powerValue = Math.pow(2,number);
var arr = [powerValue];
for(let j=0;j<powerValue;j++)
{
	arr[j]=j;
}   
utility.yourNumber(arr);
