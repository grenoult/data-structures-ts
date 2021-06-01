import SinglyLinkedListNode from "../../src/linked-list/singly-linked-list-node";
import SingleLinkedList from "../../src/linked-list/single-linked-list";

describe('singly linked list manipulation', () => {
    it('create list, add and remove nodes', () => {
        const singleLinkedList = new SingleLinkedList();

        // Add list with Nodes: 'a', 'b' and 'c'
        singleLinkedList.add('a');
        singleLinkedList.add('b');
        singleLinkedList.add('c');

        // Search existing node
        const bNode = singleLinkedList.search('b');
        expect(bNode).toBeInstanceOf(SinglyLinkedListNode);
        expect(bNode.value).toEqual('b');

        // Search non existing node
        const unknownNode = singleLinkedList.search('d');
        expect(unknownNode).toBeNull();

        // Remove node
        singleLinkedList.remove(bNode);
        expect(singleLinkedList.search('b')).toBeNull();
    });

    it('search empty list', () => {
        const singleLinkedList = new SingleLinkedList();

        // Search non existing node on empty list
        const unknownNode = singleLinkedList.search('d');
        expect(unknownNode).toBeNull();
    });

    it('remove from empty list', () => {
        const singleLinkedList = new SingleLinkedList();
        const bNode = new SinglyLinkedListNode();
        bNode.value = 'd';

        // Search and remove non existing node on empty list
        const unknownNode = singleLinkedList.remove(bNode);
        expect(unknownNode).toBeFalsy();
    });

    it('remove unknow node from non-empty list', () => {
        const singleLinkedList = new SingleLinkedList();
        singleLinkedList.add('a');

        const bNode = new SinglyLinkedListNode();
        bNode.value = 'd';

        // Search and remove non existing node on empty list
        const unknownNode = singleLinkedList.remove(bNode);
        expect(unknownNode).toBeFalsy();
    });
})