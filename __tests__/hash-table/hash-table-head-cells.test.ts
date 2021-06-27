import HashTableHeadCells from "../../src/hash-table/hash-table-head-cells";

describe('hash table with head cells for collision detection', () => {
    it('Add, retrieve and remove element', () => {
        const myObj = { id: 123, title: 'test' }; // Object to store in hash table
        const myObjKey = 'myObj'; // string to identify object in hash table

        const hashTable = new HashTableHeadCells();

        // Test adding
        expect(hashTable.add(myObjKey, myObj)).toBeTruthy();
        expect(hashTable.add(myObjKey, myObj)).toBeFalsy(); // Can't add the same item twice because key (before) is already used

        // Test retrieving
        expect(hashTable.find(myObjKey)).toEqual(myObj);
        expect(hashTable.find('invalid key')).toBeUndefined();

        // Test removing
        expect(hashTable.remove('invalid key')).toBeFalsy();
        expect(hashTable.remove(myObjKey)).toBeTruthy();
        expect(hashTable.find(myObjKey)).toBeUndefined();
        expect(hashTable.remove(myObjKey)).toBeFalsy();
    });


    it('Add, retrieve and remove 5 elements', () => {
        const hashTable = new HashTableHeadCells();

        // Test adding
        expect(hashTable.add('a', 'var1')).toBeTruthy();
        expect(hashTable.add('b', 'var2')).toBeTruthy();
        expect(hashTable.add('c', 'var3')).toBeTruthy();
        expect(hashTable.add('d', 'var4')).toBeTruthy();
        expect(hashTable.add('e', 'var5')).toBeTruthy();

        // Test retrieving
        expect(hashTable.find('e')).toEqual('var5');
        expect(hashTable.find('d')).toEqual('var4');
        expect(hashTable.find('a')).toEqual('var1');
        expect(hashTable.find('b')).toEqual('var2');
        expect(hashTable.find('c')).toEqual('var3');

        // Test removing last item
        expect(hashTable.remove('e')).toBeTruthy();
        expect(hashTable.find('e')).toBeUndefined();
        expect(hashTable.remove('e')).toBeFalsy();
        expect(hashTable.find('d')).toEqual('var4');
        expect(hashTable.find('a')).toEqual('var1');
        expect(hashTable.find('b')).toEqual('var2');
        expect(hashTable.find('c')).toEqual('var3');

        // Test removing first item
        expect(hashTable.remove('a')).toBeTruthy();
        expect(hashTable.find('a')).toBeUndefined();
        expect(hashTable.remove('a')).toBeFalsy();
        expect(hashTable.remove('e')).toBeFalsy();
        expect(hashTable.find('d')).toEqual('var4');
        expect(hashTable.find('b')).toEqual('var2');
        expect(hashTable.find('c')).toEqual('var3');
    });

    it('Test collision', () => {
        const obj1 = { id: 123, title: 'test' };
        const obj1Key = 'Abc';

        const obj2 = { id: 456, title: 'test2' };
        const obj2Key = 'Abcd';

        const hashTable = new HashTableHeadCells();

        expect(hashTable.add(obj1Key, obj1)).toBeTruthy();
        expect(hashTable.add(obj2Key, obj2)).toBeTruthy();

        expect(hashTable.find(obj1Key)).toEqual(obj1);
        expect(hashTable.find(obj2Key)).toEqual(obj2);

        expect(hashTable.remove(obj2Key)).toBeTruthy();
        expect(hashTable.remove(obj1Key)).toBeTruthy();

    });
})