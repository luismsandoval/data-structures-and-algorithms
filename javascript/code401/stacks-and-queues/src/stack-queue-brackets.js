function bracketParser(string) {
  let bracketStack = [];

  const characters = string.split("");
  console.log(characters);
  const openingToClosing = {
    "[": "]",
    "(": ")",
    "{": "}",
  };

  for (const char of characters) {
    const opening = /[[{(]/gm.test(char);
    const closing = /[\]})]/gm.test(char);

    if (opening) {
      bracketStack.push(openingToClosing[char]);
      continue;
    }
    if (closing) {
      if (char === bracketStack[bracketStack.length-1]) {
        bracketStack.pop();
        continue;
      }
      return false;
    }
  }
  return true;
}

module.exports = {
  bracketParser,
};
