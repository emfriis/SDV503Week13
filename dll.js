class Node {
    constructor(data) {
        this.data = data; // Sets new node's data to input value.
        this.prev = null; // Sets new node's previous node to null.
        this.next = null; // Sets new node's next node to null.
    };
};

class DoublyLinkedList {
    constructor() {
        this.length = 0; // Sets length to 0.
        this.head = null; // Sets head to null.
        this.tail = null; // Sets tail to null.
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

    removeAtIndex(index) {
        if (this.head === null || index < 0) { // Executes if there are no nodes in list or the index is negative.
            return undefined;
        };
        let current = this.head; // Sets current node to head.
        let counter = 0; // Sets counter to 0.
        while (current !== null && counter < index) { // While the current node isn't null and the counter is less than the index.
            current = current.next; // Sets the current node to the next node.
            counter++; // Increments the counter.
        };
        if (current !== null) { // Executes if node was found.
            current.previous.next = current.next; // Points current's previous node's next node to current's next node.
            if (this.tail === current) { // Executes if current is the current tail.
                this.tail = current.previous; // Sets current's previous node to new tail.
            } else {
                current.next.previous = current.previous; // Points current's next node's previous node to current's previous node.
            };
        } else {
            return undefined;
        };
    };

    getAtIndex(index) {
        if (index > -1) { // Executes if index is positive;
            let current = this.head; // Sets current node to head.
            let counter = 0; // Sets counter to 0;
            while(current !== null && counter < index) { // While the current node isn't null and the counter is less than the index.
                current = current.next; // Sets the current node to the next node.
                counter++; // Increments the counter.
            };
            return current !== null ? current : undefined; // If current node isn't null returns i, if not, returns undefined.
        } else {
            return undefined;
        };
    };

    setAtIndex(index, data) {
        let foundNode = this.getAtIndex(index); // Gets node with class method.
        if (foundNode !== null) { // Executes if node is found.
            foundNode.data = data; // Assigns new data value to found node.
            return true;
        };
        return false;
    };

};



const myList = new DoublyLinkedList;
console.log(myList);
myList.addAtTail(1);
console.log(myList);
myList.addAtHead(0);
console.log(myList);
console.log(myList.getAtIndex(1));