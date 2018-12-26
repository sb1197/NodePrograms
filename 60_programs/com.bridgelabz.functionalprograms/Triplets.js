const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var utility = require('../utility/Utility');
var util = require('util');

rl.question('Enter the size of array :', (size) => {
    addNumber(size);

});

function addNumber(size)
{
    var array = [];
    var len = parseInt(size);
    sum(len);


    function sum(len) 
    {
        if (len > 0) 
        {
            rl.question('Enter element :', (value) => 
            {
                array.push(parseInt(value));
                len--;
                // console.log(array);

                sum(len);


            });
        }
        else 
        {
            utility.calculateTriplet(size, array);
            process.exit();
        }

    }


}







