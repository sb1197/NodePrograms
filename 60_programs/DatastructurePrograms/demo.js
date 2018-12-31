var utility = require('../utility/Utility');
var array = [];
array = utility.readAllFromFile('words.txt');
for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
}
 utility.writeAllToFile(array);