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
      if (tracker.item === needle && found === false) {
        found = true;
        let shiftedNode = tracker;
        const newNode = {
          item: value,
          next: shiftedNode,
        };
        this.start = newNode;
      }

      if (tracker.next?.item === needle && found === false) {
        found = true;
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

  kthFromEnd(k: number) {
    if (k < 0) {
      throw "k must be positive";
    }
    let tracker = this.start;
    let count = 0;
    tracker = this.start;
    while (tracker !== undefined) {
      count++;
      tracker = tracker.next;
    }
    tracker = this.start;
    count -= 1;
    if (k >= count) {
      throw "list too long";
    }
    while (tracker !== undefined) {
      if (count === k) {
        return tracker.item;
      }
      count--;
      tracker = tracker.next;
    }
  }

  static zip<T>(ll1: LinkedList<T>, ll2: LinkedList<T>): LinkedList<T> {
    const zipped = new LinkedList<T>();

    let track1 = ll1.start;
    let track2 = ll2.start;
    console.log(track1?.next, track2?.item);
    while (track1?.next !== undefined || track2?.next !== undefined) {
      if (track1?.item !== undefined) {
        zipped.append(track1.item);
        track1 = track1.next;
      }
      if (track2?.item !== undefined) {
        zipped.append(track2.item);
        track2 = track2.next;
      }
    }
    return zipped;
  }
}

// A node tracks one item and the next node
interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}
