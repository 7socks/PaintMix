require('dotenv').config();
const path = require('path');
const express = require('express');

const db = require('../db/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

// Routing
app.get('/buckets/:id', (req, res) => {
});

app.put('/buckets/:id', (req, res) => {
});

app.post('/buckets', (req, res) => {
});

app.listen(3400, () => {
  console.log('Listening on port 3400...');
});