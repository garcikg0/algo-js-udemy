class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
};

class Stack {
    constructor(){
        this.first = null; //head
        this.last = null; //tail
        this.size = 0; //length 
    }
    push(val){ //create a new node with that value
        var newNode = new Node(val);
        if(!this.first){ // if no nodes in the stack, set first & last property to be the newly created node 
            this.first = newNode;
            this.last = newNode;
        } else { // if there are nodes in stack, store current first property in stack in a variable
            var temp = this.first;
            this.first = newNode; //reset first property to be newly created node
            this.first.next = temp; //set next property to be variable that is storing previous first property in stack 
        }
        return ++this.size; //increment the size of the stack 
    }
    pop(){
        if(!this.first) return null; // if no nodes in stack, return null
        var temp = this.first; // store first property of stack in a variable
        if(this.first === this.last){// if there is only 1 node, set first and last property to null
            this.last = null;
        } // if there is more than one node 
        this.first = this.first.next; // set first property to be the next property on current first 
        this.size--; // decrement size by 1
        return temp.value;
    }
};