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

### Thoughts
* `src/hash-table/hash-table.ts` is a very basic hash table implementation. It doesn't handle collisions well and overwrite previous items. 
We can use `var size = Object.keys(myObj).length;` with ES6+.