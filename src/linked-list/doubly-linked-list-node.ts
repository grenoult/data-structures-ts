class DoublyLinkedListNode
{
    private _value: string;
    private _next: DoublyLinkedListNode;
    private _prev: DoublyLinkedListNode;

    public set value(value: string) {
        this._value = value;
    }

    public get value(): string {
        return this._value;
    }

    public set next(next: DoublyLinkedListNode) {
        this._next = next;
    }

    public get next(): DoublyLinkedListNode {
        return this._next;
    }

    public set prev(prev: DoublyLinkedListNode) {
        this._prev = prev;
    }

    public get prev(): DoublyLinkedListNode {
        return this._prev;
    }
}

export default DoublyLinkedListNode;