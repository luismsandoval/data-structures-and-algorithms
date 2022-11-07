import { leftJoin } from './leftjoin';

const map1: Map<string, string> = new Map([
  ["diligent", "employed"],
  ["fond", "enamored"],
  ["guide", "usher"],
  ["outfit", "garb"],
  ["wrath", "anger"]
])

const map2: Map<string, string> = new Map([
  ["diligent", "idle"],
  ["fond", "averse"],
  ["guide", "follow"],
  ["flow", "jam"],
  ["wrath", "delight"],
])



test('leftJoin', () => {
  expect([...leftJoin(map1, map2)]).toEqual([
    ["diligent", ["employed", "idle"]],
    ["fond", ["enamored", "averse"]],
    ["guide", ["usher", "follow"]],
    ["outfit", ["garb", null]],
    ["wrath", ["anger", "delight"]]
  ]);
});
