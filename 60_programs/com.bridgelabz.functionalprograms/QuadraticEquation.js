/*/**********************************************************************************
 *  Purpose         : Find the roots of Quadratic Equation .
 *  @file           : QuadraticEquation.js
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

rl.question('Enter the value of a:',(a)=>
{
    rl.question('Enter the value of b:',(b)=>
    {
        rl.question('Enter the value of c:',(c)=>
        {
            utility.qudraticEquation(a,b,c);
            process.exit();
        });
    });
});
