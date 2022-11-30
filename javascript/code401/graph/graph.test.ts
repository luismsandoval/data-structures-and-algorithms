import { Graph, breadthFirst, businessTrip } from "./graph";

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

  it("business trip", () => {
    const busGraph = new Graph();
    const metroville = busGraph.addNode("metroville");
    const pandora = busGraph.addNode("pandora");
    const arendelle = busGraph.addNode("arendelle");
    const monst = busGraph.addNode("monstropolis");
    const narnia = busGraph.addNode("narnia");
    const naboo = busGraph.addNode("naboo");

    busGraph.addEdge(pandora, arendelle, 150);
    busGraph.addEdge(pandora, metroville, 82);
    busGraph.addEdge(arendelle, metroville, 99);
    busGraph.addEdge(arendelle, monst, 42);
    busGraph.addEdge(metroville, monst, 105);
    busGraph.addEdge(metroville, narnia, 37);
    busGraph.addEdge(metroville, naboo, 26);
    busGraph.addEdge(monst, naboo, 73);
    busGraph.addEdge(naboo, narnia, 250);

    const nodes1 = [metroville, pandora];
    const nodes2 = [arendelle, monst, naboo];
    // @ts-ignore
    expect(businessTrip(nodes1)).toEqual(82);
    // @ts-ignore
    expect(businessTrip(nodes2)).toEqual(115);
  });
});
