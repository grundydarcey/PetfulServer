const Queue = require('../queue/Queue');
const store = require('../../store');
const people = new Queue();
store.people.forEach(person => people.enqueue(person));

const peopleService = {
  get() {
    return people;
  },

  enqueue(data) {
    // Add a person to the queue.
    people.enqueue(data);
  },

  dequeue() {
    // Remove a person from the queue.
    people.dequeue();
  }
};


module.exports = peopleService;