/**
 * Basic implementation of Hash Table.
 * See README.md file for more details.
 * This doesn't handle collisions well (overwrite)
 */
class HashTable
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
        const index = HashTable.hashKey(key);

        this._table[index] = value;

        return true;
    }

    /**
     * Find a value in hash table based on the key.
     * 
     * @param key 
     * @returns Value if found, undefined otherwise.
     */
    public find(key: string): any {
        const index = HashTable.hashKey(key);
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
        const index = HashTable.hashKey(key);

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

export default HashTable;