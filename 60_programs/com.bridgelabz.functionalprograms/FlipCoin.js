const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var utility = require('../utility/Utility');
rl.question('Please enter number of times to flip coin:',(number)=>{
    if(number>0){
        utility.flipCoin(number);
        process.exit();
    }
    else{
        console.log('Please Enter positive number..');
        process.exit();
    }
});