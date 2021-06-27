import SinglyLinkedList from "../linked-list/singly-linked-list";
import SinglyLinkedListNode from "../linked-list/singly-linked-list-node";

class HashTableSeparateChaining
{
    private _table: any[] = [];

    /**
     * Adds value in table based on its key.
     * 
     * @param key Identifier of the value in table.
     * @param value Value of any type to store in table.
     * @returns True on success.
     */
    public add(key: string, value: any): boolean {
        const index = HashTableSeparateChaining.hashKey(key);
        let linkedList = new SinglyLinkedList();

        // Create linked list if it doesn't exist yet
        if (this._table[index] instanceof SinglyLinkedList) {
            linkedList = this._table[index];
        } else {
            this._table[index] = linkedList;
        }

        // Add item to end of list
        let node = linkedList.head;
        while (node instanceof SinglyLinkedListNode) {
            // First, search if key is already existing to avoid a second level collision
            if (node.value.key === key) {
                // We detected the key (before hash) is already used. Return false.
                return false;
            }
            node = node.next;
        }

        // Add to last item of the list
        linkedList.add({ key: key, value: value });

        return true;
    }

    /**
     * Find a value in hash table based on the key.
     * 
     * @param key 
     * @returns Value if found, undefined otherwise.
     */
    public find(key: string): any {
        const index = HashTableSeparateChaining.hashKey(key);

        if (!(index in this._table)) {
            // This index is not used
            return undefined;
        }
        // Index exists: let's go through linked list nodes to find item
        let list = this._table[index];

        if (!(list instanceof SinglyLinkedList)) {
            // This index is not used
            return undefined;
        }

        let node = list.head;

        while (node instanceof SinglyLinkedListNode) {
            if (node.value.key === key) {
                // We found matching key, we return value;
                return node.value.value;
            }
            node = node.next;
        }

        // We looped through the list but we couldn't find the key
        return undefined;
    }

    /**
     * Remove an object from the table based on its key.
     * 
     * @param key Key of value to be removed
     * @returns boolean True if removed, false if not found.
     */
    public remove(key: string): boolean {
        const index = HashTableSeparateChaining.hashKey(key);

        if (!(index in this._table)) {
            // This index is not used
            return undefined;
        }
        // Index exists: let's go through linked list nodes to find item
        let list = this._table[index];

        if (!(list instanceof SinglyLinkedList)) {
            // This index is not used
            return undefined;
        }

        // Index exists: let's go through linked list nodes to find item
        let node = list.head;
        while (node instanceof SinglyLinkedListNode) {
            if (node.value.key === key) {
                list.remove(node);
                return true;
            }

            // Item not found, let's go to the next node in the linked list
            node = node.next;
        }

        // Item not found in the list, return false;
        return false;
    }

    static hashKey(key: string): number {
        // For simplicity, we assume array can contain up to 100 elements.
        // If we want more than 100 elements, we would need to rehash the array: https://en.wikipedia.org/wiki/Hash_table#Dynamic_resizing
        const maxSize = 100;

        let sum = 0;

        for (let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i);
        }

        return sum%maxSize;
    }
}

export default HashTableSeparateChaining;