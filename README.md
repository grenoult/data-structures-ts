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
* Adding a node has a complexity of `O(1)` because we simply update the tail in this implementation: we add at the end of the list.
* Searching and removing has a complexity of `O(n)` where `n` is the number of items (length) in the list. We would need to go through list nodes until we find the one we are looking for.

### Doubly Linked Lists
Each node in the list refers to the next and previous node.

```
|----|----|  |----|----|  |----|----|  |----|----|  |----|
|head|  ---->| 12 |  ---->| 99 |  ---->| 37 |  ---->|tail|
|head|    |<----  |    |<----  |    |<----  |    |<----  |
|----|----|  |----|----|  |----|----|  |----|----|  |----|
```

#### Implementation
* `src/linked-list/doubly-linked-list.ts`: class `DoublyLinkedList ` containing references to head and tail nodes, along with `add`, `addAfter`, `remove` and `search` functions.
* `src/linked-list/doubly-linked-list-node.ts`: class `SinglyLinkedListNode` containg two properties: 
  * `value` holds node value,
  * `next` reference to the next node in the linked list.
  * `prev` reference to the previous node in the linked list.

#### Code coverage
`__tests__/doubly-linked-list` contains unit tests for manipulation (add node, remove node) and traversal (search, go through item one by one).

#### Complexity
* Adding a node has a complexity of `O(1)` because we simply update the tail in this implementation: we add at the end of the list.
* Adding a node after another node also has a complexity of `O(1)` because we simply update head of previous node, tail of next node, and add the new node in between.
* Searching has a complexity of `O(n)` where `n` is the number of items (length) in the list. We would need to go through list nodes until we find the one we are looking for.