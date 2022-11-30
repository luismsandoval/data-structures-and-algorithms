import { Graph, breadthFirst } from "./graph";

describe("graph", () => {
  const graph = new Graph();
  const b = graph.addNode("b");
  const c = graph.addNode("c");
  it("adds a Node to a graph", () => {
    expect(graph.addNode("a")).toEqual({ value: "a", edges: new Map() });
  });

  it("adds an edge", () => {
    graph.addEdge(b, c, true);
    expect(b.edges.get(c)).toBe(true);
  });

  it("gets all of the nodes", () => {
    expect(graph.getNodes().size).toBe(3);
  });

  it("gets all of the neighbors of a node", () => {
    expect(graph.neighbors(b).size).toEqual(1);
  });

  it("gets the size of the graph", () => {
    const d = graph.addNode("d");
    const e = graph.addNode("e");
    const f = graph.addNode("f");
    graph.addEdge(d, f, true);
    graph.addEdge(e, f, true);
    graph.addEdge(e, b, true);
    graph.addEdge(e, c, true);

    expect(graph.size()).toEqual(6);
  });

  it("bfs", () => {
    expect(breadthFirst(graph, b)).toEqual(["b", "e", "c", "f", "d"]);
  });
});
