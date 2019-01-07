/*/**********************************************************************************
 *  Purpose         : To read numbers from input file and perform Hashing Function 
                        to search a Number in a slot and write the output to a file.
 *  @file           : HashingFunction.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 07-01-2018
 **********************************************************************************/

var linked = require('../DatastructurePrograms/LinkedList');
var utility = require('../utility/Utility');
var dis = require('util');
var read = require('readline-sync');
var brr = utility.readAllFromFile('numbers.txt');
var arr = new Array(10);
var n, remainder;
for (let index = 0; index < brr.length; index++) 
{
    n = brr[index];
    remainder = n % 10;//calculate the remainder
    if (arr[remainder] === undefined)   //if array does not contain any item in it means it has undefined
    {
        arr[remainder] = new linked.LinkedList;//create a new linked list to that index add item.
        (arr[remainder]).add(n);
    } 
    else 
    {
        arr[remainder].add(n);      //add item to older linked list
    }
} 
var str = "";
for (let index = 0; index < 10; index++) //for printing the item of hash function
{
    dis.print(index + " ====> ");
    try 
    {
        arr[index].printList();
    } 
    catch (err) 
    {
        console.log("empty index");
    }
}
var number = read.question(' Enter the number you want to search \n');
if(!isNaN(number))  //To check it is number or not
{ 
    remainder = Number(number % 10);
    if (arr[remainder] === undefined)  //if array does not contain any item in it means it has undefined
    {   
        arr[remainder] = new linked.LinkedList;     //create a new linked list to that index add item.
    } 
    if (arr[remainder].search(number)) //To search a number in a linked list
    {
        console.log("The number is found in file");
        var indexOfSearch =  arr[remainder].indexOf(number);
        arr[remainder].removeFrom(indexOfSearch);
        arr[remainder].printList();
    }
    else
    {
        console.log("Number is not found in file");
        arr[remainder].add(number);
    } 
    var flag;
    for (let index = 0; index < 10; index++) 
    {
        flag = true;
        dis.print(index +" ====> ");
        try
        {
            arr[index].printList();
            for(let i=0;i<arr[index].listSize();i++)
            {
                str= str+arr[index].printList1();   //To Copy linked list into a string
                if (arr[index] !== 'undefined' && index < arr.length - 2) 
                {
                    str = str + " ";
                }
            }        
        } 
        catch (err) 
        {
            console.log(" Empty index");    //If particular slot do not contain any linked list item 
        } 
    } 
    utility.writeAllToFile('hashingNumber.txt', str);    //for saving the file.
}
else
{
    console.log("Wrong input ");
}