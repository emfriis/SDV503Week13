class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    };
};

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    };

    addAtTail(data) {
        const newNode = new Node(data); // Creates new node.
        if (this.head === null) { // Executes if there are no nodes in list.
            this.head = newNode; // Points head to new node.
        } else {
            this.tail.next = newNode; // Points current tail to new node.
            newNode.previous = this.tail; // Points new node to current tail.
        };
        this.tail = newNode; // Sets new node as new tail.
        this.length++; // Increments length.
    };

    addAtHead(data) {
        const newNode = new Node(data); // Creates new node.
        if (this.tail === null) { // Executes if there are no nodes in list.
            this.tail = newNode; // Points tail to new node.
        } else {
            this.head.prev = newNode; // Points current head to new node.
            newNode.next = this.head; // Points new node to current head.
        };
        this.head = newNode; // Sets new node as new head.
        this.length++; // Increments length.
    };

    removeAtTail() {
        if (this.tail === null) { // Executes if there are no nodes in list.
            return undefined;
        };
        this.tail = this.tail.prev; // Sets current tail's previous node as tail.
        this.tail.next = null; // Sets new tail's next node to null.
        this.length--; // Decrements length.
    };

    removeAtHead() {
        if (this.head === null) { // Executes if there are no nodes in list.
            return undefined;
        };
        this.head = this.head.next; // Sets current head's next node as head;
        this.head.prev = null; // Sets new heads previous node to null.
        this.length-- // Decrements length.
    };

    getAtIndex(index) {
        if (index > -1) { // Executes if index is positive;
            let current = this.head; // Sets current node to head.
            let i = 0; // Sets counter to 0;
            while(current !== null && i < index) { // While the current node isn't null and the counter is less than the index.
                current = current.next; // Sets the current node to the next node;
                i++; // Increments the counter;
            };
            return current !== null ? current.data : undefined; // If current node isn't null returns its data, if not, returns undefined.
        } else {
            return undefined;
        };
    };

};



const myList = new DoublyLinkedList;
console.log(myList);
myList.addAtTail(1);
console.log(myList);
myList.addAtHead(0);
console.log(myList);
console.log(myList.getAtIndex(1));