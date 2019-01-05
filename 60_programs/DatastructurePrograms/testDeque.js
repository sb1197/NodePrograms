var deque = new Deque();
    deque.enqueue('a');
    deque.enqueue('b');
    deque.enqueue('c');
    deque.enqueue('d');
    deque.print();
    console.log('Deleted first node :')
    var x = deque.removeFirstNode();
    console.log('First node :',x);
    deque.print();
    console.log('Deleted last node :')
    var y = deque.removeLastNode();
    console.log('Last node :',y)
    deque.print();