/***********************************************************************************
 *  @Purpose        : Create a JSON file  maintain DateTime of the transaction in a 
 *                    Queue implemented using Linked List to indicate when the transactions
 *                    were done.
 *  @file           : stockTransaction.js
 *  @author         : Shweta Bochare
 *  @version        : 0.1
 *  @since          : 10-01-2019
 **********************************************************************************/

var read = require('readline-sync');
var utility = require('../../DatastructurePrograms/Queue.js');
class Comapany
{
    constructor(totalPrice)
    {
        this.totalPrice = 1;
    }
    //buy()=add data to the queue
    buy(num)
    {
        for(var i = 0; i < num; i++)
        {
            //asking user to enter inputs
            var Name = read.question("Enter the item purchased: ");
            var number = read.question("Enter the number of items purchased: ");
            var price = read.question("Enter the price per item: ");
            //object customer
            var customer =
            {
                name: Name,
                number: number,
                price: price
            }
            //adding cutomer object to the queue
            queue.enqueue(customer);
            //calculating total price
            var totalPrice = parseInt(num) * parseInt(price);
            console.log("The total price of" + Name +" is :" + totalPrice);
            //getting hrs,min,sec using date()
            var date = new Date();
            var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            console.log("The purchase time is " + time);
        }
    }
    //sell()-subtract data from queue
    sell()
    {
        var num = read.question("Enter the number of elements you want to sell: ");
        //removing entry from the queue
        for(var j = 0; j < num; j++)
        {
            queue.dequeue();
        }
        //getting hrs,min,sec from date function
        var date = new Date();
        var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        console.log("The item is sold at " + time);
    }
    //printing report
    accountReport()
    {
        queue.print();
    }
}

//creating object for require file 
var queue = new utility.Queue();
//creating object for class
var d = new Comapany();
//asking user to enter the stock value
var num = read.question("Please enter the total number of stocks purchased: ");
//calling functions
d.buy(num);
d.accountReport();
d.sell();