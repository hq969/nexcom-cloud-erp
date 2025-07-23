const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  employeeId: mongoose.Schema.Types.ObjectId,
  date: Date,
  status: String,
});

module.exports = mongoose.model('Attendance', attendanceSchema);
