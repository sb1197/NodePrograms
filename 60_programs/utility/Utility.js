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
		            if (cash === goal) 
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









































}