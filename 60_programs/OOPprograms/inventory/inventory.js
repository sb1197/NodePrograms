/***********************************************************************************
 *  Purpose         : Create a JSON file having Inventory Details for Rice, Pulses and Wheats
                      with properties name, weight, price per kg.
 *  @file           : inventory.js
 *  @author         : Shweta Bochare
 *  @version        : 0.1
 *  @since          : 07-01-2019
 **********************************************************************************/

var read = require('readline-sync');
var fs=require('fs');
//read file from inventory.json 
var element = fs.readFileSync('inventory.json');
//JSON.parse-Converts a JavaScript Object Notation (JSON) string into an object.
var jsonInventory = JSON.parse(element);
function inventory()
{
    console.log('Inventory Management');
    console.log('1. Add \n2.Calculate \n3.Delete \n4.Exit');
    var choice = read.question("Please enter your choice: ");

    // TO ADD PARTICULAR OBJECT ELEMENTS INTO JSON ARRAY
    if(choice == 1)
    {
        var Name = read.question('enter name :');
        var Weight = read.question('enter weight :');
        var Price = read.question('enter price :');
        var symbol = read.question('Enter where to add : 1.Rice  2.Wheat  3.Pulses :');
        // TO ADD PARTICULAR ELEMENTS INTO RICE OBJECT IN JSON ARRAY
        if(symbol == 1)
        {               
            jsonInventory.rice.push(
            {
                name:Name,
                weight:Weight,
                price:Price         
            });                                
        }
        // TO ADD PARTICULAR ELEMENTS INTO WHEAT OBJECT IN JSON ARRAY
        else if(symbol == 2)
        {            
            jsonInventory.wheat.push(
            {
                name:Name,
                weight:Weight,
                price:Price         
            });
        }
        // TO ADD PARTICULAR ELEMENTS INTO PULSES OBJECT IN JSON ARRAY
        else if(symbol == 3)
        {
            jsonInventory.pulses.push(
            {
                name:Name,
                weight:Weight,
                price:Price         
            });
        }
        else
        {
            console.log("Invalid input.."); 
        }  
        fs.writeFileSync('./inventory.json', JSON.stringify(jsonInventory), 'utf-8', function (){ 
            console.log('done') 
        });
        console.log("Item Added Successfully.");
        console.log(jsonInventory);           
        inventory();   
    }
    else if(choice == 2)
    {
        console.log("1: Rice ");
        console.log("2: Wheat");
        console.log("3: Pulses");
        //take user input for choice
        var item = read.question("Please enter your choice: ");
        switch(parseInt(item))
        {
            //case 1 for calculate value of rice
            case 1:
            var weight = read.question("Please enter the weight of rice you want to purchase: ");
            for(var i=0;i<jsonInventory.rice.length;i++)
            {
                console.log("Per Kg. of "+jsonInventory.rice[i].name+"--->"+jsonInventory.rice[i].price+"    "+weight+" Kgs. costs  :"+weight*jsonInventory.rice[i].price);
            }
            break;
            //case 2 for calculate value of wheats
            case 2:
            var weight = read.question("Please enter the weight of wheat you want to purchase: ");
            for(var i=0;i<jsonInventory.wheat.length;i++)
            {
                console.log("Per Kg. of "+jsonInventory.wheat[i].name+"--->"+jsonInventory.wheat[i].price+"    "+weight+" Kgs. costs  :"+weight*jsonInventory.wheat[i].price);
            }
            break;
            //case 3 for calculate value of pulses
            case 3:
            var weight = read.question("Please enter the weight of pulses you want to purchase: ");
            for(var i=0;i<jsonInventory.pulses.length;i++)
            {
                console.log("Per Kg. of "+jsonInventory.pulses[i].name+"--->"+jsonInventory.pulses[i].price+"   "+weight+" Kgs. costs  :"+weight*jsonInventory.pulses[i].price);
            }
            break;
            default:
                console.log("Please select a valid item!!");
                break;
        }
        inventory();
    }
    else if(choice == 3)
    {
        //TO DELETE OBJECT
        console.log("1: Rice");
        console.log("2: Wheat");
        console.log("3: Pulses");  
        var del = read.question('please enter the choice of product you want to delete:');        
        if(del == 1)
        {
            var attribute = read.question('name of item you want to delete in rice:');
            for(var i=0;i<jsonInventory.rice.length;i++)
            {
                if(attribute === jsonInventory.rice[i].name)
                {
                    jsonInventory.rice.splice(i, 1);
                }
            }
            console.log("after deletion data is",jsonInventory);                
        }
        if(del == 2)
        {
            var attribute = read.question('name of item you want to delete in Wheat:');
            for(var i=0;i<jsonInventory.wheat.length;i++)
            {
                if(attribute === jsonInventory.wheat[i].name)
                {
                    jsonInventory.wheat.splice(i, 1);
                }
            }
            console.log("after deletion data is",jsonInventory);
        }
        if(del == 3)
        {
            var attribute = read.question('name of item you want to delete in pules:');
            for(var i=0;i<jsonInventory.pulses.length;i++)
            {
                if(attribute === jsonInventory.pulses[i].name)
                {
                    jsonInventory.pulses.splice(i, 1);
                }
            }               
        } 
        fs.writeFileSync('./inventory.json', JSON.stringify(jsonInventory), 'utf-8', function (){ 
            console.log('done') 
        });
        console.log("Item Deleted Successfully.");
        console.log(jsonInventory);           
        inventory();   
    }
    else if(choice == 4) 
    {
        console.log("Exiting..");
        process.exit();    
    }  
    else
    {
        console.log('Invalid choice.'); 
    }  
}
inventory();
  
