const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var utility = require('../utility/Utility');

rl.question('To start the watch press 1:',(x)=>
{
    var start = utility.getTime();
    console.log('Start time :',start);

    rl.question('To stop the watch press 0:',(x)=>
    {
        var end = utility.getTime();
        console.log('Stop time :',end);
        var elapsed = utility.elapsedTime(start,end);
        console.log("Elapsed Time calculated is:",elapsed);
        process.exit();
    });
});

