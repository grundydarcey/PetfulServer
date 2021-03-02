/* eslint-disable eqeqeq */
const express = require('express');
const json = require('body-parser').json();
const People = require('./people.service');
const peopleRouter = express.Router();

peopleRouter
  .route('/')
  .get((req, res) => {
    const allPeople = People.get();
    res.status(200).json(allPeople);
  })
  .post(json, (req, res) => {
    const { next } = req.body;
    const name = { next };
    if (!name) 
      return res.status(400).json({
        error: 'Name is required to adopt'
      });
      
    People.enqueue(name);
    const people = People.get();
    return res.status(201).json(people);
  })
  .delete((req, res) => {
    People.dequeue();
    const people = People.get();
    return res.status(200).json(people);
  });

module.exports = peopleRouter;