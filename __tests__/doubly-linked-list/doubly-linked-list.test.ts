import DoublyLinkedList from "../../src/linked-list/doubly-linked-list";

describe ('doubly linked lists: traversal', () => {
    const list = new DoublyLinkedList();
    
    beforeEach (() => {
        // Create list and add items
        list.add('a');
        list.add('b');
        list.add('c');
        list.add('d');
        list.add('e');
    });

    it ('traverse all nodes from head to tail', () => {
        expect(list.head.value).toEqual('a');
        expect(list.head.next.prev.value).toEqual('a');
        expect(list.head.next.value).toEqual('b');
        expect(list.head.next.next.prev.value).toEqual('b');
        expect(list.head.next.next.value).toEqual('c');
        expect(list.head.next.next.next.prev.value).toEqual('c');
        expect(list.head.next.next.next.value).toEqual('d');
        expect(list.head.next.next.next.next.prev.value).toEqual('d');
        expect(list.head.next.next.next.next.value).toEqual('e');
        expect(list.head.next.next.next.next.next).toBeUndefined();
    });

    it ('traverse all nodes from tail to head', () => {
        expect(list.head.next.next.next.next.prev.value).toEqual('d');
        expect(list.head.next.next.next.next.prev.prev.value).toEqual('c');
        expect(list.head.next.next.next.next.prev.prev.prev.value).toEqual('b');
        expect(list.head.next.next.next.next.prev.prev.prev.prev.value).toEqual('a');
        expect(list.head.next.next.next.next.prev.prev.prev.prev.prev).toBeUndefined();
    });
});

describe('doubly linked list: removal', () => {
    let list: DoublyLinkedList;

    beforeEach(() => {
        list = new DoublyLinkedList();
        // Create list and add items
        list.add('a');
        list.add('b');
        list.add('c');
        list.add('d');
        list.add('e');
    });

    it('remmove a node at beginning', () => {
        const aNode = list.search('a');

        expect(list.remove(aNode)).toBeTruthy();
        expect(list.head.prev).toBeUndefined();
        expect(list.head.value).toEqual('b');
        expect(list.head.next.value).toEqual('c');
        expect(list.head.next.next.value).toEqual('d');
        expect(list.head.next.next.next.value).toEqual('e');
        expect(list.head.next.next.next.next).toBeUndefined();
    });

    it('remove a node at the end', () => {
        const eNode = list.search('e');

        expect(list.remove(eNode)).toBeTruthy();
        expect(list.head.value).toEqual('a');
        expect(list.head.next.value).toEqual('b');
        expect(list.head.next.next.value).toEqual('c');
        expect(list.head.next.next.next.value).toEqual('d');
        expect(list.head.next.next.next.next).toBeUndefined();
    });

    it('remove a node in the middle', () => {
        const cNode = list.search('c');

        expect(list.remove(cNode)).toBeTruthy();
        expect(list.head.value).toEqual('a');
        expect(list.head.next.value).toEqual('b');
        expect(list.head.next.next.prev.value).toEqual('b');
        expect(list.head.next.next.value).toEqual('d');
        expect(list.head.next.next.next.value).toEqual('e');
        expect(list.head.next.next.next.next).toBeUndefined();
    });
});

describe('doubly linked list: add nodes', () => {
    let list: DoublyLinkedList;

    beforeEach(() => {
        list = new DoublyLinkedList();
        // Create list and add items
        list.add('a');
        list.add('b');
        list.add('c');
        list.add('d');
        list.add('e');
    });

    it('add node in middle of list', () => {
        const cNode = list.search('c');

        list.addAfter(cNode, 'c2');

        expect(list.head.value).toEqual('a');
        expect(list.head.next.value).toEqual('b');
        expect(list.head.next.next.value).toEqual('c');
        expect(list.head.next.next.next.value).toEqual('c2');
        expect(list.head.next.next.next.next.value).toEqual('d');
        expect(list.head.next.next.next.next.next.value).toEqual('e');
        expect(list.head.next.next.next.next.next.next).toBeUndefined();
    });

    it('add node in end of list', () => {
        const eNode = list.search('e');

        list.addAfter(eNode, 'e2');

        expect(list.tail.value).toEqual('e2');

        expect(list.head.value).toEqual('a');
        expect(list.head.next.value).toEqual('b');
        expect(list.head.next.next.value).toEqual('c');
        expect(list.head.next.next.next.value).toEqual('d');
        expect(list.head.next.next.next.next.value).toEqual('e');
        expect(list.head.next.next.next.next.next.value).toEqual('e2');
        expect(list.head.next.next.next.next.next.next).toBeUndefined();
    });

});


describe('doubly linked list: search', () => {
    let list: DoublyLinkedList;

    beforeEach(() => {
        list = new DoublyLinkedList();
        // Create list and add items
        list.add('a');
        list.add('b');
        list.add('c');
        list.add('d');
        list.add('e');
    });

    it('search first node', () => {
        const aNode = list.search('a');

        expect(aNode).toEqual(list.head);
    });

    it('search last node', () => {
        const eNode = list.search('e');

        expect(eNode).toEqual(list.tail);
    });

    it('search unknown node', () => {
        const unknownNode = list.search('f');

        expect(unknownNode).toBeNull()
    });

    it('search unknown node in empty list', () => {
        list = new DoublyLinkedList();
        const unknownNode = list.search('f');

        expect(unknownNode).toBeNull();
    });

});