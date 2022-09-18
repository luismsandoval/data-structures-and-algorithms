import { bracketParser } from "./stack-queue-brackets";

describe("bracket Parse", () => {
  it("returns true", () => {
    const input = "[()]";
    const input2 = "[](Hello){curly}";

    const result = bracketParser(input);
    const result2 = bracketParser(input2);

    expect(result).toBe(true);
    expect(result2).toBe(true);
  });
});
