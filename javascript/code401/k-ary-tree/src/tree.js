class Tree {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }

  addChild(tree) {
    this.children.push(tree);
  }

  preOrder() {
    return [
      this.value,
      ...this.children.map((child) => child.preOrder()).flat(),
    ];
  }
}

function fizzBuzz(tree) {
  if (!tree) return null;
  const newTree = new Tree(tree.value, tree.children);

  if (newTree.value % 3 === 0 && newTree.value % 5 === 0) {
    newTree.value = "fizzbuzz";
  }
  if (newTree.value % 5 === 0 && newTree.value % 3 !== 0) {
    newTree.value = "buzz";
  }
  if (newTree.value % 3 === 0 && newTree.value % 5 !== 0) {
    newTree.value = "fizz";
  }
  newTree.children = tree.children.map(fizzBuzz);
  return newTree;
}

module.exports = {
  Tree,
  fizzBuzz,
};
