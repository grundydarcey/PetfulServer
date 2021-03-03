class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(data) {
    const node = new _Node(data);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.value, --this.size;
  }

  show() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    return node.value;
  }

  all() {
    let allNodes = [];
    let currentNode = this.first;
    if (currentNode === null) {
      return;
    }
    while (currentNode !== null) {
      allNodes.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return allNodes;
  }
}

module.exports = Queue;
