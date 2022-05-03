const Bucket = require('./controllers.js');

module.exports.put = (data) => {
  return Bucket.findOne({_id: data._id})
    .then((bucket) => {
      return Bucket.updateOne({_id: data._id}, data.drop);
    });
};