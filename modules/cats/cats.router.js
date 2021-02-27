const express = require('express');
//const json = require('body-parser').json();
const Cats = require('./cats.service');
const catRouter = express.Router();

catRouter
  .route('/')
  .get((req, res) => {
    const allCats = Cats.get();
    res.status(200).json(allCats);
  })
  .delete((req, res) => {
    Cats.dequeue();
    const cats = Cats.get();
    return res.status(200).json(cats);
  });

module.exports = catRouter;