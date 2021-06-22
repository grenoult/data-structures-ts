import SinglyLinkedListNode from "../linked-list/singly-linked-list-node";

class HashTableSeparateChaining
{
    private _table: any[] = [];

    /**
     * Adds value in table based on its key.
     * 
     * @param key Identifier of the value in table. TODO Must be unique untill collisions are managed.
     * @param value Value of any type to store in table.
     * @returns True on success. TODO update to void?
     */
    public add(key: string, value: any): boolean {
        const index = HashTableSeparateChaining.hashKey(key);

        const linkedListItem = new SinglyLinkedListNode();
        linkedListItem.value = {key: key, value: value};

        if (this._table[index] instanceof SinglyLinkedListNode) {
            // If already value, add item to end of list
            let node = this._table[index];
            while (node instanceof SinglyLinkedListNode) {
                if (node.value.key === key) {
                    // We detected the key (before hash) is already used. Return false.
                    return false;
                }
                node = node.next;
            }
            node.next = linkedListItem;
        } else {
            // If index is not used yet, add node
            this._table[index] = linkedListItem;
        }
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
        if (index in this._table) {
            return this._table[index];
        }

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

        if (index in this._table) {
            delete this._table[index];
            return true;
        }

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