class HashTable
{
    private _table: any[];

    /**
     * Adds value in table based on its key.
     * 
     * @param key Identifier of the value in table. TODO Must be unique untill collisions are managed.
     * @param value Value of any type to store in table.
     * @returns True on success. TODO update to void?
     */
    public add(key: string, value: any): boolean {
        const index = this.hashKey(key);

        this._table[index] = value;

        return true;
        // TODO manage collisions
    }

    /**
     * Find a value in hash table based on the key.
     * 
     * @param key 
     * @returns Value if found, undefined otherwise.
     */
    public find(key: string): any {
        const index = this.hashKey(key);

        if (key in this._table) {
            return this._table[index];
        }

        return undefined;
        // TODO manage collisions
    }

    /**
     * Remove an object from the table based on its key.
     * 
     * @param key Key of value to be removed
     * @returns boolean True if removed, false if not found.
     */
    public remove(key: string): boolean {
        const index = this.hashKey(key);

        if (key in this._table) {
            delete this._table[index];
            return true;
        }

        return false;
    }

    private hashKey(key: string): number {
        return 123;
    }
}

export default HashTable;