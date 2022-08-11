export class Queue<T> {
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

  enqueue(t: T): void {
    if (this.head === undefined) {
      const newNode = {
        item: t,
        next: this.head,
      };
      this.head = newNode;
    } else {
      const newNode = {
        item: t,
        next: undefined,
      };
      let lastNode = this.head;
      if (lastNode) {
        while (lastNode.next) {
          lastNode = lastNode.next;
        }
        lastNode.next = newNode;
      }
    }
  }

  dequeue(): T {
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
