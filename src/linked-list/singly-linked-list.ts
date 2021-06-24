import LinkedListInterface from "./linked-list-interface";
import SinglyLinkedListNode from "./singly-linked-list-node";

class SinglyLinkedList implements LinkedListInterface
{
    private _head: SinglyLinkedListNode;
    private _tail: SinglyLinkedListNode;

    public get head(): SinglyLinkedListNode {
        return this._head;
    }

    public add(value:string): void {
        const newNode = new SinglyLinkedListNode();
        newNode.value = value;

        if (this._head === undefined) {
            this._head = newNode;
        } else {
            const previousTail = this._tail;
            previousTail.next = newNode;
        }
        this._tail = newNode;
    }

    public search(value:string): SinglyLinkedListNode {
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

        } while (currentNode instanceof SinglyLinkedListNode);

        return null;
    }

    public remove(node: SinglyLinkedListNode): boolean {
        let currentNode = this._head;

        // If we find in beginning of list, update head and exit
        if (currentNode === node) {
            this._head = currentNode.next;
            return true;
        }

        do {
            // If we search on empty list, return false.
            // Or if we reach end of list, return false.
            if (currentNode === undefined) {
                return false;
            }

            // If we find in middle or end of list, update previous node and exit
            if (currentNode.next === node) {
                currentNode.next = node.next;
                return true;
            }

            currentNode = currentNode.next;
        } while (currentNode instanceof SinglyLinkedListNode);

        return false;
    }

}

export default SinglyLinkedList;