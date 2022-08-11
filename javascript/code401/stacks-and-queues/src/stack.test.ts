import { Stack } from "./stack";

describe("Stack", () => {
  it("can push", () => {
    const s = new Stack<string>();

    expect(() => s.push("Frodo")).not.toThrow();
  });

  it("pushes", () => {
    const s = new Stack<string>();

    s.push("Frodo");
    s.push("Sam");

    expect(s.size).toBe(2);
    expect(s.peek).toBe("Sam");
  });

  it("pops", () => {
    const s = new Stack<string>();

    s.push("Frodo");
    s.push("Sam");
    s.pop();

    expect(s.size).toBe(1);
    expect(s.peek).toBe("Frodo");
  });

  it("pops until empty", () => {
    const s = new Stack<string>();

    s.push("Frodo");
    s.push("Sam");
    s.pop();
    s.pop();

    expect(s.size).toBe(0);
  });
});
