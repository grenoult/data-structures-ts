class SinglyLinkedListNode
{
    private _value: string;
    private _next: SinglyLinkedListNode;

    public set value(value: string) {
        this._value = value;
    }

    public get value() {
        return this._value;
    }

    public set next(next: SinglyLinkedListNode) {
        this._next = next;
    }

    public get next() {
        return this._next;
    }
}

export default SinglyLinkedListNode;