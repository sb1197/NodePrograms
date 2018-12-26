const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var utility = require('../utility/Utility');
rl.question('Enter a number to print prime numbers :',(range)=>
{
    //To check prime number that are palindrome.
   // utility.primeNumber(range);

    //To check prime number that are anagram.
    utility.checkPrimeAnagram(range)
    process.exit();
});