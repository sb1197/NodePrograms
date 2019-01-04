/*/**********************************************************************************
 *  Purpose         : Print Calendar using Stack.
 *  @file           : CalendarStack.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 31-12-2018
 **********************************************************************************/

const stackUsingLinked = require('../DatastructurePrograms/Stack');
var stack = new stackUsingLinked.Stack;
var stack1 = new stackUsingLinked.Stack;
var utility = require('../utility/Utility');
var read = require('readline-sync');
var util = require('util'); 
   
	var month = read.question('Enter the month value :');
	var year = read.question('Enter the year value :');		
	// months[i] = name of month i
	// leave month[0] empty so that months[1] = "January"
    var months = ["","January","February","March","April","May","June","July","August", "September",
        						"October", "November", "December"];

    // days[i] = number of days in month i
    var days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
    // check for leap year
    if (month == 2 && utility.checkLeapYear(year)) 
        days[month] = 29;

    // print calendar header
    console.log("   " + months[month] + " " + year);     
   
    var weekArray = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    for(let i=6;i>=0;i--)
    {
        stack.push(weekArray[i]);
    }
    stack.display();        //Print week days
    console.log();

    // starting day
     var d = utility.dayOfWeek(1, month, year);
     for (let i = 0; i<(d*4); i++)         
     {
         util.print(" ");
     }

     for (let i = days[month]; i >= 1; i--) 
     {
         stack1.push(i);
     }
      stack1.displayCalender(d);
   

