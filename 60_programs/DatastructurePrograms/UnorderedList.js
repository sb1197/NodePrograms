const linked = require('../DatastructurePrograms/LinkedList');
var list = new linked.LinkedList;
var utility = require('../utility/Utility');
var read = require('readline-sync');

var wordsArray = [];
wordsArray = utility.readAllFromFile('words.txt');
for(let i=0;i<wordsArray.length;i++)
{
    list.add(wordsArray[i.toString()]);
}
// list.add(43);
// list.add(52);
// list.add(89);
// list.add(66);
console.log('Linked List elements are :');
 list.printList();


 var searchString = read.question('Enter a string to search in list :');
 if(list.search(searchString))
 {
    var indexOfSearch = list.indexOf(searchString);
    list.removeFrom(indexOfSearch);
    list.printList();
 }
 else
 {
    list.add(searchString);
    console.log('Updated Linked List is:');
    var outputArray = [];
   // list.printList();
    var str = "";
    for(let index=0;index<list.listSize();index++)
    {
        str = list.get(index);
        outputArray.push(str);
    }
    console.log('OutputArray is:');
    for(let index=0;index<outputArray.length;index++)
    {
        console.log(outputArray[index]);
    }
    utility.writeAllToFile(outputArray);
 }