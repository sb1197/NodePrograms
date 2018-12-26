

// var standard_input = process.stdin,n = standard_input.length;
//      console.log('Please enter your name');

//         standard_input.on('data',function(data)
//         { 
//                 if(n>=3)
//                 {
//                     console.log('Hello '+data+'How are you?');
//                     process.exit();
//                 }
//                 else
//                 {
//                     console.log('Please enter correct name..');
//                     process.exit();
//                 }
            
//         });


//readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var utility = require('../utility/Utility');

    rl.question("Please enter your name:",(name)=>{
        utility.replaceName(name);
    });
