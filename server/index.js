require('dotenv').config();
const path = require('path');
const express = require('express');

const db = require('../db/index.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, '../client/dist')));

// Routing
app.get('/buckets/all', (req, res) => {
  db.collate()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send();
    });
})

app.get('/buckets', (req, res) => {
  db.get(req.query.id)
    .then((data) => {
      res.status(200).send({
        id: data._id,
        name: data.name,
        c: data.C,
        m: data.M,
        y: data.Y,
        createdAt: data.createdAt
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send();
    });
});

app.put('/buckets/', (req, res) => {
  db.put({
    _id: req.body.id,
    color: req.body.color
  })
    .then(() => {
      return db.get(req.body.id);
    })
    .then((data) => {
      res.status(201).send({
        id: data._id,
        name: data.name,
        c: data.C,
        m: data.M,
        y: data.Y,
        createdAt: data.createdAt
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send();
    });
});

app.post('/buckets', (req, res) => {
  db.create(req.body)
    .then(() => {
      res.status(201).send();
    })
    .catch(() => {
      res.status(500).send();
    });
});

app.listen(3400, () => {
  console.log('Listening on port 3400...');
});