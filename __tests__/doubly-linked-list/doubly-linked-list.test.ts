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
        expect(list.head.next.value).toEqual('b');
        expect(list.head.next.next.value).toEqual('c');
        expect(list.head.next.next.next.value).toEqual('d');
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
    const list = new DoublyLinkedList();

    beforeEach(() => {
        // Create list and add items
        list.add('a');
        list.add('b');
        list.add('c');
        list.add('d');
        list.add('e');
    });

    it('remmove a node at beginning', () => {
        expect(list.remove('a')).toBeTruthy();
        expect(list.head.value).toEqual('b');
        expect(list.head.next.value).toEqual('c');
        expect(list.head.next.next.value).toEqual('d');
        expect(list.head.next.next.next.value).toEqual('e');
        expect(list.head.next.next.next.next).toBeUndefined();
    });

    it('remove a node at the end', () => {
        expect(list.remove('e')).toBeTruthy();
        expect(list.head.value).toEqual('a');
        expect(list.head.next.value).toEqual('b');
        expect(list.head.next.next.value).toEqual('c');
        expect(list.head.next.next.next.value).toEqual('d');
        expect(list.head.next.next.next.next).toBeUndefined();
    });

    it('remove a node at the niddle', () => {
        expect(list.remove('c')).toBeTruthy();
        expect(list.head.value).toEqual('a');
        expect(list.head.next.value).toEqual('b');
        expect(list.head.next.next.value).toEqual('d');
        expect(list.head.next.next.next.value).toEqual('e');
        expect(list.head.next.next.next.next).toBeUndefined();
    });
});