import HashTableSeparateChaining from "../../src/hash-table/hash-table-separate-chaining";

describe('hash table with separate chaining for collision detection', () => {
    it('Add, retrieve and remove element', () => {
        const myObj = {id: 123, title: 'test'}; // Object to store in hash table
        const myObjKey = 'myObj'; // string to identify object in hash table

        let hashTable = new HashTableSeparateChaining();

        // Test adding
        expect(hashTable.add(myObjKey, myObj)).toBeTruthy();
        expect(hashTable.add(myObjKey, myObj)).toBeFalsy(); // Can't add the same item twice because key (before) is already used

        // Test retrieving
        // expect(hashTable.find(myObjKey)).toEqual(myObj);

        // Test removing
        // expect(hashTable.remove(myObjKey)).toBeTruthy();
        // expect(hashTable.find(myObjKey)).toBeUndefined();
        // expect(hashTable.remove(myObjKey)).toBeFalsy();
    });

    // it('Test hash function', () => {
    //     expect(HashTableSeparateChaining.hashKey('test')).toEqual(48);
    //     expect(HashTableSeparateChaining.hashKey('hashmap')).toEqual(38);
    //     expect(HashTableSeparateChaining.hashKey('Abc')).toEqual(62);
    //     expect(HashTableSeparateChaining.hashKey('Abcd')).toEqual(62);
    // });

    // it('Test collision', () => {
    //     const obj1 = { id: 123, title: 'test' };
    //     const obj1Key = 'Abc';

    //     const obj2 = { id: 456, title: 'test2' };
    //     const obj2Key = 'Abcd';

    //     let hashTable = new HashTableSeparateChaining();

    //     hashTable.add(obj1Key, obj1);
    //     hashTable.add(obj2Key, obj2);

    //     expect(hashTable.find(obj1Key)).toEqual(obj1Key);
    //     expect(hashTable.find(obj2Key)).toEqual(obj2Key);

    // });
})