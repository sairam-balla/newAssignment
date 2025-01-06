const mongoose = require("mongoose");
const pullRequest = require("./pullRequest");
const user = require("./user");

const approvalSchema = new mongoose.Schema({
  approvalId: { type: String, required: true, unique: true },
  pullRequestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: pullRequest,
    required: true,
  },
  approverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: user,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Approval", approvalSchema);
