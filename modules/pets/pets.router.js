const express = require('express');
const json = require('body-parser').json();
const Pets = require('./pets.service');
const petsRouter = express.Router();

petsRouter
  .route('/')
  .get((req, res) => {
    const allTPets = Pets.get();
    res.status(200).json(allTPets);
  })
  .delete(json, (req, res) => {
    const { type } = req.body;
    Pets.dequeue(type);
    const pets = Pets.get();
    return res.status(200).json(pets);
  });

module.exports = petsRouter;