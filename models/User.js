const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  // _id: {
  //   type: String,
  //   required: true,
  // },
});

const User = mongoose.model('User', userSchema);
module.exports = User;

// Let mongo create _id, use type: Schema.Types.ObjectId to connect user id to log
