/*/**********************************************************************************
 *  Purpose         : Banking Cash Counter to deposit and withdraw money using Queue.
 *  @file           : BankingCashCounter.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 31-12-2018
 **********************************************************************************/

var utility = require('../utility/Utility');
var read = require('readline-sync');
var numberOfPerson = read.question('How many persons are in queue ? ');
utility.bankingCounter(parseInt(numberOfPerson));