import { repeatedWord } from "./repeatedword";

const words = "Once upon a time, there was a brave princess who...";

test("repeatword", () => {
  expect(repeatedWord(words)).toBe("a");
})
