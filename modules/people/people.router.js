const express = require('express');
//const xss = require('xss');
const json = require('body-parser').json();
const People = require('./people.service');
const peopleRouter = express.Router();

/*const serializeAdopter = adopter => ({
  name: xss(adopter.name),
});*/

peopleRouter
  .route('/')
  .get((req, res) => {
    // Return all the people currently in the queue.
    const allPeople = People.get();
    res.status(200).json(allPeople);
  })
  .post(json, (req, res) => {
    // Add a new person to the queue.
    const { name } = req.body;
    //const data = { name };

    if (!name) {
      return res.status(400).json({error: 'Name is required to adopt'});
    }
    People.enqueue(name);
    const people = People.get();
    return res.status(201).json(people);
  })
  .delete((req, res) => {
    People.dequeue();
    const people = People.get();
    return res.status(201).json(people);
  });

module.exports = peopleRouter;