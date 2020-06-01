class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        };
        this.length++;
        return this;
    };

    pop() {
        if (!this.head) {
            var current = this.head;
            var newTail = current;
            while (current.next) {
                newTail = current;
                current = current.next;
            };
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            };
            return current;
        };

    };

    get(index) {
        if (index < 0 || index <= this.length) {
            return null;
        };
        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        };
        return current;
    };

    set(index, val) {
        var foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        };
        return false;
    };

    removeAtIndex(index) {
        if (index === 0 && this.head !== null) {
            this.head = this.head.next;
        } else {
            if (index >= length || index < 0) {
                return null;
            };
            var current = this.head;
            var previous;
            var counter = 0;
            while (counter !== index) {
                previous = current;
                current = current.next;
                counter++;
            };
            previous.next = current.next;
            length--;
            return current.data
        };
    };

};

var list = new SinglyLinkedList();
list.push(1);
console.log(list);