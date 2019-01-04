/*/**********************************************************************************
 *  Purpose         : Prints the Harmonic value calculated of given number.
 *  @file           : HarmonicNumber.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 12-09-2018
 **********************************************************************************/
/*
 *readline module provides an interface for reading data from a Readable stream one line 
*/
var rl = require('readline-sync');
var utility = require('../utility/Utility'); 
    
var number = rl.question('Please enter number :');
            if(number>0)
            {
                var harmonicNum = utility.calculateHarmonicNumber(number);
                console.log("Harmonic value of input number is: "+harmonicNum);		//Print the harmonic value
                process.exit();
            }
            else
            {
                console.log('Please Enter valid number..');
                process.exit();
            }
        







		
		
		
	