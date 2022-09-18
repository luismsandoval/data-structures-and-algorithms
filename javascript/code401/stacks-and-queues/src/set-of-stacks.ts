export class SetOfStacks<T> {
  
  constructor(private readonly maxHeight: number) {}

  stacks: Stack<T>[] = [];

  push(t: T): void {
    if (this.stacks.length === 0) {
      this.stacks.push(new Stack<T>(this.maxHeight));
    }
    let top = this.stacks.at(-1)!;
    if (top.size === this.maxHeight) {
      top = new Stack<T>(this.maxHeight);
      this.stacks.push(top);
    }
    top.push(t);
  }

  pop(): T {
    let top = this.stacks.at(-1);
    if (top) {
      let t = top.pop()!;
      if (top.size === 0) {
        this.stacks.pop();
      }
      return t;
    }
    return undefined;
  }

  get peek(): T {
    let top = this.stacks.at(-1);
    if (top) {
      return top.peek;
    }
    return undefined;
  }

  get size(): number {
    return this.stacks.reduce((c, s) => c + s.size, 0);
  }
}

class Stack<T> {
  readonly _arr: T[] = [];

  constructor(private readonly maxHeight: number) {}

  push(t: T) {
    if (this._arr.length > this.maxHeight) {
      throw new Error("Stack toppled over!");
    }
    this._arr.push(t);
  }

  pop() {
    return this._arr.pop();
  }

  get peek(): T | undefined {
    return this._arr.at(-1);
  }

  get size(): number {
    return this._arr.length;
  }
}
