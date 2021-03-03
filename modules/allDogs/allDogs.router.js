const express = require('express');
const allDogs = require('./allDogs.service');
const allDogsRouter = express.Router();

allDogsRouter
  .route('/')
  .get((req, res) => {
    const allTheDogs = allDogs.get();
    res.status(200).json(allTheDogs);
  })
  .delete((req, res) => {
    allDogs.dequeue();
    const allTheDogs = allDogs.get();
    return res.status(200).json(allTheDogs);
  });

module.exports = allDogsRouter;
