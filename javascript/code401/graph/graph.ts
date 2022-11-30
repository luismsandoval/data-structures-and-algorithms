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
  let next = q.shift();
  while (next !== undefined) {
    if (!visited.has(next)) {
      visited.add(next);
      traversal.push(next.value);
      q.push(...graph.neighbors(next));
    }
    next = q.shift();
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

export const businessTrip = (
  tripQueue: Node<string, number>[]
): number | null => {
  let cost = 0;
  let current = tripQueue.shift()!;

  while (tripQueue.length > 0) {
    let next = tripQueue.shift()!;

    if (!current.edges.has(next)) {
      return null;
    }

    cost += current.edges.get(next)!;
    current = next;
  }
  return cost;
};

export const canSolve = (start: Node<string | undefined, boolean>): boolean => {
  const visited = new Set();
  const queue = [start];
  let hasKey = false;

  while (queue.length > 0) {
    const node = queue.shift()!;

    if (node.value === "treasure") {
      return true;
    }

    if (node.value === "key") {
      hasKey = true;
    }
    visited.add(node);

    for (const [room, locked] of node.edges) {
      if (!locked || (locked && hasKey)) {
        if (visited.has(room) || queue.includes(room)) {
          continue;
        }
        queue.push(room);
      }
    }
  }
  return false;
};
