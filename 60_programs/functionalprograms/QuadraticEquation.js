const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var utility = require('../utility/Utility'); 

rl.question('Enter the value of a:',(a)=>
{
    rl.question('Enter the value of b:',(b)=>
    {
        rl.question('Enter the value of c:',(c)=>
        {
            utility.qudraticEquation(a,b,c);
            process.exit();
        });
    });
});
