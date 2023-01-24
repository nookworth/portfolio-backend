const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  messageText: {
    type: String,
    required: 'You need to leave a thought!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  messageAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  messageEmail: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Message = model('message', messageSchema);

module.exports = Message;