const linked = require('../DatastructurePrograms/LinkedList');
var list = new linked.LinkedList;
var remainderList = new linked.LinkedList;
var read = require('readline-sync');
var utility = require('../utility/Utility');

var numberArray = [];
numberArray = utility.readAllFromFile('numbers.txt');
for(let i=0;i<numberArray.length;i++)
{
    list.add(numberArray[parseInt(i)]);
}
console.log('Linked List elements are :');
list.printList();
for(let i=0;i<11;i++)
{
    remainderList.add(i);
}
console.log('Remainder Linked List elements are :');
remainderList.printList();
var remainderValue;
console.log('Remainder Linked List elements with file elements are :');
for(let remain=0;remain<list.listSize();remain++)
{
    var temp = list.get(remain);
    remainderValue = temp % 11;
    var check;
    for(let r=0;r<22;r++)
    {
        check = remainderList.get(r);
        if(remainderValue == check)
        {         
            console.log("Slot "+remainderValue +"--->"+temp);
        }   
    }
}
// var searchNumber = read.question("Enter a number to search :");
// if(list.search(searchNumber))
// {
//     var indexOfSearch = list.indexOf(searchNumber);
//     list.removeFrom(indexOfSearch);
//     list.printList();
// }
// else
// {
//     list.add(searchNumber);
//    // list.printList();
//     console.log('Remainder Linked List elements with file elements are :');
//     for(let remain=0;remain<list.listSize();remain++)
//     {
//         var temp = list.get(remain);
//         //console.log("temp value :",temp);
//         remainderValue = temp % 11;
//        // console.log("remainderValue value :",remainderValue);
//         var check;
//         for(let r=0;r<22;r++)
//         {
//             check = remainderList.get(r);
//            // console.log("check value :",check);
//             if(remainderValue == check)
//             {
//                 //outputArray[index++] = temp;           
//                 console.log("Slot "+remainderValue +"--->"+temp);
//             }
           
//         }
    
//     }
// }