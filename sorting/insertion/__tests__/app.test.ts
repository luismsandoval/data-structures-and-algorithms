const { insertionSort } = require("../app");

describe("sorting", () => {
  it("sorts", () => {
    const arr = [8, 4, 23, 42, 16, 15];
    const reverse = [20, 18, 12, 8, 5, -2];
    const few = [5, 12, 7, 5, 5, 7];
    const nearly = [2, 3, 5, 7, 13, 11];

    expect(insertionSort(arr)).toStrictEqual([4, 8, 15, 16, 23, 42]);
    expect(insertionSort(reverse)).toStrictEqual([-2, 5, 8, 12, 18, 20]);
    expect(insertionSort(few)).toStrictEqual([5, 5, 5, 7, 7, 12]);
    expect(insertionSort(nearly)).toStrictEqual([2, 3, 5, 7, 11, 13]);
  });

  // it("throws an error", () => {
  //   const arr = 7;
  //   expect(insertionSort(arr)).toThrowError();
  // });
});
