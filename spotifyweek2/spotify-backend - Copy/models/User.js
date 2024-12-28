
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  privateAlbums: [
    {
      name: { type: String, required: true },
      tracks: [{ type: String }], // List of track IDs or names
    },
  ],
  playlists: [
    {
      name: { type: String, required: true },
      tracks: [{ type: String }], // List of track IDs or names
    },
  ],
});

module.exports = mongoose.model('User', UserSchema);
