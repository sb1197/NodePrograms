/*/**********************************************************************************
 *  Purpose         : Calculates distance between input point value by user and origin.
 *  @file           : Distance.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 12-09-2018
 **********************************************************************************/
/*
 *readline module provides an interface for reading data from a Readable stream one line 
*/
var utility = require('../utility/Utility');
var x1 ,y1;
var read = require('readline-sync');
x1 = read.question('Enter the value of x1 :');
y1 = read.question('Enter the value of y1 :'); 
var result = utility.calculateDistance(x1, y1);
console.log("Distance from given point to origin(0,0) is : "+result); //Display distance
process.exit();
    

	
		
	