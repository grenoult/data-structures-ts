# data-structures-ts
A playground with implementing data structures in TypeScript.
Each data structure usage can be found in unit tests.

## Linked lists
### Singly Linked Lists
The most simple implementation of linked list: each node in the list refers to the next node, until we reach the end of the list (tail node).

```
|----|----|  |----|----|  |----|----|  |----|
| 12 |  ---->| 99 |  ---->| 37 |  ---->|xxxx|
|----|----|  |----|----|  |----|----|  |----|
```

#### Implementation
* `src/linked-list/singly-linked-list.ts`: class `SinglyLinkedList ` containing references to head and tail nodes, along with `add`, `remove` and `search` functions.
* `src/linked-list/singly-linked-list-node.ts`: class `SinglyLinkedListNode` containg two properties: 
  * `value` holds node value,
  * `next` reference to the next node in the linked list.

#### Code coverage
`__tests__/singly-linked-list` contains unit tests for manipulation (add node, remove node) and traversal (search, go through item one by one).

#### Complexity
* Adding a node has a complexity of `1` because we simply update the tail in this implementation: we add at the end of the list.
* Searching and removing has a complexity of `n` where `n` is the number of items (length) in the list. We would need to go through list nodes until we find the one we are looking for.

## Hash Tables
Has tables are a powerful way to store and access data in a big array. Each element is represented by an identifier that is hashed into an index.
For example:
```
| Original var  | hash function |      table    |
|  Key  | Value |               | Index | Value |
| 'abc' | {...} | key -> index  |  123  | {...} |
```
### Difference with indexed array
In JavaScript, we actually don't have indexed array: we have objects instead.
For example: `myVar['abc'] === myVar.abc`. 

It comes with its drawbacks, for example not knowing the length of the object natively (up to ES5, see below for more information). 

### Difference with dictionary
From this [answer](https://stackoverflow.com/a/2061406/1145134):

A dictionary is a general concept that maps keys to values. There are many ways to implement such a mapping.
A hashtable is a specific way to implement a dictionary.
Besides hashtables, another common way to implement dictionaries is red-black trees.

### Thoughts
* `src/hash-table/hash-table.ts` is a very basic hash table implementation. It doesn't handle collisions well and overwrite previous items. 
* `src/hash-table/hash-table-separate-chaining.ts` fixes this collision with linked lists: each items in a the array will have a linked list which would be of one item most of the item. If a collision appear, then we can store another elements in this linked list and identify them by the key provided. For example, keys `Abc` and `Abcd` have the same index `62`.
```
|  Index  |         List Item 1         |          List Item 2        |
|  -----  |  -------------------------  |  -------------------------  |
|    1    |                             |                             |
|   ...   |                             |                             |
|   48    | {key: 'test', value: '...'} |                             |
|   ...   |                             |                             |
|   62    | {key: 'Abc', value: '...'}  | {key: 'Abcd', value: '...'} | <- Collision
```
* Time and space complexity (worst case) for Hash Table (no collision management)

Operation | Time Complexity | Comment
--- | --- | ---
Insert | O(1) | Insert in list. If collision, we overwrite.
Find | O(1) | Identify if index exists and returns it.
Remove | O(1) | Identify if index exists and removes it.

Space complexity: O(n) because each node will occupy O(1) space.

* Time and space complexity (worst case) for Hash Table with separate chaining

[Good article](https://stepik.org/lesson/31445/step/7)

Operation | Time Complexity | Comment
--- | --- | ---
Insert | O(n) | All keys have the same index (collision), so we have to loop through the linked list items
Find | O(n) | All keys have the same index (collision), so we have to loop through the linked list items
Remove | O(n) | All keys have the same index (collision), so we have to loop through the linked list items

Space complexity: O(n) because each node will occupy O(1) space.

* Other collision resolution techniques:
  * Separate chaining with linked list (done in `src/hash-table/hash-table-separate-chaining.ts`), with head cells (TODO research) and with a dynamic array
  * Open addressing: if a slot is already used, try next one (linear probing).

* In summary: it's great to know and study, but JavaScript (with objects) and PHP (with indexed arrays) cover most of usages of a Hash Table:
  * Even in JavaScript we can use `var size = Object.keys(myObj).length;` with ES6+ to count how many keys an object has, so the behaviour is very close to an array.
  * If we need to manage collisions, then we can probably implement our own version of hash maps but it would be simpler than the versions done here: it would be centralised around collision only, and we can use objects for storage.