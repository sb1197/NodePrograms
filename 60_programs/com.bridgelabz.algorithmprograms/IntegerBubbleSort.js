/*/**********************************************************************************
 *  Purpose         : Sorts the Integer array using Bubble Sort.
 *  @file           : IntegerBubbleSort.js
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
    var arr=[], result = [];
    var len=parseInt(size);
    console.log("Enter array elements:");//taking array elements from user
    recurrsion(len);
    
    function recurrsion(len)
    {
        if(len>0)
        {   
            rl.question('',function(i)
            {      
                arr.push(parseInt(i));
                len--;
                recurrsion(len);      
            });
        }
        else
        {           
           result = utility.bubbleIntSort(arr,size);
           console.log("Sorted Elements of array are :");
            for(let i=0;i<size;i++)
            {
                console.log(result[i]);
            }
            process.exit();
 
        }
    }
}

