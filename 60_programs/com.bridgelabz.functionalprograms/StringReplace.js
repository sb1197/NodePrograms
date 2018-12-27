/*/**********************************************************************************
 *  Purpose         : Replace String with correct string input by user.
 *  @file           : StringReplace.js
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

    rl.question("Please enter your name:",(name)=>{
        utility.replaceName(name);
    });
