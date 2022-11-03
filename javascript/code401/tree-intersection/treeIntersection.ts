export interface BinaryTreeNode<V> {
  value: V;
  left?: BinaryTreeNode<V>;
  right?: BinaryTreeNode<V>;
}

export function treeIntersection<V>(
  tree1: BinaryTreeNode<V>,
  tree2: BinaryTreeNode<V>
): V[] {
  const tree2Array = (tree: BinaryTreeNode<V>): V[] => {
    let left: any = [];
    let right: any = [];
    if (tree.left) {
      left = [...tree2Array(tree.left)];
    }
    if (tree.right) {
      right = [...tree2Array(tree.right)];
    }
    return [...left, tree.value, ...right];
  };

  const arr1: V[] = tree2Array(tree1);
  const arr2: V[] = tree2Array(tree2);

  const inBoth: V[] = [];

  for (let value of arr1) {
    if (arr2.includes(value) && !inBoth.includes(value)) {
      inBoth.push(value);
    }
  }
  console.log(inBoth);
  return inBoth;
}
