const express = require('express');
const json = require('body-parser').json();
const Pets = require('./pets.service');
const petsRouter = express.Router();

petsRouter
  .route('/')
  .get((req, res) => {
    const allhPets = Pets.get();
    res.status(200).json(allhPets);
  })
  .delete(json, (req, res) => {
    const { type } = req.body;
    Pets.dequeue(type);
    const pets = Pets.get();
    return res.status(200).json(pets);
  });

module.exports = petsRouter;