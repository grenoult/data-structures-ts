import SinglyLinkedListNode from "../src/linked-list/singly-linked-list-node";
import SingleLinkedList from "../src/linked-list/single-linked-list";


describe('singly linked list', () => {
    it ('create list, add and remove nodes', () => {
        const singleLinkedList = new SingleLinkedList();

        // Add list with Nodes: 'a', 'b' and 'c'
        singleLinkedList.add('a');
        singleLinkedList.add('b');
        singleLinkedList.add('c');

        // Search existing node
        const bNode = singleLinkedList.search('b');
        expect(bNode).toBeInstanceOf(SinglyLinkedListNode);
        expect(bNode.key).toEqual('b');

        // Search non existing node
        const unknownNode = singleLinkedList.search('d');
        expect(unknownNode).toBeNull();

        // Remove node
        singleLinkedList.remove('b');
        expect(singleLinkedList.search('b')).toBeNull();
    });
})