const linked = require('../DatastructurePrograms/LinkedList');
var list = new linked.LinkedList;
var utility = require('../utility/Utility');
var read = require('readline-sync');

var numberArray = [];
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
    console.log('Updated Linked List is:');
    list.printList();
 }