const mongoose = require("mongoose");
const user = require("./user");
const pullRequest = require("./pullRequest");

const reviewSchema = new mongoose.Schema({
  reviewId: { type: String, required: true, unique: true },
  pullRequestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: pullRequest,
    required: true,
  },
  reviewerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: user,
    required: true,
  },
  comments: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", reviewSchema);
