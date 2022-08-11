import { Queue } from "./queue";

describe("Queue", () => {
  it("can enqueue", () => {
    const q = new Queue<string>();

    expect(() => q.enqueue("Frodo")).not.toThrow();
  });

  it("enqueues", () => {
    const q = new Queue<string>();

    q.enqueue("Frodo");
    q.enqueue("Sam");

    expect(q.size).toBe(2);
    expect(q.peek).toBe("Frodo");
  });

  it("dequeues", () => {
    const q = new Queue<string>();

    q.enqueue("Frodo");
    q.enqueue("Sam");
    q.dequeue();

    expect(q.size).toBe(1);
    expect(q.peek).toBe("Sam");
  });

  it("dequeues until empty", () => {
    const q = new Queue<string>();

    q.enqueue("Frodo");
    q.enqueue("Sam");
    q.dequeue();
    q.dequeue();

    expect(q.size).toBe(0);
  });
});
