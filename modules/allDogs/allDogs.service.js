const Queue = require('../queue/Queue');
const store = require('../../store');
const allDogs = new Queue();
store.dogs.forEach(dog => allDogs.enqueue(dog));

const allDogsService = {
  get() {
    return allDogs;
  },

  dequeue() {
    allDogs.dequeue();
  }
};

module.exports = allDogsService;