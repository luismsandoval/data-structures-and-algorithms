import { SetOfStacks } from "./set-of-stacks";

describe("SetOfStacks", () => {
  it("peeks and pops", () => {
    const stack = new SetOfStacks(3);

    stack.push("Frodo");
    stack.push("Sam");
    stack.push("Merry");
    stack.push("Pippin");

    expect(stack.peek).toBe("Pippin");

    stack.pop();
    
    expect(stack.peek).toBe("Merry");
  });

  // BONUS QUESTION (2 points)
  it.skip("tracks total size", () => {
    const stack = new SetOfStacks(3);

    expect(stack.size).toBe(0);

    stack.push("Frodo");
    stack.push("Sam");
    stack.push("Merry");
    stack.push("Pippin");

    expect(stack.size).toBe(4);

    stack.pop();

    expect(stack.size).toBe(3);
  });
});
