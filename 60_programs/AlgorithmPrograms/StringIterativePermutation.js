/*/**********************************************************************************
 *  Purpose         : Print all Permutations of input string using iterative method.
 *  @file           : StringIterativePermutation.js
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
rl.question('Enter a string :',(string)=>
{ 
   var str = string.toString();
   var arr = [];
   for(let i = 0;i<str.length;i++)
   {
       arr.push(str.charAt(i.toString()));
   } 
    utility.strIterativePermutation(arr,0);
    process.exit();
});