class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){ // this will add to the very end of linked list
        var newNode = new Node(val); // create a new node using the value passed in
        if(!this.first){ // if there are no nodes in queue
            this.first = newNode; //set this node to be first and last property of queue 
            this.last = newNode
        } else { // if there are nodes in queue
            this.last.next = newNode; // set next property on current last to be newNode
            this.last = newNode //  set last property of queue to be newNode
        }
        return ++this.size; // increment the size of queue by 1
    }

    dequeue(){ // this will remove from the beginning of linked list
        if(!this.first) return null; 
        var temp = this.first; // store first proerty in variable 
        if(this.first === this.last){ // if there is only 1 node 
            this.last = null; // set last to null 
        } // if there is more than 1 node
        this.first = this.first.next; // set first property to be next property of first 
        this.size--; // decrement size by 1
        return temp.value; // return value of node dequeued. 
    }
}