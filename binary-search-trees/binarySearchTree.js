class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){ //if there is no root
            this.root = newNode;
            return this;
        } else { // if there is a root, check if value of newNode is greater or less than root
            var current = this.root; // create variable to store current root. Update current as we go 
            while(true){ 
                if(val < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right
                    }
                }
            }

        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
        found = false;
        while(current && !found){
            if(value < current.value)
        }
    }
}

var tree = new BinarySearchTree();
