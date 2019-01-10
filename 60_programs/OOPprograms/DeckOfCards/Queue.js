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

class Queue 
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.size = 0;
    } 
    enqueue(data)
    {
        var newNode = new Node(data);
        if (this.head === null) 
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else 
        {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    dequeue() 
    {
        var newNode;
        if (this.head !== null) {
            newNode = this.head.data;
            this.head = this.head.next;
        }
        this.size--;
        return newNode;
    }
    display() 
    {   
        var curr = this.head;
        while (curr) 
        {
            console.log(curr.data);   
            curr = curr.next;
        }      
    }

    getData() 
    {   
        var str = [];
        var curr = this.head;
        while (curr) 
        {
            str.push(curr.data);   
            curr = curr.next;
        }  

        return str;   
    }
    isEmpty()
    {
        return this.head == null;
    }
    getHead() 
    {
        return this.head;
    }

    sort() 
    {
        var len = this.size;
        if (len > 1) 
        {
            for (let i = 0; i < len;i++) 
            {
                var currentNode = this.head;
                var next = this.head.next;
                for (let j = 0; j < len - 1; j++) 
                {
                    if (currentNode.data > next.data) 
                    {
                        var temp = currentNode;
                        currentNode = next;
                        next = temp;
                    } 
                    currentNode = next;
                    next = next.next;                   
                } 
            }
        }
    }
}

module.exports = {
    Queue
}




// var queue = new Queue();
//   queue.enqueue(10);
//   queue.enqueue(20);
//   queue.enqueue(30);
//   queue.display();
// while(!queue.isEmpty())
// {
//     queue.dequeue();
//     queue.print();
// }
