/***********************************************************************************
 *  Purpose         : Create a JSON file having Inventory Details for Rice, Pulses and Wheats
                      with properties name, weight, price per kg.
 *  @file           : inventory.js
 *  @author         : Shweta Bochare
 *  @version        : 0.1
 *  @since          : 05-01-2019
 **********************************************************************************/

var read = require('readline-sync');
var fs=require('fs');
function inventory()
{
    //read file from inventory.json 
    var element = fs.readFileSync('inventory.json');
    //JSON.parse-Converts a JavaScript Object Notation (JSON) string into an object.
    var jsonInventory = JSON.parse(element);
    //print 
    console.log("1: Rice");
    console.log("2: Wheat");
    console.log("3: Pulses");
    //take user input for choice
    var item = read.question("Please enter your choice: ");
    switch(parseInt(item))
    {
        //case 1 for calculate value of rice
        case 1:
        var weight = read.question("Please enter the weight of rice you want to purchase: ");
        for(var i=0;i<jsonInventory.Rice.length;i++)
        {
            console.log("Per Kg. of "+jsonInventory.Rice[i].name+" costs "+jsonInventory.Rice[i].price+" and for "+weight+" Kgs. costs "+weight*jsonInventory.Rice[i].price);
        }
        break;
        //case 2 for calculate value of wheats
        case 2:
        var weight = read.question("Please enter the weight of wheat you want to purchase: ");
        for(var i=0;i<jsonInventory.Wheats.length;i++)
        {
            console.log("Per Kg. of "+jsonInventory.Wheats[i].name+" costs "+jsonInventory.Wheats[i].price+" and for "+weight+" Kgs. costs "+weight*jsonInventory.Wheats[i].price);
        }
        break;
        //case 3 for calculate value of pulses
        case 3:
        var weight = read.question("Please enter the weight of pulses you want to purchase: ");
        for(var i=0;i<jsonInventory.pulses.length;i++)
        {
            console.log("Per Kg. of "+jsonInventory.pulses[i].name+" costs "+jsonInventory.pulses[i].price+" and for "+weight+" Kgs. costs "+weight*jsonInventory.pulses[i].price);
        }
        break;
        default:
            console.log("Please select a valid item!!");
    }
}
inventory();