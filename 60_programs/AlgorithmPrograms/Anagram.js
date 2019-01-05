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
var rl = require('readline-sync');
var utility = require('../utility/Utility');
var s1 = rl.question('Enter first string :');
var s2 = rl.question('Enter second string :');
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
