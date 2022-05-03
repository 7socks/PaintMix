const Bucket = require('./models.js');

module.exports.get = (id) => {
  return Bucket.findOne(id);
};

module.exports.put = (data) => {
  let color = data.color.slice(0,1).toUpperCase();
  return Bucket.findOne({_id: data._id})
    .then((bucket) => {
      let droplet = bucket[color] +  1;
      return Bucket.updateOne({_id: data._id}, {[color]: droplet});
    });
};

module.exports.create = (data) => {
  let color = data.color.slice(0,1).toUpperCase();
  return Bucket.create({
    name: data.name,
    [color]: 1
  });
};