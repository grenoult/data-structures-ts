import DoublyLinkedListNode from "./doubly-linked-list-node";

class DoublyLinkedList {
    private _head: DoublyLinkedListNode;
    private _tail: DoublyLinkedListNode;

    public get head(): DoublyLinkedListNode {
        return this._head;
    }

    public get tail(): DoublyLinkedListNode {
        return this._tail;
    }

// TODO add `addInMiddle` or something similar

    public add(value: string): void {
        const newNode = new DoublyLinkedListNode();
        newNode.value = value;

        if (this._head === undefined) {
            this._head = newNode;
        } else {
            const previousTail = this._tail;
            previousTail.next = newNode;
            // TODO: update prev

        }

        this._tail = newNode;
    }
}

export default DoublyLinkedList;