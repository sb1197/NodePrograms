/*/**********************************************************************************
 *  Purpose         : Checks Balanced Parantheses in input expression using Stack.
 *  @file           : BalancedParantheses.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 31-12-2018
 **********************************************************************************/


var utility = require('../utility/Utility');
var read = require('readline-sync');

var expression = read.question('Enter an expression : ');
console.log('Input Expression is : ',expression);
var status = utility.checkBalancedParantheses(expression);
if(status == true)
{
    console.log('Expression is balanced..');
}
else
{
    console.log('Expression is not balanced..');    
}