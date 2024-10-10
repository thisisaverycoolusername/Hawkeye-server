// models/hawkeyeData.js
const mongoose = require('mongoose');

const hawkeyeSchema = new mongoose.Schema({
  time: { type: Date, required: true },
  temperature: { type: Number, required: true },
});

const HawkeyeData = mongoose.model('HawkeyeData', hawkeyeSchema);

module.exports = HawkeyeData;
