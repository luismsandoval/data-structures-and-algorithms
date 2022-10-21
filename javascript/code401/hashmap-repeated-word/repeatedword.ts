export const repeatedWord = (str: string): string | void => {
  let words = str.split(/\W+/);
  let map = new Map();

  for (const word of words) {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
      return word;
    } else {
      map.set(word, 1);
    }
  }
};
