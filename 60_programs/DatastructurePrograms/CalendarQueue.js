const queueUsingLinked = require('../DatastructurePrograms/Queue');
var queue = new queueUsingLinked.Queue;
var util = require('util');

var weekArray = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
for(let i=0;i<weekArray.length;i++)
{
    queue.enqueue(weekArray[i]);
}
console.log("Week Array :");
var str = [];

 str.push(queue.print());
 for(let z=0;z<weekArray.length;z++)
{
    util.print(str+" ");
}
