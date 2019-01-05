/*/**********************************************************************************
 *  Purpose         : Find the Triplets that sum's to zero from array input by user.
 *  @file           : Triplets.js
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
var util = require('util');

rl.question('Enter the size of array :', (size) => {
    addNumber(size);

});
function addNumber(size)
{
    var array = [];
    var len = parseInt(size);
    sum(len);
    function sum(len) 
    {
        if (len > 0) 
        {
            rl.question('Enter element :', (value) => 
            {
                array.push(parseInt(value));
                len--;
                sum(len);
            });
        }
        else 
        {
            utility.calculateTriplet(size, array);
            process.exit();
        }
    }
}







