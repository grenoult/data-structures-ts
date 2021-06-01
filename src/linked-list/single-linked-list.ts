import LinkedListInterface from "./linked-list-interface";
import SinglyLinkedListNode from "./singly-linked-list-node";

class SingleLinkedList implements LinkedListInterface
{
    private head: SinglyLinkedListNode;
    private tail: SinglyLinkedListNode;

    public add(value:string) {
        const newNode = new SinglyLinkedListNode();
        newNode.value = value;

        if (this.head === undefined) {
            this.head = newNode;
        } else {
            const previousTail = this.tail;
            previousTail.next = newNode;
        }

        this.tail = newNode; // TODO necessary?
    }

    public search(value:string) {
        let currentNode = this.head;

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
        let currentNode = this.head;

        do {
            // If we search on empty list, return false.
            // Or if we reach end of list, return false.
            if (currentNode === undefined) {
                return false;
            }

            // If we found the result, update previous node and exit
            if (currentNode.next === node) {
                currentNode.next = node.next;
                return true;
            }

            currentNode = currentNode.next;
        } while (currentNode instanceof SinglyLinkedListNode);

        return false;
    }

}

export default SingleLinkedList;