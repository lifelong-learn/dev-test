const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

const Datastore = require('nedb'),
  db = new Datastore({
    filename: 'db.json',
    autoload: true
  });

app.get('/', function (req, res) {
  db.find({}, {}, (err, docs) => {
    res.status(200).send(docs);
  });
});

app.get('/male', function (req, res) {
  db.find({
    gender: 'male'
  }, {}, (err, docs) => {
    res.status(200).send(docs);
  });
});

app.get('/female', function (req, res) {
  db.find({
    gender: 'female'
  }, {}, (err, docs) => {
    res.status(200).send(docs);
  });
});

app.get('/under30', function (req, res) {
  db.find({
    age: {
      $lt: 30
    }
  }, {}, (err, docs) => {
    res.status(200).send(docs);
  });
});

app.get('/over30', function (req, res) {
  db.find({
    age: {
      $gte: 30
    }
  }, {}, (err, docs) => {
    res.status(200).send(docs);
  });
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
});