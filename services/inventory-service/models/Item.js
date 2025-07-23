const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
});

module.exports = mongoose.model('Item', itemSchema);
