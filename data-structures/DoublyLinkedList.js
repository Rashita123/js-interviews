class LLNode{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(head = null){
        this.head = head;
    }
    insert(value){
        const newLLNode = new LLNode(value);
        if(!this.head){
            this.head = newLLNode;
            return;
        }
        let tempNodeForTraversalToEnd = this.head;
        while(tempNodeForTraversalToEnd.next){
            tempNodeForTraversalToEnd = tempNodeForTraversalToEnd.next;
        }
        tempNodeForTraversalToEnd.next = newLLNode;
        newLLNode.prev = tempNodeForTraversalToEnd;

    }
    printDoublyLL(){
        if(!this.head){
            console.log("The doubly linked list seems to be empty");
            return;
        }
        let tempNodeForTraversalToEnd = this.head;
        console.log("************");
        while(tempNodeForTraversalToEnd){
            console.log("current element: ",tempNodeForTraversalToEnd.prev?.value, " --> ", tempNodeForTraversalToEnd.value, " --> ", tempNodeForTraversalToEnd.next?.value);
            tempNodeForTraversalToEnd = tempNodeForTraversalToEnd.next;
        }
        console.log("************");

    }
    remove(value){
        if(!this.head){
            console.log("Linedlist is empty, nothing to remove");
            return;
        }

        let tempNodeForTraversalToEnd = this.head;
        while(tempNodeForTraversalToEnd){
            if(tempNodeForTraversalToEnd.value === value){

                // if head node needs to be removed     
                if(!tempNodeForTraversalToEnd.prev){
                    this.head = this.head.next;
                    this.head.prev = null;
                    return;
                }
                // if last node needs to be removed
                if(!tempNodeForTraversalToEnd.next){
                    let prevNode = tempNodeForTraversalToEnd.prev;
                    prevNode.next = null;
                    return;
                }

                let prevNode = tempNodeForTraversalToEnd.prev;
                prevNode.next = tempNodeForTraversalToEnd.next;
                let nextNode = tempNodeForTraversalToEnd.next;
                nextNode.prev = prevNode;
                return;
            }
            tempNodeForTraversalToEnd = tempNodeForTraversalToEnd.next;
        }
        console.log("No such value found, nothing to be removed");
    }

    find(value){
        let tempNodeForTraversalToEnd = this.head;
        if(!this.head){
            console.log("Linked list is empty, nothing to find");
            return;
        }
        while(tempNodeForTraversalToEnd){
            if(tempNodeForTraversalToEnd.value === value){
                console.log(`Yes, the value ${value} is present`);
                return;
            }
            tempNodeForTraversalToEnd = tempNodeForTraversalToEnd.next;
        }
        console.log(`No, the value ${value} could not be found`);
    }
}

const doublyLL = new DoublyLinkedList();
doublyLL.printDoublyLL();
doublyLL.insert(2);
doublyLL.insert(4);
doublyLL.insert(6);
doublyLL.insert(8);
doublyLL.printDoublyLL();
doublyLL.remove(6);
doublyLL.printDoublyLL();
doublyLL.find(16);
doublyLL.find(8);
doublyLL.find(4);

