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

    public add(value: string): void {
        const newNode = new DoublyLinkedListNode();
        newNode.value = value;

        if (this._head === undefined) {
            this._head = newNode;
        } else {
            const previousTail = this._tail;
            previousTail.next = newNode;
            newNode.prev = previousTail;
        }

        this._tail = newNode;
    }

    public addAfter(currentNode: DoublyLinkedListNode, value: string): void {
        // Create new node
        const newNode = new DoublyLinkedListNode();
        newNode.value = value;

        // Update if tail
        if (currentNode === this._tail) {
            this._tail = newNode;
        }

        // Insert new node: references with currentNode
        newNode.next = currentNode.next; // New node next = current node next
        newNode.prev = currentNode;

        // Update current node next to be next node
        currentNode.next = newNode;
    }

    public search(value: string): DoublyLinkedListNode {
        let currentNode = this._head;

        do {
            // If we search before we have any result, exit.
            // Or if we reach end of list, exit.
            if (currentNode === undefined) {
                return null;
            }
            
            // If we found the result, exit
            if (currentNode.value === value) {
                return currentNode;
            }

            currentNode = currentNode.next;

        } while (currentNode instanceof DoublyLinkedListNode);

        return null;
    }

    public remove(node: DoublyLinkedListNode): boolean {
        // If we find in beginning of list, update head and exit
        if (node === this._head) {
            this._head = node.next;
            this._head.prev = undefined;
            return true;
        }

        // If we find in end of list, update tail and exit
        if (node === this._tail) {
            this._tail = node.prev;
            this._tail.next = undefined;
            return true;
        }

        // If we find in middle of list, update prev and next and exit
        const previousNode = node.prev;
        const nextNode = node.next;

        previousNode.next = nextNode;
        nextNode.prev = previousNode;
        return true;
    }
}

export default DoublyLinkedList;