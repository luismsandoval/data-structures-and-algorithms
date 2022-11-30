interface Node<NV, EV> {
  value: NV;
  edges: Map<Node<NV, EV>, EV>;
}

export class Graph<NV, EV> {
  private nodes = new Set<Node<NV, EV>>();

  addNode(value: NV): Node<NV, EV> {
    const node: Node<NV, EV> = {
      value,
      edges: new Map(),
    };
    this.nodes.add(node);
    return node;
  }

  addEdge(a: Node<NV, EV>, b: Node<NV, EV>, value: EV): void {
    a.edges.set(b, value);
    b.edges.set(a, value);
  }

  getNodes(): Set<Node<NV, EV>> {
    return this.nodes;
  }

  neighbors(node: Node<NV, EV>): Set<Node<NV, EV>> {
    return new Set(node.edges.keys());
  }

  size(): number {
    return this.nodes.size;
  }
}

export const breadthFirst = <NV, EV>(
  graph: Graph<NV, EV>,
  start: Node<NV, EV>
): NV[] => {
  const q = [start];
  const visited = new Set<Node<NV, EV>>();
  const traversal: NV[] = [];
  let next = q.pop();
  while (next !== undefined) {
    if (!visited.has(next)) {
      visited.add(next);
      traversal.push(next.value);
      q.push(...graph.neighbors(next));
    }
    next = q.pop();
  }
  return traversal;
};

export const depthFirst = <NV, EV>(
  graph: Graph<NV, EV>,
  start: Node<NV, EV>
): NV[] => {
  const q = [start];
  const visited = new Set<Node<NV, EV>>();
  const traversal: NV[] = [];
  let next = q.pop();
  while (next !== undefined) {
    if (!visited.has(next)) {
      visited.add(next);
      traversal.push(next.value);
      q.push(...graph.neighbors(next));
    }
    next = q.pop();
  }
  return traversal;
};
