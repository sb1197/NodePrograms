const readline = require('readline');
const utility=require('../utility/Utility')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var a=10;
var b=20;
console.log("addition");



function add(){
    rl.question('Enter your name:',(name)=>{ //asking for user input
        console.log("name:",name);//printing output in console
        
    })
}

add();