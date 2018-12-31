/*/**********************************************************************************
 *  Purpose         : Ordered list of numbers read from a file to search a number 
 *                      using Linked List.
 *  @file           : OrderedList.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 30-12-2018
 **********************************************************************************/

const linked = require('../DatastructurePrograms/LinkedList');
var list = new linked.LinkedList;
var utility = require('../utility/Utility');
var read = require('readline-sync');

var numberArray = [];
var outputArray = [];
numberArray = utility.readAllFromFile('numbers.txt');
numberArray.sort();
for(let i=0;i<numberArray.length;i++)
{
    list.add(numberArray[parseInt(i)]);
}
console.log('Linked List elements are :');
 list.printList();

 var searchNumber = read.question("Enter a number to search :");
 if(list.search(searchNumber))
 {
    var indexOfSearch = list.indexOf(searchNumber);
    list.removeFrom(indexOfSearch);
    list.printList();
 }
 else
 {
    list.add(searchNumber);
    for(let i=0;i<list.listSize();i++)
    {
       outputArray.push(list.get(i));
    }
    outputArray.sort();
   //  console.log('Array elements :');
   //  for(let i=0;i<list.listSize();i++)
   //  {
   //     console.log(outputArray[i]);
   //  }
    list.deleteList();
   // console.log('After delete size of list : ',list.listSize());
   for(let i=0;i<outputArray.length;i++)
   {
      list.add(outputArray[parseInt(i)]);
   }
    console.log('Updated Linked List is:');
    list.printList();
    utility.writeAllToFile('../DatastructurePrograms/OrderedOutput.txt',outputArray);
 }