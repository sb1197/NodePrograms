const readline = require('readline');
/*/**********************************************************************************
 *  Purpose         : Search a word input by user from a file using Binary Search.
 *  @file           : SearchWord.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 12-09-2018
 **********************************************************************************/
/*
 *readline module provides an interface for reading data from a Readable stream one line 
*/

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var utility = require('../utility/Utility');
var fileStream = require('fs');
var file = fileStream.readFileSync('words.txt','utf8');
console.log('Reading File :')
console.log(file);
var wordArray = [];
wordArray = file.split(" ",file.length);
console.log('Words from file in array are :')
for(var i = 0; i < wordArray.length;i++)
{
    console.log(wordArray[i]);
}
rl.question('Enter a word to search from list :',(search)=>
{
    var string = search.toString();
    utility.binarySearchStr(wordArray.length,wordArray,string);
    process.exit();
});
