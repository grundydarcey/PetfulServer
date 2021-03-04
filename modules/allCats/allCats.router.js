const express = require('express');
const allCats = require('./allCats.service');
const allCatsRouter = express.Router();

allCatsRouter
  .route('/')
  .get((req, res) => {
    const allCats = allCats.get();
    res.status(200).json(allCats);
  })
  .delete((req, res) => {
    allCats.dequeue();
    const allTheCats = allCats.get();
    return res.status(200).json(allTheCats);
  });

module.exports = allCatsRouter;