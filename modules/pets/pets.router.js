const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
//const People = require('../people/people.service');

const petsRouter = express.Router();

petsRouter
  .route('/')
  .get((req, res) => {
    const allPets = Pets.get();
    res.status(200).json(allPets);
  })
  .delete(json, (req, res) => {
    // Remove a pet from adoption.
    const { type } = req.body;
    Pets.dequeue(type);
    const pets = Pets.get();
    return res.status(200).json(pets);
  });

module.exports = petsRouter;
