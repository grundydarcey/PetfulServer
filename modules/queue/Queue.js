class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    // Set initial data.
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    // Add some data to the queue.
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    // Remove some data from the queue.
    if (!this.first) {
      return null;
    }
    const item = this.first;
    this.first = this.first.next;
    return item;
  }

  show() {
    // Return the next item in the queue.
  }

  all() {
    // Return all items in the queue.
  }

  
}

module.exports = Queue;
