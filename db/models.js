const mongoose = require('mongoose');

const BucketSchema = new mongoose.Schema({
  createdAt: Date,
  name: String,
  C: Number,
  M: Number,
  Y: Number
});

module.exports = mongoose.model('bucket', BucketSchema);