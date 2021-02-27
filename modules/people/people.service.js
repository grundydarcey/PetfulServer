const Queue = require('../queue/Queue');
const store = require('../../store');
const people = new Queue();
store.people.forEach(person => people.enqueue(person));

const peopleService = {
  get() {
    return people;
  },

  enqueue(data) {
    people.enqueue(data);
  },

  dequeue() {
    people.dequeue();
  }
};

module.exports = peopleService;