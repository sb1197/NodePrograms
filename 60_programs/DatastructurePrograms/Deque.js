// JavaScript source code
// Queue implemented using LinkedList
class Node 
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
    
}

class Deque 
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }
   
    enqueue(data)
    {
        var newNode = new Node(data);
        if (this.head === null) 
        {
            this.head = newNode;
            this.tail = newNode;
        } else 
        {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    removeFirstNode() 
    {
        var newNode;
        if (this.head !== null) {
            newNode = this.head.data;
            this.head = this.head.next;
        }
        return newNode;
    }
    print() 
    {
        var curr = this.head;
        while (curr) 
        {
            console.log(curr.data);
            curr = curr.next;
        }
    }
    
    removeLastNode()
    {
        if (this.head == null) 
        {
            throw new IllegalStateException();
        }
        if (this.head == this.tail)
        {
            this.head = null;
            this.tail = null;
        } 
        else 
        {
            var current = this.head;
            while (current.next != this.tail)
            {
                current = current.next;
            }
            var temp = current.next.data;
            current.next = null;
            this.tail = current;
        }
        return temp;
    }


    isEmpty()
    {
        return this.head == null;
    }
}

module.exports = {
    Deque
}




// var deque = new Deque();

//     deque.enqueue(10);
//     deque.enqueue(20);
//     deque.enqueue(30);
//     deque.enqueue(40);

//     deque.print();

//     console.log('Deleted first node :')
//     var x = deque.removeFirstNode();
//     console.log('First node :',x);
//     deque.print();
//     console.log('Deleted last node :')
//     var y = deque.removeLastNode();
//     console.log('Last node :',y)
//     deque.print();