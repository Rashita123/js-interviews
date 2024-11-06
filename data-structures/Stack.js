class Node{
    constructor(value, prev){
        this.value =  value;
        this.prev = prev;
    }
}
class Stack{
    top;
    length;
    constructor(){
        this.top = null;
        this.length = 0;
    }
    printStack(){
        let NodeToTraverseStack = this.top;
        for(let i=0; i<this.length;i++){
            console.log(NodeToTraverseStack.value);
            NodeToTraverseStack = NodeToTraverseStack.prev;
        }
    }
    push(value){
        this.top = new Node(value, this.top);
        this.length++;
        return this.length;
    }
    pop(){
        const nodeToBePopped = this.top;
        this.top = this.top.prev;
        this.length--;
        return nodeToBePopped.value;
    }
    peek(){
        return this.top.value;
    }

    getLength(){
        return this.length;
    }
    isEmpty(){
        return this.top === null;
    }
}
pile = new Stack();
pile.push("dish");
pile.push("plate");
pile.push("spoon");
pile.pop();
pile.printStack();

console.log("First element is: ", pile.peek());
console.log("Length of stack is: ", pile.getLength());

console.log("Stack is empty?: ", pile.isEmpty());
pile.pop();
pile.pop();
console.log("Stack is empty?: ", pile.isEmpty());