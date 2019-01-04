class Node 
{
    constructor(data) 
	{
		this.data = data;
		this.next = null;
	}	
	
}

class Stack 
{ 
  
    // A linked list node  
    // Constructor 
    constructor() 
    { 
        this.top = null; 
        this.link = null;
    } 
  
    // Utility function to add an element x in the stack 
    push(x) // insert at the beginning 
    { 
        // create new node temp and allocate memory 
        var temp = new Node(x); 
  
        // check if stack (heap) is full. Then inserting an 
        //  element would lead to stack overflow 
        if (temp == null) 
        { 
            console.log("\nStack Overflow"); 
            return; 
        } 
  
        // initialize data into temp data field 
        temp.data = x; 
  
        // put top reference into temp link 
        temp.link = this.top; 
  
        // update top reference 
        this.top = temp; 
    } 
  
    // Utility function to check if the stack is empty or not 
    isEmpty() 
    { 
        return top == null; 
    } 
  
    // Utility function to return top element in a stack 
    peek() 
    { 
        // check for empty stack 
        if (!isEmpty()) 
        { 
            return top.data; 
        } 
        else 
        { 
            console.log("Stack is empty"); 
            return -1; 
        } 
    } 
  
    // Utility function to pop top element from the stack 
    pop() // remove at the beginning 
    { 
        // check for stack underflow 
        if (this.top == null)
        { 
            console.log("\nStack Underflow"); 
            return; 
        } 
  
        // update the top pointer to point to the next node 
        this.top = (this.top).link; 
    } 
  
    display() 
    { 
        var util = require('util');  
        // check for stack underflow 
        if (this.top == null) 
        { 
            console.log("\nStack Underflow"); 
            exit(1); 
        } 
        else 
        { 
            var temp = this.top; 
            while (temp != null) 
            { 
  
                // print node data 
               // console.log(temp.data); 
               util.print(temp.data+" ");
  
                // assign temp link to temp 
                temp = temp.link; 
            } 
        } 
    }
    
    displayCalender(d)
	{
		var show = require('util');
		var t = this.top;	
		var count = 0;

		// while(t.data == " ")
		// {
		// 	show.print(" ");
		// 	t = t.next;
		// }
		while(t!=null)
		{   
			count++;
			show.print("  ", t.data);
			if(t.data < 10)
			{
				show.print(" ");
			}
		
			if (((count + d) % 7 == 0) )
			{
				console.log("");
			}
			t = t.link;
		}
		count = 0;
	}
} 

module.exports = 
{
   Stack
}
