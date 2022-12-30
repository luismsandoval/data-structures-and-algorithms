export const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
};

const merge = (left: number[], right: number[]): number[] => {
  let i = 0;
  let j = 0;
  let merged = [];

  while (left.length > i && right.length > j) {
    if (right[j] > left[i]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }
  return merged.concat(left.slice(i)).concat(right.slice(j));
};
