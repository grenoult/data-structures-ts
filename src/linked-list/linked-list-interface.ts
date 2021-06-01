import SinglyLinkedListNode from "./singly-linked-list-node";

interface LinkedListInterface
{
    readonly head: SinglyLinkedListNode;
    search(value:string): SinglyLinkedListNode;
    add(value:string): void;
    remove(node: SinglyLinkedListNode): boolean;
}

export default LinkedListInterface;