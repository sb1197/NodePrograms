module.exports = {

	/**
	 * @purpose : To replace string with correct string.
	 * @description: Replaces the original string with proper name input by user.
	 * @param name is the user input string.
	 */
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
	/**
	 * @purpose : 	To calculate percentage of heads and tails.
	 * @description: This method takes user input n to flip the coin n number of times
	 * 					and calculate the percentage of heads an tails.
	 * @param n user input to flip the coins n number of times. 
	 */
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
	/**
	 * @purpose : Check Leap Year.
	 * @description: This method is to check the year input by user is leap year or not.
	 * @param year User input year 
	 */
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
	/**
	 * @purpose : To calculate Power of two value
	 * @description: This method is to calculate the power of two upto user input number.
	 * @param number user input value 
	 */
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
	/**
	 * @purpose : To calculate harmonic value of input number
	 * @description: This method takes user input value to calculate the harmonic 
	 * 					series upto given number and returns the sum of it.
	 * @param number user input value 
	 */
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
	/**
	 * @purpose : To calculate the Prime Factors
	 * @description: This method is to calculate the Prime Factors of input number by user.
	 * @param n user input 
	 */
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
	/**
	 * @purpose : Gambling Simulator to calculate the average of bets and percentage of game wins
	 * @description: This method takes stake,goal,number of times to play and returns the 
	 * 				average of bets and percentage of game wins.
	 * @param name 
	 */
	gamblerSimulator(stake,goal,trials)
	{
		var bets = 0;        // total number of bets 
	    var wins = 0;        // total number of games won			
	    // repeat trials times
		for (var t = 0; t < trials; t++)
		{				 
	        var cash = stake;
			while (cash > 0 && cash < goal)
			{	
				//To ensure money remaining for playing 
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
		var ws = 100.0 * wins;
		var x = ws / trials;
		console.log('Percentage of game wins :',x);
		var ls = 1.0 * bets;
		var y = ls / trials;
		console.log('Average of bets :',y);		
	},	
/*****************************************************************************/
	/**
	 * @purpose : Generates n distinct coupon numbers.
	 * @description: This method takes a number value input and generates n 
	 * 				distinct coupon numbers.
	 */
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
	/**
	 * @purpose : Print 2D Integer array
	 * @param arr array elements
	 * @param start start index of array
	 * @param size size of array  
	 */
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
	/**
	 * @purpose : Print 2D Double array
	 * @param arr array elements
	 * @param start start index of array
	 * @param size size of array  
	 */
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
	/**
	 * @purpose : Find all Triplets from an array
	 * @description: This method takes array input from user and returns all triplets.
	 * @param n is the size of array
	 * @param array is the user input array 
	 */
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
					if (array[i] + array[j] + array[k] == 0) 	//check sum of triplets is zero or not
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
	/**
	 * @purpose : Calculate distance between origin and given point.
	 * @description: Calculate distance between origin and input value of x and y 
	 * 				co-ordinates of a point from user.
	 * @param x1 x co-ordinate of a point
	 * @param y1 y co-ordinate of a point 
	 */
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
	/**
	 * @purpose : To get System Time.
	 */
	getTime()
	{
		var d = new Date();
		var t = d.getTime();
		return t;
	},
/*****************************************************************************/
	/**
	 * @purpose : Calculate elapsed time.
	 * @description: This metod is to calculate the elapsed time taking start and stop time.
	 * @param start system time  
	 * @param stop system time  
	 */
	elapsedTime(start,stop)
	{
		var elapseTime = stop - start;	
		return elapseTime;
	},
/*****************************************************************************/
	/**
	 * @purpose : Find roots of quadratic equation.
	 * @description: This method takes value of a,b,c from user to calculate the roots of 
	 * 					quadratic equation.
	 * @param a user input value
	 * @param b user input value
	 * @param c user input value
	 */
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
	/**
	 * @purpose : Calculate Windchill.
	 * @description: This method takes temperature and wind speed value input from user and
	 * 					returns calculated windchill.
	 * @param t temperature value 
	 * @param v wind speed value  
	 */
	calculateWindChill(t,v)
	{
		var windchill;
		//Calculate windchill using formula given
		windchill = 35.74 + 0.6215*t + (0.4275*t - 35.75) * Math.pow(v, 0.16);
		return windchill;			
	},
/*****************************************************************************/
	/**
	 * @purpose : Check two strings are anagram or not.
	 * @description: This method takes two input strings from user to check whether 
	 * 					they are anagrams or not.
	 * @param str1 first string 
	 *  @param str2 second string 
	 */
	checkAnagram(str1,str2)
	{
		var m = str1.length;			
		var n = str2.length;			
		if(m == n)
		{
			var a = [];
			a = str1.split("");
			a.sort();				
			var b = [];
			b = str2.split("");
			b.sort();
			var flag = 0;
			for(var i=0;i<a.length;i++)
			{
				if(a[i] === b[i])
				{
					return flag = 1;						
				}
				else					
					return;							
			}			
		}
	},
/*****************************************************************************/
	/**
	 * @purpose : Prints prime number in given range
	 * @description: This method takes user input a number to print prime numbers 
	 * 					upto the given range.
	 * @param end range value 
	 */
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
	/**
	 * @purpose : Calculate prime numbers and pass it to check Anagrams
	 * @description: This method pass the prime numbers to check the Anagrams.
	 * @param n user input range 
	 */
	primeNumber(n)
	{
		var utility = require('../utility/Utility');
		var flag = 0,k = 0,i;
		var intArray = [];
		for(i=1;i<=n;i++) 	//loop continue to given range
		{
			for(var j=2;j<i;j++) 	// start checking prime no	
			{	
				if(i%j==0) 	//check given number is prime or not
				{
					flag = 0;
					break;
				}
				else
					flag = 1;
			}		
			if(flag == 1) 
			{
				if(i!=1 || i!=0) 				//Number should not be 0 or 1
				{
					//console.log(i);	//Print the prime numbers						
					utility.isPalindrome(i);
					intArray[k] = parseInt(i);
					k++;
				}
			}
		}
		utility.checkPrimeAnagram(intArray,k);
	},
/*****************************************************************************/	
	/**
	 * @purpose :
	 * @description:
	 * @param name 
	 */
	checkPrimeAnagram(intArray, k)
	{
		var str1 = "";
		console.log("Anagrams are :");
		var strArray,str1;
		var br = [k];
		var flag = 0;
		var z = [];
		for (let i = 0; i < k; i++)
		{
			strArray = intArray[i].toString();
			z = strArray.toCharArray;
			z.sort();
			str1 = z.toString();
			br[i] = str1;
		}
		for(let m=0;m<=k;m++)
		{
			for(let p=m+1;p<k;p++)
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
	/**
	 * @purpose : Check number is Palindrome or not
	 * @description: This method check if user input number is Palindrome or not
	 * @param number uer input value 
	 */
	isPalindrome(number)
	{
		var numberToCheck = parseInt(number);
		var numberInReverse = 0, temp = 0;
		while (numberToCheck > 0) 
		{
			temp = numberToCheck % 10;
			numberToCheck = Math.floor(numberToCheck / 10);
			numberInReverse = numberInReverse * 10 + temp;
		}
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
	/**
	 * @purpose : Vending Machine to count the currency.
	 * @description: This method is to count the number of notes in user input value
	 * @param amount user input cash value 
	 */
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
	/**
	 * @purpose : Calculate Day of Week
	 * @description: This method is used to calculate the day of week the 
	 * 				user input date falls on.
	 * @param day user input date 
	 * @param month user input month
	 * @param year user input year 
	 */
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
		return d0;
	},
/*****************************************************************************/
	/**
	 * @purpose : Convert the temperature.
	 * @description: This method takes input temperature to convert it 
	 * 					from celsius to fahrenheit or fahrenheit to celsius
	 * @param temperature temperature value
	 * @param choice user choice 
	 */
	convertTemp(temperature,choice)
	{		
		var ch = parseInt(choice);
		var celsius, fahrenheit;		
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
	/**
	 * @purpose : Calculate monthly payment
	 * @description: This method takes amount, period, interest rate input from user 
	 * 				to calculate the monthly payment.
	 * @param loanAmount loan amount
	 * @param termInYears period
	 * @param interestRate rate of interest
	 *  
	 */
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
	/**
	 * @purpose : Calculate square root.
	 * @description: This method is to calculate the square root of given number
	 * @param c number 
	 */
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
	/**
	 * @purpose : Binary Search on Integer array
	 * @description: This method is to search an integer element using binary search method
	 * @param n size of array
	 * @param arr array elements
	 * @param number number to search 
	 */
	binarySearchInteger(n,arr,number)
	{	
		var size = parseInt(n);
		//Binary search on array
		var search = parseInt(number);
		console.log("Search number is :", search);
		arr.sort();
		console.log("Sorted Array is :");
		for(let i=0;i<size;i++)
		{
            console.log(arr[i]);
		}
		var first = 0, last = n-1;
		var mid = Math.floor((first+last)/2);
		while(first <= last)
		{
	    	if ( arr[mid] < search )
			first = mid + 1;    
			else if ( arr[mid] == search )
			{
			    console.log(search + " found at location " + (mid+1) + ".");
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
	/**
	 * @purpose : Insertion Sort on Integer array
	 * @description: This method is to sort the integer array using Insertion Sort
	 * @param arr Integer array
	 * @param size is the size of array
	 */
	insertionSortInt(arr, size)
	{
		var i , n = parseInt(size) ;
		console.log("Elements of Integer array are :");
		for(i=0;i<n;i++)
		{
			console.log(arr[i]);
		}
		for (i=1; i<n; i++) 
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
		console.log("Sorted Elements of Integer array using Insertion Sort are :");
		for(i=0;i<n;i++)
		{
			console.log(arr[i]);
		}
	},
/****************************************************************************/
	/**
	 * @purpose : Bubble Sort on Integer array
	 * @description: This method is to sort the integer array using Bubble Sort
	 * @param ar is an integer array
	 * @param size is the size of an array. 
	 */
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
	/**
	 * @purpose : Binary Search on String array
	 * @description: This method is to search a string from string array
	 * @param n is size of string array
	 * @param arr is String array
	 * @param str is the string to search
	 */
	binarySearchStr(n,arr,str)
	{	
		var size = parseInt(n);
		//Binary search on array
		var search = str.toString();
		console.log("search string is :", search);
		arr.sort();
		console.log("Sorted Array is :");
		for(let i=0;i<size;i++) 
		{
            console.log(arr[i]);
		}
		var first = 0, last = n-1;
		var mid = Math.floor((first+last)/2);
		while( first <= last ) 
		{
	    	if ( arr[mid] < search )
			first = mid + 1;    
			else if ( arr[mid] == search )
			{
			    console.log(search + " found at location " + (mid+1) + ".");
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
	/**
	 * @purpose : Bubble Sort on String array
	 * @description: This method is to sort the String array using Bubble Sort
	 * @param array is String array
	 * @param size is the length of String array
	 */
	bubbleSortString(array, size)
	{
		var i,j;
		var k = parseInt(size);
		for (i = 0; i < k-1; i++)
			for (j = 0; j < k-i-1; j++)
				if (array[j] > array[j+1])
				{
					// swap temp and arr[i]
					var temp = array[j].toString();
					array[j] = array[j+1];
					array[j+1] = temp;
				}
		return array;
	},
/*****************************************************************************/
	/**
	 * @purpose : Insertion Sort on String array
	 * @description: This method is to sort the String array using Insertion Sort
	 * @param arr is String array
	 * @param size is the length of String array
	 */
	insertionSortString(arr, size)
	{
		var i , n = parseInt(size) ;
		console.log("Elements of String array are :");
		for(i=0;i<n;i++)
		{
			console.log(arr[i]);
		}
		for (i=1; i<n; i++) 
		{ 
			var key = arr[i].toString(); 
			//console.log('key is :',key.toString());
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
		console.log("Sorted Elements of String array using Insertion Sort are :");
		for(i=0;i<n;i++)
		{
			console.log(arr[i]);
		}
	},

/*****************************************************************************/
	/**
	 * @purpose : Print all permutation of String
	 * @description: This method takes a string input and returns all 
	 * 					the permutation of that string
	 * @param char_arr is the converted character array of input string
	 * @param i is the strating index of character array 
	 */
	strIterativePermutation(char_arr, i)
	{	
		var utility = require('../utility/Utility');
		if(i == char_arr.length-1)
		{
		    // print the shuffled string 
		     var str = "";
			for(var j=0; j<char_arr.length; j++)
			{
		        str=str+char_arr[j];
		    }
		        console.log(str);
		}
		else 
		{
			for(var j=i; j<char_arr.length; j++)
			{
			    var tmp = char_arr[i];
			    char_arr[i] = char_arr[j];
			    char_arr[j] = tmp;
			    utility.strIterativePermutation(char_arr,i+1);
			    var tmp1 = char_arr[i];
			    char_arr[i] = char_arr[j];
			    char_arr[j] = tmp1;  
			}
		}
	},
/*****************************************************************************/
	/**
	 * @purpose : Merge Sort on string array
	 * @description: This method returns the sorted elements of string array using Merge Sort.
	 * @param arr is the string array 
	 */
	mergeSort(arr) 
	{
		var utility = require('../utility/Utility');
		if (arr.length == 1) 
		{
		  // return once we hit an array with a single item
		  return arr;
		}  
		var middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
		var left = arr.slice(0, middle) // items on the left side
		var right = arr.slice(middle) // items on the right side  
		return utility.merge(utility.mergeSort(left),utility.mergeSort(right));
	},
	// compare the arrays item by item and return the concatenated result
	merge (left, right) 
   {
		let result = []
		let indexLeft = 0
		let indexRight = 0	
		while (indexLeft < left.length && indexRight < right.length) 
		{
			if (left[indexLeft] < right[indexRight])
			{
				result.push(left[indexLeft])
				indexLeft++
			} 
			else
			{
				result.push(right[indexRight])
				indexRight++
			}
		}		
		return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
	},	  
/*****************************************************************************/
	/**
	 * @purpose : Decimal To Binary Conversion
	 * @description: This method takes input decimal integer from user and returns 
	 * 					the binary conversion of that number 
	 * @param number is the decimal integer 
	 */
	decimalToBinary(number)
	{
		var util = require('util');
		var n = parseInt(number);
		// array to store binary number 
	    var binaryNum = [1000];    
	    // counter for binary array 
	    var count = 0; 
	    while (n > 0)  
	    { 
	        // storing remainder in binary array 
	        binaryNum[count] = n % 2; 
	        n = Math.floor(n / 2); 
	        count++; 
	    }     
	    // printing binary array in reverse order 
		for (let j = count - 1; j >= 0; j--) 
		{
	    	util.print(binaryNum[j]);	         
		}
		console.log();	
	},
/*****************************************************************************/
	/**
	 * @purpose : Binary Nibble Swap to Converted binary to decimal number
	 * @description: This method convert input decimal number to binary then 
	 * 					swap the nibbles to create new decimal number
	 * @param number decimal integer input 
	 */
	binaryToDecimal(number)
	{
		var util = require('util');
		var n = parseInt(number);
		var x = "";
		var count = 0;
		while(n > 0)
		{
		    a = n % 2;
		    x = a + "" + x;
			n = Math.floor(n / 2);
			count++;		
		}
		console.log("Binary number:"+x);
		console.log('length is :',count);		
		while(count!=8)
		{
			var str = '0';
			for(let i=count;i<8;i++)
			{				
				x = str + x ;
				count++;				
			}			
		}
		console.log('Compelte Binary :',x);
		var nibble1 = x.substring(0,4);
		console.log('Nibble 1 :',nibble1);
		var nibble2 = x.substring(4,8);
		console.log('Nibble 2 :',nibble2);
		var convertedDecimal = nibble2 + nibble1;
		var result = parseInt(convertedDecimal,2);
		console.log('Converted Binary to Decimal number is :',result);
		process.exit();
	},
/*****************************************************************************/
	/**
	 * @purpose : Guess a number
	 * @description: This method is to guess a number game in which we 
	 * 				search a number guess by user using binary search
	 * @param arr is the array elements 
	 */
	yourNumber(arr)
	{
		var utility = require('../utility/Utility');
		var low = 0;
		var high = arr.length-1;
		console.log("Think any number between "+low+" and "+ high);
		utility.search(low, high);
	},
/*****************************************************************************/
	/**
	 * @purpose : Search a number from array
	 * @param low is the low value
	 * @param high is the high value 
	 */
	search(low,high)
	{
		var utility = require('../utility/Utility');
		var read = require('readline-sync');
		var mid=Math.floor((high+low)/2);
		if(high==low)
		{
			console.log("Your Number is "+mid);
			process.exit();
		}
		console.log("\n Is it less than "+mid);
		var answer = read.question('Enter yes or no or equal  ');	
		if(answer === 'yes')
			utility.search(low,mid-1);
		else if(answer === 'no')
			utility.search(mid+1, high);
		else if(answer === 'equal')
		{
			console.log('Your Number is :',mid);
			process.exit();
		}	
	},
/*****************************************************************************/
	/**
	 * @purpose Read all the contents from file
	 * @param filename is file name to read data
	 */
	readAllFromFile(filename)
	{
		const fileStream = require('fs');
		var file = fileStream.readFileSync(filename,'utf8');
		var fileToArray = [];
		fileToArray = file.split(" ",file.length);
		return fileToArray;
	},
/*****************************************************************************/
	/**
	 * @purpose To write all the contents of array into the Output File
	 * @param filename is name of file
	 * @param array is an array to write into file
	 */
	writeAllToFile(filename,array)
	{
		const fileStream = require('fs');
		var arrToString = array.toString();
		fileStream.writeFile(filename,arrToString,(err) =>
		{  
			// throws an error, you could also catch it here
			if (err) throw err;		
			// success case, the file was saved
			console.log('File saved!');
		});
	},
/*****************************************************************************/
	/**
	 * @purpose To check input expression has balanced parantheses or not
	 * @param expression is an userInput expression 
	 */
	checkBalancedParantheses(expression)
	{
		const stackUsingLinked = require('../DatastructurePrograms/Stack');
		var list = new stackUsingLinked.Stack;
		var char_array = [];
		var str = "";
		var x = 0, y = 0;
		for(let i = 0;i<expression.length;i++) 
		{
			char_array.push(expression.charAt(i.toString()));
		}
		for(let z=0;z<char_array.length;z++)
		{
			str = char_array[z.toString()];
			if( str === '{' || str === '[' || str === '(' ) 
			{
				list.push(str.toString());
				x++;
			}
			else if(str === '}' || str === ']' || str === ')') 
			{
				list.pop();
				y++;
			}
		} 
		if(x == y)
		{	
			return true;
		}  
		else
		{
			return false;
		}
	},
/*****************************************************************************/
	/**
	 * @purpose To execute the banking trasaction of persons in queue using Queue.
	 * @param numberOfPerson is count of perons in queue
	 */
	bankingCounter(numberOfPerson)
	{
		const queueUsingLinked = require('../DatastructurePrograms/Queue');
		var queue = new queueUsingLinked.Queue;
		var read = require('readline-sync');
		var amount=0 , totalBalance = 1000;
		console.log('no person',numberOfPerson);
		for(let index = 0; index < numberOfPerson; index++) 
		{
			queue.enqueue(index);
		}
		if(queue.isEmpty()) 
		{
			console.log('No persons are left in Queue..');
			process.exit();
		}
		else
		{
			while(!queue.isEmpty()) 
			{
				console.log('1. Deposit Amount. \n2. Withdraw Amount.');
				console.log('Press 1 To deposit_Amount \nPress 2 To withdraw_Amount');
				var choice = read.question('Enter your choice :');
				if(choice == 1) 
				{
					amount = read.question('Enter amount to deposit :');
					totalBalance = totalBalance + parseInt(amount);
					console.log('Total amount after deposit :',totalBalance);
				}
				else if(choice == 2)
				{
					amount = read.question('Enter amount to withdraw :');
					totalBalance = totalBalance - parseInt(amount);
					console.log('Total amount after withdraw :',totalBalance);
				}
				queue.dequeue();
			}
		}			
	},
/****************************************************************************/
	/**
	 * @purpose To check if two strings are palindrome or not using Deque
	 * @param str1 first string
	 * @param str2 second string
	 */
	checkPalindromeInDeque(str1,str2)
	{
		if(str1 === str2)
		{
			console.log('Input string is Palindrome..');
			process.exit();
		}
		else 
		{
			console.log('Input string is not Palindrome..');
			process.exit();
		}  
	},
/*****************************************************************************/
	/**
	 * @purpose Calculate factorial of number
	 * @param n user Input value
	 */
	factorial(n) 
	{ 
		var res = 1; 	
		// Calculate value of  
		// [1*(2)*---*(n-k+1)] /  
		// [k*(k-1)*---*1] 
		for (let i = 1; i <= n; ++i) 
		{ 
			res *= i; 
		} 	
		return res; 
	} ,
/*****************************************************************************/
	// A function to calculate binomial coefficient value of (2 * n, n) 
	binomialCoeff(n, k) 
	{ 
		var res = 1; 
		// Since C(n, k) = C(n, n-k) 
		if (k > n - k) 
			k = n - k; 
		// Calculate value of [n*(n-1)*---*(n-k+1)] / [k*(k-1)*---*1] 
		for (let i = 0; i < k; ++i) 
		{ 
			res *= (n - i); 
			res = res / (i + 1); 
		} 
		return res; 
	}, 
  
	// A Binomial coefficient based function to find nth catalan number  
	catalan(n) 
	{ 
		var utility = require('../utility/Utility');
		// Calculate value of 2nCn 
		var c = utility.binomialCoeff(2 * n, n); 	
		// return 2nCn/(n+1) 
		return c / (n + 1); 
	} ,
  
	/**
	 * @purpose A function to count number of BST with n nodes using catalan 
	 * @param number is user input number 
	 */ 	
	countBST(number) 
	{ 
		var utility = require('../utility/Utility');
		var n = parseInt(number);
		// find nth catalan number 
		var count = utility.catalan(n); 	
		// return nth catalan number 
		return count; 
	} ,
/*****************************************************************************/
	/**
	 * @purpose To find prime numbers within given range 
	 * @param s1 starting value
	 * @param s2 ending value
	 */
	findPrime(s1, s2) 
	{
		var count = 0, flag = 0, k = 0;
		var prime = [];
		for (var i = s1; i <= s2; i++)
		{
			for (var j = 2; j < i; j++) 
			{
				if (i % j == 0) 
				{
					flag = 0;
					count++;
					break;
				} 
				else 
				{
					flag = 1;
				}
			}
			if (flag == 1)
			{
				prime[k++] = i;
			}
		}
		return prime;
	},
/*****************************************************************************/
	/**
	 * @purpose To print prime Anagram within given range
	 * @param ii starting value
	 * @param jj ending value
	 */
	findAnaPrime(ii, jj) 
	{
		var primes = this.findPrime(ii, jj);
		var n = primes.length;
		var anaPrimes = [];
		var h = 0;
		for (let i = 0; i < primes.length - 1; i++)
		{
			for (let j = i + 1; j < primes.length - 1; j++) 
			{
				if (this.checkAnagram2(primes[i], primes[j]))
				{
					anaPrimes[h++] = primes[i];
					anaPrimes[h++] = primes[j];
				}
			}
		}
		return anaPrimes;
	},
/*****************************************************************************/
	/**
	 * @purpose To check if two strings are anagram or not
	 * @param str1 first string 
	 * @param str2 second string
	 */
	checkAnagram2(str1, str2) 
	{
		let unsortedStr1 = "" + str1;
		let unsortedStr2 = "" + str2;
		if (unsortedStr1.length != unsortedStr2.length)
		{
			return false;
		}
		sortedStr1 = this.sort1(unsortedStr1);
		sortedStr2 = this.sort1(unsortedStr2);
		let b = this.check(sortedStr1, sortedStr2);
		if (b == true) 
		{
			return true;
		} 
		else 
		{
			return false;
		}
	},
/*****************************************************************************/
	/**
	 * @purpose Convert input string to character_array and sort it.
	 * @param str input String
	 */
	sort1(str) 
	{
		let ch = str.split('');
		for (let i = 0; i < str.length; i++) 
		{
			for (let j = i + 1; j < str.length; j++) 
			{
				if (ch[i] > ch[j]) 
				{
					let t = ch[i];
					ch[i] = ch[j];
					ch[j] = t;
				}
			}
		}
		var sortedStr = "";
		for (let i = 0; i < ch.length; i++) 
		{
			sortedStr += ch[i];
		}
		return sortedStr;
	},
/*****************************************************************************/
	/**
	 * @purpose Check each character of both char_array
	 * @param s1 char_array 1
	 * @param s2 char_array 2
	 */
	check(s1, s2) 
	{
		for (let i = 0; i < s1.length; i++) 
		{
			if (s1.charAt(i) != s2.charAt(i)) 
			{
				return false;
			}
		}
		return true;
	},
/*****************************************************************************/
	/**
	 * @purpose To validate user input name
	 * @param str name of user
	 */
	validateName(str)
	{
		//console.log("name :",str);
		var regex = /^[a-zA-Z]{2,30}$/;

		if (regex.test(str)) 
			return true;
		else 
			return false;
	},
/*****************************************************************************/
	/**
	 * @purpose To validate user input contact
	 * @param number contact of user
	 */
	validateContact(number)
	{
		var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		if (regex.test(number)) 
			return true;
		else 
			return false;
	},
/*****************************************************************************/
	/**
	 * @purpose To display the output of regex file
	 * @param file input readed file
	 * @param fName first name of user 
	 * @param fullName full name of user
	 * @param contact contact of user
	 * @param today today's date
	 */
	displayRegexFile(file,fName,fullName,contact,today)
	{
		var utility = require('../utility/Utility');
		var str = file.replace("<<name>>",fName).replace("<<fullname>>",fullName).replace("xxxxxxxxxx",contact).replace("01/01/2016", today);
		console.log("Updated file..");
		console.log(str);
		utility.writeToFile("regexOuput.txt",str);
	},
/*****************************************************************************/
	/**
	 * @purpose To write all the contents of string into the Output File
	 * @param filename is name of file
	 * @param str is a string to write into file
	 */
	writeToFile(filename,str)
	{
		const fileStream = require('fs');
		var arrToString = str.toString();
		fileStream.writeFile(filename,arrToString,(err) =>
		{  
			// throws an error, you could also catch it here
			if (err) throw err;		
			// success case, the file was saved
			console.log('File saved!');
		});
	},
/*****************************************************************************/












}