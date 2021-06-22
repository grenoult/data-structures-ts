class SinglyLinkedListNode
{
    private _value: any;
    private _next: SinglyLinkedListNode;

    public set value(value: any) {
        this._value = value;
    }

    public get value(): any {
        return this._value;
    }

    public set next(next: SinglyLinkedListNode) {
        this._next = next;
    }

    public get next(): SinglyLinkedListNode {
        return this._next;
    }
}

export default SinglyLinkedListNode;