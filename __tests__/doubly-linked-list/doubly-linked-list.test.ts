

describe ('doubly linked lists', () => {
    const list: DoublyLinkedList;
    
    beforeEach (() => {
        // Create list and add items
        list = new DoublyLinkedList();
        
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