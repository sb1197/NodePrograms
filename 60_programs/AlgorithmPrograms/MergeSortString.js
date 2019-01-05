/*/**********************************************************************************
 *  Purpose         : Sorts the String array using Merge Sort.
 *  @file           : MergeSortString.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 12-09-2018
 **********************************************************************************/
/*
 *readline module provides an interface for reading data from a Readable stream one line 
*/
var utility = require('../utility/Utility');
var read = require('readline-sync');
var array = [];
var number = read.question('Enter size of array');
console.log('Size is ',number);
var string = "";
//string = read.question('Enter array elements :');
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
var result = [];
result = utility.mergeSort(array);
console.log('Sorted Array using MergeSort is :');
for(let i=0;i<result.length;i++)
{
    console.log(result[i]);
}

