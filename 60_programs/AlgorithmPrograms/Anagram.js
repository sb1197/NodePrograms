/*/**********************************************************************************
 *  Purpose         : Check if two strings are anagram or not. 
 *  @file           : Anagram.js
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


rl.question('Enter first string :',(s1)=>
{
    rl.question('Enter second string :',(s2)=>
    {
       var status = utility.checkAnagram(s1,s2);
       if(status == 1)
				{
					console.log('Input Strings ',s1,' & ',s2,' are Anagram..');
				}
				else
				{
					console.log('Input Strings ',s1,' & ',s2,' are not Anagram..');
				}
        process.exit();
    });
});