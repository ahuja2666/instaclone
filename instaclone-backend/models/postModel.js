const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  likes: { type: Number, required: true },
  description: { type: String, required: true },
  postImage: { type: String, required: true },
  date: { type: String, required: true },
});

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;