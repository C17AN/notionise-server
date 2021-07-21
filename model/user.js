import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  githubUrl: { type: String, default: "" },
  notionDB: { type: String, default: "" },
  notionAPIKey: { type: String, default: "" },
  interests: { type: [String], default: [] },
  id: { type: String, required: true },
  follow: { type: [String], default: [] },
  follower: { type: [String], default: [] },
  bookmark: { type: [String], default: [] },
  like: { type: [String], default: [] },
});

const User = mongoose.model("User", UserSchema);
export default User;
