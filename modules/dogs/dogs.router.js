const express = require('express');
const json = require('body-parser').json();
const Dogs = require('./dogs.service');
const router = express.Router();