const Queue = require('../queue/Queue');
const store = require('../../store');

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

const petsService = {
  get() {
    const allCats = pets.cats;
    const allDogs = pets.dogs;
    const allPets = [allCats, allDogs];
    return allPets;
  },

  dequeue(type) {
    if (type === 'cat') {
      pets.cats.dequeue();
    } else if (type === 'dog') {
      pets.dogs.dequeue();
    } else {
      return;
    }
  }
};

module.exports = petsService;