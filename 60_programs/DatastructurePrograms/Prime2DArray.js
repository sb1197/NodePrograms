
var util = require('util');
var n=1000,size = 0;
var flag = false;
var intArray = [];
			
			for(let i=0;i<=n;i++)
			{
				for(let z=1;z<i;z++)
				{
					if(i%z==0)
					{
						flag = false;
						break;
					}
					else					
						flag = true;						
				}
				if(flag == true)
				{
					//util.print(i+" ");
                    intArray.push(i);
                    size++;
				}
            }
            console.log("Size of Array :",size); 
            console.log("1d Array :"); 
            for(let i=0;i<size;i++)
            {
                console.log(intArray[parseInt(i)]);
            }

			
			// var a = [10][30];
            
		    //   for(let i=0;i<10;i++)
		    //     {
		    //        for(let j=0;j<25;j++)
		    //         {	
            //             for(let z=0;z<intArray.length;z++)
            //             {
            //                 a[i][j] = intArray[z];  
            //             }                    
                                              
		    //         }
		    //     }
					
		    // for(let z=0;z<intArray.length;z++)
            // {
            //     console.log(intArray[z]);  
            // }  
		    // var pause = 100;    //taking for partition purpose
					
			// console.log("2d Array :"); 
			
		    // for(let i=0;i<10;i++)
	        // {
	        //    for(let j=0;j<25;j++)
	        //     {	
	        	  
	        // 	   if((intArray[i][j])>pause)
	        //         {
	        //              pause=pause+100;
	        //              console.log();
	        //         }	
	        // 	   util.print(intArray[i][j]+" ");
	        //     }
	        // }
								
					