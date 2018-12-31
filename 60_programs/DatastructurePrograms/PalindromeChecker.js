/*/**********************************************************************************
 *  Purpose         : Checks Balanced Parantheses in input expression using Queue.
 *  @file           : PalidromeChecker.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 31-12-2018
 **********************************************************************************/

const dequeUsingLinked = require('../DatastructurePrograms/Deque');
var deque = new dequeUsingLinked.Deque;
        
var utility = require('../utility/Utility');
var read = require('readline-sync');
var enqueCount = 0, dequeCount = 0;
var inputStr = read.question('Enter a string : ');
console.log('Input String is : ',inputStr);
var array = [];
array.push(inputStr.split(""));

 for(let r=0;r<array.length;r++)
 {
     deque.enqueue(array[r.toString()]);
     enqueCount++;
 } 
 console.log('Array in Dequeue is :');
 deque.print();
 var output = ""
  output += deque.removeFirstNode();
  console.log("Output :",output);
 var outputString = output.split(",");
 console.log("Output String :",outputString);

 

 process.exit();
 