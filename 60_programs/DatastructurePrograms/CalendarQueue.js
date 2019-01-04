/*/**********************************************************************************
 *  Purpose         : Print Calendar using Queue.
 *  @file           : CalendarQueue.js
 *  @author         : Shweta Bochare
 *  @version        : 1.0
 *  @since          : 31-12-2018
 **********************************************************************************/

const queueUsingLinked = require('../DatastructurePrograms/Queue');
var queue = new queueUsingLinked.Queue;
var queue1 = new queueUsingLinked.Queue;
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
   
    var weekArray = ["S","M","T","W","T","F","S"];
    for(let i=0;i<7;i++)
    {
        queue.enqueue(weekArray[i]);
    }
    queue.display2();        //Print week days
   
    // starting day
    var d = utility.dayOfWeek(1, month, year);
    for (let i = 0; i<(d*4); i++)         
    {
        util.print(" ");
    }

    for (let i = 1; i <= days[month]; i++) 
    {
        queue1.enqueue(i);
    }
    queue1.displayCalender(d);

  




// var months = [" ","January","February","March","April","May","Jun",
//                 "July","August","September","October","November","December"];

// // days[i] = number of days in month i
// var days= [0,31,28,31,30,31,30,31,31,30,31,30,31];

// var day = ["S", "M", "Tu", "W", "Th", "F", "S"];

// try {
//     var month = + process.argv[2];
//     var year = + process.argv[3];

//     var newMonth = parseInt(month);
//     var newYear = parseInt(year);

//     if (newMonth < 1 || newMonth > 12) 
//         throw "Month value is Invalid , Please Enter value in range 1-12"
//     if (newMonth == undefined || newYear == undefined)
//          throw "No input found"
//     if (isNaN(newMonth) || isNaN(newYear))
//          throw "No input or String found , Please Enter a valid input";
//     if (newMonth % 1 != 0 || newYear % 1 != 0)
//         throw "Number required , Floating value found"

//     var d = Utility.dayOfWeek(newMonth,1,newYear);

//     //check for leap year
//     if(newMonth == 2 && Utility.leapYear(newYear)) {
//         days[m] = 29;       
//         }

//     console.log("     " + months[newMonth] + " " + year);

//     for (let i = 0; i < 7; i++) {
//         linkedqueue.enqueue(day[i]);
//     }
//     linkedqueue.display2();

//      for (let i = 0; i < d; i++) {
//          linkedqueue2.enqueue(" ");
//      }

//     for (let i = 1; i <= days[newMonth]; i++) {
//         linkedqueue2.enqueue(i);
//     }

//     linkedqueue2.displayCalender(d);
// }
//  catch (err) 
//  {
//     console.log("Error: " + err);
// }
// }
// calender();