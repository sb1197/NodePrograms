var fs=require('fs');
//read file from inventory.json 
var element = fs.readFileSync('stock.json');
//JSON.parse-Converts a JavaScript Object Notation (JSON) string into an object.
var jsonStock = JSON.parse(element);
var readStock = require('./stock');
var read = require('readline-sync');
function StockReport()
{
    console.log('\n*** Stock Portfolio ***');
    console.log('1.Add Stock \n2.Remove Stock \n3.Display \n4.Update \n5.Exit');
    var choice = read.question('Enter your choice :');
    if(choice == 1)
    {
        var shareName = read.question('Enter share name :');
        var noOfShare = read.question('Enter no. of share :');
        var sharePrice = read.question('Enter share price :');
        var total = noOfShare*sharePrice;
        var stockObj = new readStock.stock(shareName,noOfShare,sharePrice,total);
        jsonStock.Stock.push(stockObj);
        fs.writeFileSync('./stock.json', JSON.stringify(jsonStock), 'utf-8', function ()
        { 
            console.log('done') 
        });
        console.log("Stock Item Added Successfully.");
        StockReport();
    }
    else if(choice == 2)
    {
        var attribute = read.question('Enter name of share you want to delete :');
        for(var i=0;i<jsonStock.Stock.length;i++)
        {
            if(attribute === jsonStock.Stock[i].shareName)
            {
                jsonStock.Stock.splice(i, 1);
            }
        }    
        fs.writeFileSync('./stock.json', JSON.stringify(jsonStock), 'utf-8', function ()
        { 
            console.log('done') 
        });
        console.log("Stock Item Deleted Successfully.");
        StockReport();
    }
    else if(choice == 3)
    {
        console.log('\n** Stock Report **');
        console.log(jsonStock); 
        StockReport();
    }
    else if(choice == 4)
    {
        var updateData = read.question('Enter name of share you want to update :');
        for(var i=0;i<jsonStock.Stock.length;i++)
        {
            if(updateData === jsonStock.Stock[i].shareName)
            {
                console.log('1.Update name \n2.Update noOfShare \n3.Update sharePrice');
                var choice1 = read.question('Enter what you want to update :');
                if(choice1 == 1)
                {
                    var newShareName = read.question('Enter new share name :');
                    jsonStock.Stock[i].shareName = newShareName;
                }
                else if(choice1 == 2)
                {
                    var newnoOfShare = read.question('Enter new noOfShare :');
                    jsonStock.Stock[i].noOfShare = newnoOfShare;
                    var newTotal = newnoOfShare * jsonStock.Stock[i].sharePrice;
                    jsonStock.Stock[i].total = newTotal;
                } 
                else if(choice1 == 3)
                {
                    var newsharePrice = read.question('Enter new share price :');
                    jsonStock.Stock[i].sharePrice = newsharePrice;
                    var newTotal = jsonStock.Stock[i].noOfShare * newsharePrice;
                    jsonStock.Stock[i].total = newTotal;
                }
                else
                    console.log('Invalid update choice..');       
            }
        }
        fs.writeFileSync('./stock.json', JSON.stringify(jsonStock), 'utf-8', function ()
        { 
            console.log('done') 
        });
        console.log('Item Updated Successfully.');   
        StockReport();     
    }
    else if(choice == 5)
    {
        console.log('\nExiting..');
        process.exit();
    }
    else
        console.log('Invalid choice..');                  
}   
StockReport();