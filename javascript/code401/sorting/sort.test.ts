import { mergeSort } from "./sort";

describe("merge", () => {
  const arr: number[] = [8, 4, 23, 42, 16, 15];

  it("can merge sort", () => {
    expect(mergeSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
