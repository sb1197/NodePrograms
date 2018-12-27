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

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var utility = require('../utility/Utility'); 
    
        rl.question('Please enter number :',(number)=>{
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
        });







		
		
		
	