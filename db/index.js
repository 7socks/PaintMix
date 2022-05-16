const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.DB_HOST}/paint`)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = require('./controllers.js');