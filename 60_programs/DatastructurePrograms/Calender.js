/*/**********************************************************************************
 *  Purpose         : Prints Calendar.
 *  @file           : CalendarStack.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 31-12-2018
 **********************************************************************************/

var utility = require('../utility/Utility');
var read = require('readline-sync');
var util = require('util');    
var m=4,n=2;
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
// starting day
var d = utility.dayOfWeek(1, month, year);
console.log("SUN MON TUE WED THU FRI SAT");
// print the calendar
for (let i = 1; i < (d*m+n); i++)
     util.print(" ");
for (let i = 1; i <= days[month]; i++) 
{
     if(i<10)
     util.print(i,"   ");
     else
     util.print(i,"  ")
     if (((i + d) % 7 == 0) || (i == days[month])) 
          console.log();
          util.print("");           
}