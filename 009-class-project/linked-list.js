"use strict";
class ListNode {
    value;
    next;
    constructor(value) {
        this.value = value;
    }
}
class LinkedList {
    root;
    tail;
    length = 0;
    add(value) {
        const node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    insertAt(value, pos) {
        if (pos > -1 && pos < this.length && this.root) {
            let current = this.root;
            let index = 0;
            let previous = current;
            let node = new ListNode(value);
            if (pos === 0) {
                node.next = this.root;
                this.root = node;
            }
            else {
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        }
        else {
            return false;
        }
    }
    removeAt(pos) {
        if (pos > -1 && pos < this.length && this.root) {
            let current = this.root;
            let previous = current;
            let index = 0;
            if (pos === 0) {
                this.root = current.next;
            }
            else {
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--;
            return current;
        }
        else {
            return null;
        }
    }
    getNumberOfElements() {
        return this.length;
    }
    print() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
const numberList = new LinkedList();
numberList.add(10);
numberList.add(5);
numberList.add(-3);
console.log("Length: " + numberList.getNumberOfElements());
numberList.print();
console.log("--- NOW REMOVING INDEX 1 ---");
numberList.removeAt(1);
console.log("Length: " + numberList.getNumberOfElements());
numberList.print();
console.log("--- NOW INSERTING AT INDEX 1 ---");
numberList.insertAt(100, 1);
console.log("Length: " + numberList.getNumberOfElements());
numberList.print();
const nameList = new LinkedList();
