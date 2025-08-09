const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema({
  roomId: String,
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  timestamp: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Message', MessageSchema);
