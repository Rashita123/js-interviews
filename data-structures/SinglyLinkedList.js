class LLNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList{
    head;
    constructor(){
        this.head = null;
    }
    insert(value){
        const newLLNode = new LLNode(value);
        if(this.head === null){
            this.head = newLLNode;
            return;
        }
        let tempPointer = this.head;
        while(tempPointer.next!==null){
            tempPointer = tempPointer.next;
        }
        tempPointer.next = newLLNode;
    }
    size(){
        let size = 0;
        let tempPointer = this.head;
        while(tempPointer){
            size++;
            tempPointer = tempPointer.next;
        }
        return size;
    }
    printLinkedList(){
        let tempPointer = this.head;
        while(tempPointer){
            console.log(tempPointer.value);
            tempPointer = tempPointer.next;
        }
    }
    find(value){
        let tempPointer = this.head;
        while(tempPointer){
            if(tempPointer.value === value){
                return true;
            }
            tempPointer = tempPointer.next;
        }
        return false;
    }
    remove(value){
        let tempPointer = this.head;
        let prevToTempPointer = null;
        while(tempPointer){
            if(tempPointer.value === value){
                if(tempPointer === this.head){
                    this.head = this.head.next;
                    return 0;
                }
                prevToTempPointer.next = tempPointer.next;
                return 0;
            }
            prevToTempPointer = tempPointer;
            tempPointer = tempPointer.next;
        }
        return -1;
    }
}

const linkedList = new SinglyLinkedList();
linkedList.insert(2);
linkedList.insert(4);
linkedList.insert(6);
linkedList.insert(8);
linkedList.printLinkedList();
console.log("size of linkedList is:", linkedList.size());
console.log("check for 2 if it is present:", linkedList.find(2));
console.log("check for 12 if it is present:", linkedList.find(12));
linkedList.remove(4);
linkedList.printLinkedList();
console.log("size of linkedList is:", linkedList.size());
