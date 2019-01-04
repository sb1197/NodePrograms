/*/**********************************************************************************
 *  Purpose         : Find Prime that are anagrams using Stack.
 *  @file           : AnagramReverse.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 04-01-2018
 **********************************************************************************/

var Utility = require('../utility/Utility');
var linkedStack = require('../DatastructurePrograms/Stack1');

function printAnaprimes() {
    var stackLink = new linkedStack.Stack1;
   // var stack1 = new linkedStack.Stack1;
    // var Utility = require('../utility/utility');
    var show = require('util');

    var anaPrimes = [[]];
    anaPrimes = Utility.findAnaPrime(0, 1000);

    for (let i = 0; i < anaPrimes.length; i++)
    {
        stackLink.push(anaPrimes[i]);
        // for(let j=0;j<(anaPrimes.length);j++)
        // {

        // }
    }

    console.log();
   // console.log("Initial LinkList->");
    console.log();
    //stackLink.print();

    var top = stackLink.getHead();

    console.log();
    console.log("Reversed LinkList->");
    console.log();
    stackLink.displayReverse(top);
}
printAnaprimes();