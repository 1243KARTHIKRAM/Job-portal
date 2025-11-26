const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  skills: { type: [String], required: true },
  postedDate: { type: Date, default: Date.now },
  role: { type: String, enum: ["Job", "Internship"], required: true },
});

module.exports = mongoose.model("Post", postSchema);
