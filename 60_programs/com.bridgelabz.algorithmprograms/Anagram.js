const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var utility = require('../utility/Utility');


rl.question('Enter first string :',(s1)=>
{
    rl.question('Enter second string :',(s2)=>
    {
        utility.checkAnagram(s1,s2);
        process.exit();
    });
});