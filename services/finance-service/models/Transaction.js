const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  amount: Number,
  date: Date,
  description: String,
});

module.exports = mongoose.model('Transaction', transactionSchema);
