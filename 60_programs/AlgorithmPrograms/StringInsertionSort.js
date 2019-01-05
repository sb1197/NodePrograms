/*/**********************************************************************************
 *  Purpose         : Sort an string array using Insertion Sort.
 *  @file           : StringInsertionSort.js
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
rl.question('Enter the size of your array: ',(size)=>
{
    arrayelements(size);
});

function arrayelements(size)
{
    var array=[], result = [];
    var len=parseInt(size);
    console.log("Enter array elements:");//taking array elements from user
    recurrsion(len);
    function recurrsion(len)
    {
        if(len>0)
        {   
            rl.question('',function(i)
            {      
                array.push(i.toString());
                len--;
                recurrsion(len);      
            });
        }
        else
        {           
            utility.insertionSortString(array,size);
            process.exit();
 
        }
    }
}

