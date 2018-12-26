module.exports = {


    replaceName(name)
    {
		var n = name.length;
		if(n>3)
        {
            console.log('Hello '+name+'How are you?');
            process.exit();
        }
        else
        {
            console.log('Please enter correct name..');
            process.exit();
        }
	},
   
/*****************************************************************************/

    flipCoin(n)
	{
		var heads = 0, tails=0,i;			
		for(i=0; i<n; i++)
		{
			//To check the possibility of heads or tails
			if(Math.random() < 0.5)	
			{
				tails++;						
			}
			else
			{											
				heads++;
			}
					
		}
		// Print the percentage of Heads and Tails
		console.log('Percentage(Heads) = ',(heads/n)*100);
		console.log('Percentage(Tails) = ',((tails/n)*100));		
    },
        
/*****************************************************************************/

	checkLeapYear(year)
	{
		var isLeap = false;	 
		if(year % 4 == 0)
		{
			if( year % 100 == 0)
			{
				if ( year % 400 == 0)
				  	isLeap = true;
				else
					isLeap = false;
			}
			else
				isLeap = true;
		}
		else 
		{
			isLeap = false;
		}		 
		return isLeap; 
	},

/*****************************************************************************/

	powerOf2(number)
	{
	   	var i = 0;                // count from 0 to N
		var powerOfTwo = 1;       // the ith power of two	
		  // repeat until i equals n
		  while (i <= number) 
		  {
			  console.log(i + " ------ " + powerOfTwo);   // print out the power of two
			  powerOfTwo = 2 * powerOfTwo;                // double to get the next one
			  i = i + 1;
		  }
	},
	  
/*****************************************************************************/

	calculateHarmonicNumber(number)
	{
			var sum = 0;	
			// Calculate till we get n'th term
			for (var i = 1; i <= number; i++) 
			{
				sum = sum + (1.0 / i);	//To calculate the harmonic value of given input  
			}
			return sum;
	},
		
/*****************************************************************************/

	calculatePrimeFactors(n)
	{
			//find prime factors of a number
			for(var i=2;i<=n;i++) 
			{
				while(n%i==0) 
				{
					console.log(i + " ");
					//divide the result until n%i goes to zero
					n = n / i;					
				}
			}						
	},
		
/*****************************************************************************/

		gamblerSimulator(stake,goal,trials)
		{
				var bets = 0;        // total number of bets 
		        var wins = 0;        // total number of games won
			
		        // repeat trials times
		        for (var t = 0; t < trials; t++) 
		        {
					 
		            var cash = stake;
		            while (cash > 0 && cash < goal) 	//To ensure money remaining for playing 
		            {
		                bets++;	
						if(Math.random() < 0.5) 	
						{
							cash++; // win 					
						}	                	
						else 
						{		
							cash--; //loss
						}	
						   
		            }
		            if (cash == goal) 
		            	wins++;  
		        }
	
		        // print results
		        console.log("No of bets : "+bets);
		        // console.log(wins + " wins of " + trials);		        
				// console.log(loss + " loss of " + trials);
				var ws = 100.0 * wins;
				var x = ws / trials;
				console.log('Percentage of game wins :',x);
				var ls = 1.0 * bets;
				var y = ls / trials;
				console.log('Average of bets :',y);
		
		},	

/*****************************************************************************/


	couponGenerator() 
	{
		var coupon = '';		
		var possible = '0123456789';		
		for (var i = 0; i < possible.length; i++)
		{		
			coupon += possible.charAt(Math.floor(Math.random() * possible.length));		
		}		
		return coupon;		
	},

	/*****************************************************************************/

	printIntegerArray(arr,start,size)
	{
		var util = require('util');
		 var i=start,j=size;
		// To print Integer 2D array
		 for(i=0;i<arr.length;i++) 
		 {
				for(j=0;j<arr.length;j++) 
				{
					util.print(arr[i][j]+'  ');
				}
				console.log();
		 }
	},


/*****************************************************************************/


	printDoubleArray(arr,start,size)
	{
		var util = require('util');
		 var i=start,j=size;
		// To print Integer 2D array
		for(i=0;i<arr.length;i++) 
		{
			for(j=0;j<arr.length;j++) 
			{
				util.print(arr[i][j]+'  ');
			}
			console.log();
		}
	},


/*****************************************************************************/

	calculateTriplet(n,array)
	{
		console.log("array",array);
		console.log("length",n);
		var count = 0;
		for (var i = 0; i < n-2; i++)	
		{
		    for (var j = i + 1; j < n-1; j++)
		    {
		        for (var k = j + 1; k < n; k++) 
			    {
			    	if (array[i] + array[j] + array[k] == 0)	//check sum of triplets is zero or not
			        {
			            console.log("Triplets are :",array[i],' , ',array[j],' , ',array[k]);
			            count++;
			        }
			    }
		    }
		}
		console.log("Number of triplets generated :"+count);
	},

/*****************************************************************************/

	calculateDistance(x1,y1)
	{
		var distance;
		//Declare Origin point
		var x2 = 0,y2 = 0;		
		
		//Calculate distance between given point and origin
		distance = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));	
		
		//Return calculated distance from origin point
		return distance;
	},

/*****************************************************************************/

	getTime()
	{
		var d = new Date();
		var t = d.getTime();
		return t;
	},

/*****************************************************************************/

	elapsedTime(start,stop)
	{
		var elapseTime = stop - start;	
		return elapseTime;
	},

/*****************************************************************************/

		qudraticEquation(a,b,c)
		{
			var delta, root1, root2;
		
			// To calculate value of delta
			delta = b*b - 4*a*c;
			console.log(delta);
				
			//To calculate of roots of x
			
			root1 = (-b + Math.sqrt(delta))/(2*a);
			root2 = (-b - Math.sqrt(delta))/(2*a);
			
			// To print the values roots of x
			if(delta > 0)
			{
			  	console.log("Roots are real and unequal");
			   	console.log("First root is:"+root1);
			   	console.log("Second root is:"+root2);      	
			}
			else if(delta==0)
			{
			 	console.log("Roots are real and equal");
			   	console.log("First root is:"+root1);			        	
			}
			else
			   	console.log("Roots are imaginary..");
			       
		},

/*****************************************************************************/

	calculateWindChill(t,v)
	{
		var windchill;
		//Calculate windchill using formula given
		windchill = 35.74 + 0.6215*t + (0.4275*t - 35.75) * Math.pow(v, 0.16);
		return windchill;			
	},

/*****************************************************************************/

	checkAnagram(str1,str2)
	{
			var m = str1.length;			
			var n = str2.length;
			
			if(m == n)
			{
				var a = [];
				a = str1.split("");
				a.sort();
				console.log('Char arrray a :',a);
				
				var b = [];
				b = str2.split("");
				b.sort();
				console.log('Char arrray a :',b);
				var flag = 0;
				for(var i=0;i<a.length;i++)
				{
					if(a[i] == b[i])
					{
						flag = 1;						
					}
					else
					{
						flag = 0;						
					}
				}
				if(flag == 1)
				{
					console.log('Input Strings ',str1,' & ',str2,' are Anagram..');
				}
				else
				{
					console.log('Input Strings ',str1,' & ',str2,' are not Anagram..');
				}
				
			}
			else
			{
				console.log('Input strings are of differnt length..');
			}
	},

/*****************************************************************************/

	printPrimeNumberInRange(end)
	{
		var i,j,count=0;
		for(i=1; i<=end; i++)
	    {
	        count = 0;
	        for(j=2; j<i; j++)
	        {
	            if(i%j == 0)
	            {
	                count++;
	                break;
	            }
	        }
	        if(count == 0)
	        {
	            console.log(i);
	        }
	    }
	},


/*****************************************************************************/

	primeNumber(n)
	{
		var utility = require('../utility/Utility');
		var flag = 0,k = 0,i;
		var intArray = [];
		for(i=1;i<=n;i++)	//loop continue to given range
		{
			for(var j=2;j<i;j++)	// start checking prime no
			{
				if(i%j==0)		//check given number is prime or not
				{
					flag = 0;
					break;
				}
				else
					flag = 1;
			}
		
			if(flag == 1)
			{
				if(i!=1 || i!=0)				//Number should not be 0 or 1
				{
					//console.log(i);	//Print the prime numbers						
					utility.isPalindrome(i);
					// intArray[k] = parseInt(i);
					// k++;
				}
			}
		}
		//utility.checkPrimeAnagram(intArray,k);

	},

/*****************************************************************************/

		checkPrimeAnagram(n)
		{
			var utility = require('../utility/Utility');
			var flag = 0, k = 0,i, m = 0;
			var intArray = [];
			for(i=m;i<=n;i++)	//loop continue to given range
			{
				for(var j=2;j<i;j++)	// start checking prime no
				{
					if(i%j==0)		//check given number is prime or not
					{
						flag = 0;
						break;
					}
					else
						flag = 1;
				}
			
				if(flag == 1)
				{
					if(i!=1 || i!=0)				//Number should not be 0 or 1
					{
						//System.out.print(i+" ");	//Print the prime numbers						
						intArray[k] = i;		//scan the result into an integer array	
						k++;						//scan until the last element
					}
				}
			}
			console.log("Anagrams are :");
			utility.checkAnagram(intArray, k);				//calling the anagram method
		},

/*****************************************************************************/
	checkAnagram(intArray, k)
	{

		console.log('Welcome..');
			var strArray = "",str1 = "";
			var br = [];
			var flag = 0;
			for (var i = 0; i < k; i++)
			{
				strArray = intArray[i].toString();
				var z = [];
				z = strArray.toCharArray;
				z.sort();
				str1 = String.valueOf(z);
				br[i] = str1;
			}
		
			for(var m=0;m<=k;m++)
			{
				for(var p=m+1;p<k;p++)
				{
						if(br[m] === br[p])
						{
							console.log(intArray[m]+"----"+intArray[p]);
							flag=1;
						}
				}
			}
			if(flag==0)
			{
				console.log("Exit");
			}
	},
	

/*****************************************************************************/

	isPalindrome(number)
	{
		var numberToCheck = parseInt(number);
		var numberInReverse = 0, temp = 0;
		//	console.log('number is :',numberToCheck);
		while (numberToCheck > 0) 
		{
			temp = numberToCheck % 10;
			numberToCheck = Math.floor(numberToCheck / 10);
			numberInReverse = numberInReverse * 10 + temp;
		}
			//console.log('Num in reverse :',numberInReverse);
			if(number === numberInReverse)
			{
				console.log(number,'is a Palindrome');
			}
			else
			{
				console.log(number);
			}
	},

/*****************************************************************************/

	countCurrency(amount)
	{
		var notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1]; 
	    var noteCounter = []; 
	      var cash = parseInt(amount); 
	    // count notes 
	    for (var i = 0; i < 9; i++) 
	    { 
	        if (cash >= notes[i])
	        { 
	            noteCounter[i] = Math.floor(cash / notes[i]); 
	            cash = cash - noteCounter[i] * notes[i]; 
	        } 
	    } 
	       
	    // Print notes 
	    console.log('Currency Count ->'); 
	    for (var i = 0; i < 9; i++) 
	    { 
	        if (noteCounter[i] != 0) 
	        { 
	            console.log(notes[i] + ' : '+ noteCounter[i]); 
	        } 
	    } 
	},

/*****************************************************************************/

	dayOfWeek(day, month, year) 
	{
		var d = parseInt(day);
		var m = parseInt(month);
		var y = parseInt(year);
		 
		// Calculate day of week by taking date input from user.
		var y0 = y - Math.floor((14 - m) / 12);
		var x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 /400);
		var m0 = m + 12 * Math.floor((14 - m) /12) - 2;
		  
		// Calculate day of week
		var d0 = (d + x + Math.floor((31*m0)/12)) % 7;
		 
		  // Print the values calculated
//		  System.out.println(y0);
//		  System.out.println(x);
//		  System.out.println(m0);
//		  System.out.println(d0);
		
		return d0;
	},

/*****************************************************************************/

	convertTemp(temperature,choice)
	{
		
		var ch = parseInt(choice);
		var celsius, fahrenheit;
		//return results to main
		
		if(ch == 1)
		{
			fahrenheit = (temperature * 9/5) + 32;
			console.log('Temperature in Celsius to Fahrenheit: ',parseFloat(fahrenheit));
		}
		else if(ch == 2)
		{
			celsius = (temperature - 32) * 5/9;
			console.log('Temperature in Fahrenheit to Celsius : ',parseFloat(celsius));
		}
	},

/*****************************************************************************/

	calculateMonthlyPay(loanAmount, termInYears, interestRate)
	{       
	    // Monthly interest rate    
	    var monthlyRate = interestRate / (12 * 100);
	       
	    // The length of the term in months 
		var termInMonths = 12 * termInYears;
	       
	    // Calculate the car loan payment
	    // The Math.pow() method is used calculate values raised to a power	       
		var monthlyPayment =  (loanAmount*monthlyRate) / (1 - Math.pow(1 + interestRate, -termInMonths));
		
	    return monthlyPayment;
	},

/*****************************************************************************/

	calculateSquareRoot(c)
	  {
		  var epsilon = 1e-15;    
	        var t = c;              // calculate the square root of c
	        
	        // repeatedly apply Newton method until desired precision is achieved
			while (Math.abs(t - c/t) > epsilon * t) 
			{
	            t = (c/t + t) / 2.0;
	        }
	        return t;
	  },

/*****************************************************************************/

	binarySearchInteger(n,arr,number)
	{	
		var size = parseInt(n);
		console.log("Array is :");
            for(let i=0;i<size;i++)
            {
                console.log(arr[i]);
			}
			
		//Binary search on array
		var search = parseInt(number);
		console.log("search num is :", search);
		var first = 0, last = n-1;
		var mid = Math.floor((first+last)/2);
		// console.log("first  is :", first);
		// console.log("last  is :", last);
		// console.log("mid  is :", mid);
		while( first <= last )
	    {
	    	if ( arr[mid] < search )
			first = mid + 1;    
			else if ( arr[mid] == search )
			{
			    console.log(search + " found at location " + (mid+ 1) + ".");
			    break;
			}
			else
			    last = mid - 1;
			
				mid = Math.floor((first + last)/2);
		}
		if (first > last)
		    console.log(search + " isn't present in the list.\n");
				
	},

/*****************************************************************************/

	insertionSortInt(arr, size)
	{
		var i , n = parseInt(size) ;
		console.log("Elements of Integer array are :");
		for(i=0;i<n;i++)
		{
			console.log(arr[i]);
		}
		
		for (i=1; i<n; ++i) 
		{ 
			var key = parseInt(arr[i]); 
			var j = i-1; 

			/* Move elements of arr[0..i-1], that are 
			greater than key, to one position ahead 
			of their current position */
			while (j>=0 && arr[j] > key) 
			{ 
				arr[j+1] = arr[j]; 
				j = j-1; 
			} 
			arr[j+1] = key; 
		} 
		console.log("Sorted Elements of Integer array are :");
		for(i=0;i<n;i++)
		{
			console.log(arr[i]);
		}
	},

/*****************************************************************************/

bubbleIntSort(ar, size)
{
	var i,j;
	var k = parseInt(size);
	for (i = 0; i < k-1; i++)
	    for (j = 0; j < k-i-1; j++)
	        if (ar[j] > ar[j+1])
	        {
	            // swap temp and arr[i]
	            var temp = parseInt(ar[j]);
	            ar[j] = ar[j+1];
	            ar[j+1] = temp;
	        }
	return ar;
},

/*****************************************************************************/
























}