/*/**********************************************************************************
 *  Purpose         : Sorts the String array using Merge Sort.
 *  @file           : MergeSortString.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 12-09-2018
 **********************************************************************************/

var read = require('readline-sync');
var array = [];
var number = read.question('Enter size of array');
console.log('Size is ',number);
var string = "";
for(let i=0;i<number;i++)
{
    string = read.question('Enter element :');
    array.push(string.toString());
}
console.log('Array is:');
for(let i=0;i<number;i++)
{
   console.log(array[i]);
}
process.exit();