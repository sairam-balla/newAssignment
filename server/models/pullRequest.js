const mongoose = require("mongoose");
const user = require("./user");

const pullRequestSchema = new mongoose.Schema({
  pullRequestId: {
    type: mongoose.Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  requesterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  approvers: [
    {
      approverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending",
      },
      comments: { type: String, default: "" },
    },
  ],
  status: {
    type: String,
    enum: ["Open", "Approved", "Rejected"],
    default: "Open",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PullRequest", pullRequestSchema);
