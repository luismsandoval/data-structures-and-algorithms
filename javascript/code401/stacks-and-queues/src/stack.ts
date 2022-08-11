export class Stack<T> {
  head: Node<T> | undefined;

  get size(): number {
    let count = 0;
    let current = this.head;
    while (current !== undefined) {
      count++;
      current = current.next;
    }
    return count;
  }

  get peek(): T {
    let current = this.head;
    if (current !== undefined) {
      return current?.item;
    }
    throw new Error("undefined");
  }

  push(t: T): void {
    const newNode = {
      item: t,
      next: this.head,
    };
    this.head = newNode;
  }

  pop(): T {
    if (this.head === undefined) {
      throw new Error();
    }

    let current = this.head;
    this.head = current.next;
    return current.item;
  }
}

interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}
