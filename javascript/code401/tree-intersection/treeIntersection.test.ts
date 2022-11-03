import { treeIntersection } from "./treeIntersection";

const tree1 = {
  value: 150,
  left: {
    value: 100,
    left: { value: 75, left: undefined, right: undefined },
    right: {
      value: 160,
      left: { value: 125, left: undefined, right: undefined },
      right: { value: 175, left: undefined, right: undefined },
    },
  },
  right: {
    value: 250,
    left: { value: 200, left: undefined, right: undefined },
    right: {
      value: 350,
      left: { value: 300, left: undefined, right: undefined },
      right: { value: 500, left: undefined, right: undefined },
    },
  },
};

const tree2 = {
  value: 42,
  left: {
    value: 100,
    left: { value: 15, left: undefined, right: undefined },
    right: {
      value: 160,
      left: { value: 125, left: undefined, right: undefined },
      right: { value: 175, left: undefined, right: undefined },
    },
  },
  right: {
    value: 600,
    left: { value: 200, left: undefined, right: undefined },
    right: {
      value: 350,
      left: { value: 4, left: undefined, right: undefined },
      right: { value: 500, left: undefined, right: undefined },
    },
  },
};

test("tree intersection", () => {
  expect(treeIntersection(tree1, tree2)).toEqual([
    100, 125, 160, 175, 200, 350, 500,
  ]);
});
