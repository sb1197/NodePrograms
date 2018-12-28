/*/**********************************************************************************
 *  Purpose         : Prints the Prime numbers that are Palindrome within given range.
 *  @file           : PrimeAnagramAndPalindrome.js
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
rl.question('Enter a number to print prime numbers :',(range)=>
{
    //To check prime number that are palindrome.
    // utility.primeNumber(range);

    //To check prime number that are anagram.
     utility.primeNumber(range);
    process.exit();
});