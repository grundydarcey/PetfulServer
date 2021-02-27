const express = require('express');
const Dogs = require('./dogs.service');
const dogRouter = express.Router();

dogRouter
  .route('/')
  .get((req, res) => {
    const topDog = Dogs.show();
    res.status(200).json(topDog);    
  })
  .delete((req, res) => {
    Dogs.dequeue();
    const dogs = Dogs.get();
    return res.status(200).json(dogs);
  });

module.exports = dogRouter;