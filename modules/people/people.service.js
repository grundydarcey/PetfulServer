const Queue = require('../queue/Queue');
const store = require('../../store');
const people = new Queue();
store.people.forEach(person => people.enqueue(person));

const peopleService = {
  get() {
    return people;
  },

  enqueue(name) {
    people.enqueue(name);
  },

  dequeue() {
    people.dequeue();
  }
};

module.exports = peopleService;