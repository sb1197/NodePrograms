class Node 
{
    constructor(data) 
	{
		this.data = data;
		this.next = null;
	}	
	
}

class LinkedList
{
    constructor()
    {
        this.head = null;
        this.size = 0; 
    }
     
    // adds an element at the end 
    // of list 
    add(data) 
    { 
        // creates a new node 
        var node = new Node(data); 
    
        // to store current node 
        var current; 
    
        // if list is Empty add the 
        // element and make it head 
        if (this.head == null) 
            this.head = node; 
        else { 
            current = this.head; 
    
            // iterate to the end of the 
            // list 
            while (current.next) { 
                current = current.next; 
            } 
    
            // add node 
            current.next = node; 
        } 
        this.size++; 
    }
    
    // prints the list items 
    printList() 
    { 
        var curr = this.head; 
        var str = ""; 
        while (curr) 
        { 
            str += curr.data + " "; 
            curr = curr.next; 
        } 
        console.log(str); 
    } 

    // finds the index of element 
    indexOf(data) 
    { 
        var count = 0; 
        var current = this.head; 
    
        // iterae over the list 
        while (current != null) 
        { 
            // compare each element of the list 
            // with given element 
            if (current.data === data) 
                return count; 
            count++; 
            current = current.next; 
        } 
    
        // not found 
        return -1; 
    } 

    search(str)
    {
        var current = this.head;   //Initialize current 
        while (current != null) 
        { 
            if ((current.data) === str)                 
                return true;    //data found 
                current = current.next;                  
        } 
        return false;    //data not found 
    }

    // removes an element from the 
    // specified location 
    removeFrom(index) 
    { 
        if (index > 0 && index > this.size) 
            return -1; 
        else { 
            var curr, prev, iterator = 0; 
            curr = this.head; 
            prev = curr; 
    
            // deleting first element 
            if (index === 0) 
            { 
                this.head = curr.next; 
            } 
            else 
            { 
                // iterate over the list to the 
                // position to removce an element 
                while (iterator < index) 
                { 
                    iterator++; 
                    prev = curr; 
                    curr = curr.next; 
                } 
    
                // remove the element 
                prev.next = curr.next; 
            } 
            this.size--; 
    
            // return the remove element 
            return curr.data; 
        } 
    } 

    // gives the size of the list 
    listSize() 
    { 
        return this.size; 
    } 

    get(index)
	{
		// if(index >= listSize())
		// {
		// 	throw new IndexOutOfBoundsException();
		// }
		// var temp=head;
		// for(let i=0;i<index;i++)
		// {
		// 	temp = temp.next;
		// }
        // return temp.data;
        var current = this.head; 
        var count = 0; /* index of Node we are 
                          currently looking at */
        while (current != null) 
        { 
            if (count == index) 
                return current.data; 
            count++; 
            current = current.next; 
        } 

	}







}


module.exports = 
{
    LinkedList
}


// const linked = require('../DatastructurePrograms/LinkedList');

// var list = new LinkedList;

// list.add(43);
// list.add(52);
// list.add(89);
// list.add(66);
// list.printList();