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







		
		
		
	