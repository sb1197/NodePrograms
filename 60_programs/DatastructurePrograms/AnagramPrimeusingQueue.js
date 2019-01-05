/*/**********************************************************************************
 *  Purpose         : Find Prime that are anagrams using Queue.
 *  @file           : AnagramPrimeusingQueue.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 04-01-2018
 **********************************************************************************/

var Utility = require('../utility/Utility');
var linkedQueue = require('../DatastructurePrograms/Queue');
function printAnaprimes() 
{
    var queueLink = new linkedQueue.Queue;
    // var Utility = require('../utility/utility');
    var show = require('util');
    var anaPrimes = [[]];
    anaPrimes = Utility.findAnaPrime(0, 1000);
    for (let i = 0; i < anaPrimes.length; i++) 
    {
        queueLink.enqueue(anaPrimes[i]);
    }
    console.log();
    console.log();
    console.log("Reversed LinkList->");
    console.log();
    var stringOutput = queueLink.print();
    console.log(stringOutput);
    //queueLink.displayReverse(top);
}
printAnaprimes();