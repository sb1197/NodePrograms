// JavaScript source code
// Linked List
var show = require('util');
function Node(data) {
    this.data = data;
    this.next = null;
}
// Stack implemented using LinkedList
class Stack1{
Stack1() {
    this.top = null;
   // this.size = 0;
}
    push(data) {
    var newNode = new Node(data);
    newNode.next = this.top; //Special attention
    this.top = newNode;
   // this.size++;
}
pop() {
    if (this.top !== null) {
        var topItem = this.top.data;
        this.top = this.top.next;
       // this.size--;
        return topItem;
    }
    return null;
}
print() {
    var curr = this.top;
    while (curr) {
        console.log(curr.data);
        curr = curr.next;
    }
}
peek() {
    return this.top.data;
}
isEmpty(){
    if(this.top === null)
        return true;
    else
        return false;    
    
}
display2(){
    var t = this.top;
    
    while(t!=null)
    {
        show.print(t.data);
        if(t.next!=null)
            show.print("  ");
        t = t.next;
    }
   // console.log();
    console.log();
}
displayCalender(d){
   
    var t = this.top;
   // var t2 = this.head;
  
     var count = 0;
    while(t.data == " ")
    {
   show.print("  ");
   
   t = t.next;
    }
    while(t!=null)
    {   
        count++;
        show.print(" ", t.data);
     if(t.data < 10){
         show.print(" ");
     }
    
     if (((count + d) % 7 == 0) ) {
        console.log("");
    }
   t = t.next;
}
count = 0;
}
    displayReverse(top) {

        if (top == null)
            return;

        this.displayReverse(top.next);
        show.print(top.data);
        if (top.next != top)
            show.print("-->");

    }
    getHead() {
        return this.top;
    }
}

module.exports = {
    Stack1
}