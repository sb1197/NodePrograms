const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var utility = require('../utility/Utility'); 

var stake, goal, trials;		
// Take input money to invest in game, goal and number of times to play.
rl.question("Enter the money :",(stake)=>

rl.question("Enter the goal to set :",(goal)=>

rl.question("Enter number of times to play  :",(trials)=>
{
    utility.gamblerSimulator(stake,goal,trials);
    process.exit();
}
)));





