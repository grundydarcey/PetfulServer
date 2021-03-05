const express = require('express');
const Cats = require('./cats.service');
const catRouter = express.Router();

catRouter
  .route('/')
  .get((req, res) => {
    const topCat = Cats.show();
    res.status(200).json(topCat);
  })
  .delete((req, res) => {
    Cats.dequeue();
    const cats = Cats.show();
    return res.status(200).json(cats);
  });

module.exports = catRouter;