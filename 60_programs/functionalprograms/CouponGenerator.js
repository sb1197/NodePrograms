const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var utility = require('../utility/Utility'); 

var couponNumber = utility.couponGenerator();
console.log('Coupon number generated is :',couponNumber);
process.exit();