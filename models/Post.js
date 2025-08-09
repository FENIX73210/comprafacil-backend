const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
  type: { type: String, enum: ['car','house'], required: true },
  title: { type: String, required: true },
  description: String,
  price: Number,
  location: String,
  images: [String],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Post', PostSchema);
