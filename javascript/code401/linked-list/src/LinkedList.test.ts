import { Collection } from "./Collection";
import { LinkedList } from "./LinkedList";

describe("linked list", () => {
  it("instantiates an empty linked list", () => {
    const list: Collection<string> = new LinkedList<string>();
    expect(list).toBeDefined();
  });

  it("inserts into linked list, returns true when finding a value within the list", () => {
    const list: Collection<string> = new LinkedList<string>();

    list.insert("Test 1");
    list.insert("Test 2");

    expect(list.includes("Test 1")).toBe(true);
  });

  it("returns false when searching for a value does not exist", () => {
    const list: Collection<string> = new LinkedList<string>();

    expect(list.includes("Test 3")).toBe(false);
  });

  it("returns a collection of all the values in the list", () => {
    const list: Collection<string> = new LinkedList<string>();

    list.insert("Test 1");
    list.insert("Test 2");
    list.insert("Test 3");

    expect(list.toString()).toEqual(
      "{ Test 3 } -> { Test 2 } -> { Test 1 } -> NULL"
    );
  });
});
