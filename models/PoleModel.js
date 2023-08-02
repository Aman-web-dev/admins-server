const mongoose = require('mongoose');

const pollingBoothSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
  user: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    enum: ['add', 'edit', 'delete'],
    required: true,
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

const PollingBoothAuditLog = mongoose.model('PollingBoothAuditLog', pollingBoothSchema);

module.exports = PollingBoothAuditLog;