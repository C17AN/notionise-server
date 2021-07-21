const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  githubUrl: String,
  notionDB: String,
  notionAPIKey: String,
  interests: [String],
  id: String,
  follow: [String],
});

export default User = mongoose.model("User", UserSchema);
