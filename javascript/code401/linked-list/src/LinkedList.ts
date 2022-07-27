import { Collection, display } from "./Collection";

export class LinkedList<T> implements Collection<T> {
  // TODO
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
}
