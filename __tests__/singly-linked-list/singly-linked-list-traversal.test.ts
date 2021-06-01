import SingleLinkedList from "../../src/linked-list/single-linked-list";

describe('singly linked list traversal', () => {
    let singleLinkedList: SingleLinkedList;

    beforeEach(() => {
        singleLinkedList = new SingleLinkedList();

        // Add list with Nodes: 'a', 'b' and 'c'
        singleLinkedList.add('a');
        singleLinkedList.add('b');
        singleLinkedList.add('c');

        expect(singleLinkedList.head.value).toEqual('a');
        expect(singleLinkedList.head.next.value).toEqual('b');
        expect(singleLinkedList.head.next.next.value).toEqual('c');  // This is the tail
        expect(singleLinkedList.head.next.next.next).toBeUndefined();
    });

    it('traverse list with removal in middle of list', () => {
        // Node removal
        const bNode = singleLinkedList.search('b');
        expect(singleLinkedList.remove(bNode)).toBeTruthy();

        // Check we have the right list now
        expect(singleLinkedList.head.value).toEqual('a');
        expect(singleLinkedList.head.next.value).toEqual('c'); // This is the tail
        expect(singleLinkedList.head.next.next).toBeUndefined(); 
    });

    it('traverse list with removal at beginning of list', () => {
        // Node removal
        const aNode = singleLinkedList.search('a');
        expect(singleLinkedList.remove(aNode)).toBeTruthy();

        // Check we have the right list now
        expect(singleLinkedList.head.value).toEqual('b');
        expect(singleLinkedList.head.next.value).toEqual('c');
        expect(singleLinkedList.head.next.next).toBeUndefined();  // This is the tail
    });

    it('traverse list with removal at end of list', () => {
        // Node removal
        const cNode = singleLinkedList.search('c');
        expect(singleLinkedList.remove(cNode)).toBeTruthy();

        // Check we have the right list now
        expect(singleLinkedList.head.value).toEqual('a');
        expect(singleLinkedList.head.next.value).toEqual('b');
        expect(singleLinkedList.head.next.next).toBeUndefined();  // This is the tail
    });
})