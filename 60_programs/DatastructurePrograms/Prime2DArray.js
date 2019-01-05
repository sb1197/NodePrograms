/*/**********************************************************************************
 *  Purpose         : Print Prime Number in 2d Array.
 *  @file           : Prime2DArray.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 04-01-2019
 **********************************************************************************/

var Utility = require('../utility/Utility');
var show = require('util');
var twoDPrimes = [[], [], [], [], [], [], [], [], [], []];
var initial = 0;
var final = 100;
for (let i = 0; i < 10; i++) 
{
   	twoDPrimes[i] = Utility.findPrime(initial, final);
    initial = initial + 100;
    final = final + 100;
}
var start = 0;
var end = 100;
console.log("---Range of Prime numbers ---");
console.log("");
for (let i = 0; i < 10; i++) 
{
    show.print(twoDPrimes[i]);
    start = start + 100;
    end = end + 100;
    console.log();
}