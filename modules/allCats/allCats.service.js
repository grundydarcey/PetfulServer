const Queue = require('../queue/Queue');
const store = require('../../store');
const allCats = new Queue();
store.cats.forEach(cat => allCats.enqueue(cat));

const allCatsService = {
  get() {
    return allCats;
  },

  dequeue() {
    allCats.dequeue();
  }
};

module.exports = allCatsService;