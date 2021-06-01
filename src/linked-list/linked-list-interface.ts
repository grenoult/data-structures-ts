import SinglyLinkedListNode from "./singly-linked-list-node";

interface LinkedListInterface
{
    search(value:string): SinglyLinkedListNode;
    add(value:string): void;
    remove(node: SinglyLinkedListNode): boolean;
}

export default LinkedListInterface;