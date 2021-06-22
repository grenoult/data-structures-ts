import HashTable from "../../src/hash-table/hash-table";

describe('hash table', () => {
    it('Add, retrieve and remove element', () => {
        const myObj = {id: 123, title: 'test'}; // Object to store in hash table
        const myObjKey = 'myObj'; // string to identify object in hash table

        let hashTable = new HashTable();

        // Test adding
        expect(hashTable.add(myObjKey, myObj)).toBeTruthy();

        // Test retrieving
        expect(hashTable.find(myObjKey)).toEqual(myObj);

        // Test removing
        expect(hashTable.remove(myObjKey)).toBeTruthy();
        expect(hashTable.find(myObjKey)).toBeUndefined();
        expect(hashTable.remove(myObjKey)).toBeFalsy();
    });

    it('Test hash function', () => {
        expect(HashTable.hashKey('test')).toEqual(48);
        expect(HashTable.hashKey('hashmap')).toEqual(38);
        expect(HashTable.hashKey('Abc')).toEqual(62);
        expect(HashTable.hashKey('Abcd')).toEqual(62); // Collision. Not handled well here, see below.
    });

    it('Test collision', () => {
        const obj1 = { id: 123, title: 'test' };
        const obj1Key = 'Abc';

        const obj2 = { id: 456, title: 'test2' };
        const obj2Key = 'Abcd';

        let hashTable = new HashTable();

        hashTable.add(obj1Key, obj1);
        hashTable.add(obj2Key, obj2);

        // Collision are not handled in this implementation of Hash Table.
        // If there's a collision, it will overwrite the previous value. See README for more details.
        expect(hashTable.find(obj1Key)).toEqual(obj2);
        expect(hashTable.find(obj2Key)).toEqual(obj2);

    });
})