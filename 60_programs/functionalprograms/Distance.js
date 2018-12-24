const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var utility = require('../utility/Utility');
var x1 ,y1;
rl.question('Enter the value of x1 :',(x1)=>
{
    rl.question('Enter the value of y1 :',(y1)=>
    {
        var result = utility.calculateDistance(x1, y1);
        console.log("Distance from given point to origin(0,0) is : "+result); //Display distance
        process.exit();
    });
});
	
		
	