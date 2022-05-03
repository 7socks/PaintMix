const mongoose = require('mongoose');

const BucketSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  name: String,
  C: {
    type: Number,
    default: 0
  },
  M: {
    type: Number,
    default: 0
  },
  Y: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('bucket', BucketSchema);