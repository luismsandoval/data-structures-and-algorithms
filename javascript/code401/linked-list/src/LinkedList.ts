import { Collection, display } from "./Collection";

export class LinkedList<T> implements Collection<T> {
  start: Node<T> | undefined;

  insert(item: T) {
    const newNode = {
      item: item,
      next: this.start,
    };
    this.start = newNode;
  }

  includes(item: T): boolean {
    let tracker = this.start;
    while (tracker !== undefined) {
      if (tracker.item === item) {
        return true;
      }
      tracker = tracker.next;
    }
    return false;
  }

  toString(): string {
    let string = "";
    let tracker = this.start;

    while (tracker !== undefined) {
      const displayString = display(tracker.item);
      string += `{ ${tracker.item} } -> `;
      tracker = tracker.next;
    }
    string += "NULL";
    return string;
  }

  append(value: T): void {
    const newNode = {
      item: value,
      next: undefined,
    };
    let lastNode = this.start;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = newNode;
    }
  }

  insertBefore(needle: T, value: T) {
    let tracker = this.start;
    let found = false;
    while (tracker !== undefined) {
      // check for first node
      if (tracker.next?.item === needle && found === false) {
        found = true;
        let shiftedNode = tracker.next;
        const newNode = {
          item: value,
          next: shiftedNode,
        };
        tracker.next = newNode;
        // break;
      }
      tracker = tracker.next;
    }
  }

  insertAfter(needle: T, value: T) {
    let tracker = this.start;
    while (tracker !== undefined) {
      if (tracker.item === needle) {
        let shiftedNode = tracker.next;
        const newNode = {
          item: value,
          next: shiftedNode,
        };
        tracker.next = newNode;
      }
      tracker = tracker.next;
    }
  }
}

// A node tracks one item and the next node
interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}
