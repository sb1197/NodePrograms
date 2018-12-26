const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var utility = require('../utility/Utility');

rl.question('Enter temperature :',(temperature)=>
{
    console.log("1)Celsius to Fahrenheit \n 2)Fahrenheit to Celsius");
    rl.question('Enter your choice :',(choice)=>
    {
        utility.convertTemp(temperature,choice);
        process.exit();
    });
});