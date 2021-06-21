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
    });
})