const mongoose = require('mongoose');
mongoose.connect(`mongodb://${process.env.DB_HOST}`)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.error(err);
  });

module.exports.db = require('./controllers.js');