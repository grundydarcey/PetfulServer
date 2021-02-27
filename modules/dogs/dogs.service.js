const Queue = require('../queue/Queue');
const store = require('../../store');

const dogs = new Queue();
store.dogs.forEach(dog => dogs.enqueue(dog));

const dogService = {
  get() {
    return dogs;
  },

  dequeue() {
    dogs.dequeue();
  },
  
  show() {
    return dogs.show();
  }
};

module.exports = dogService;