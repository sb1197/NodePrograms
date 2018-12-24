const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var utility = require('../utility/Utility');
rl.question('Please enter number :',(number)=>{
    if(0<=number && number<31){
        utility.powerOf2(number);
        process.exit();
    }
    else{
        console.log('Please Enter valid number..');
        process.exit();
    }
});