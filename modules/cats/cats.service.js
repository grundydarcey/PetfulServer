const Queue = require('../queue/Queue');
const store = require('../../store');

const cats = new Queue();
store.cats.forEach(cat => cats.enqueue(cat));

const catService = {
  get() {
    return cats;
  },

  dequeue() {
    cats.dequeue();
  },

  show() {
    return cats.show();
  }
};

module.exports = catService;