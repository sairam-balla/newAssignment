const PullRequest = require("../models/pullRequest");
const Review = require("../models/review");
const Approval = require("../models/approval");
const mongoose = require("mongoose");

// Get all pull requests
const getAllPullReq = async (req, res) => {
  try {
    const pullRequests = await PullRequest.find().populate(
      "requesterId approvers.approverId"
    );
    res.json(pullRequests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get  pull request by ID
const getPullReqByID = async (req, res) => {
  try {
    console.log("get request");
    const pullRequest = await PullRequest.findById(req.params.id);
    res.json(pullRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a pull request
const createPullReq = async (req, res) => {
  try {
    const { title, description, requesterId, approvers } = req.body;
    const pullRequest = new PullRequest({
      pullRequestId: new mongoose.Types.ObjectId(),
      title,
      description,
      requesterId: new mongoose.Types.ObjectId(),
      approvers: [
        {
          approverId: new mongoose.Types.ObjectId(),
          status: approvers.status,
        },
      ],
    });
    await pullRequest.save();

    res.status(201).json(pullRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a pull request
const UpdatePullReq = async (req, res) => {
  try {
    const pullRequest = await PullRequest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(pullRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a pull request
const deletePullReq = async (req, res) => {
  try {
    await PullRequest.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all comment requests by ID
const getAllComments = async (req, res) => {
  try {
    console.log("get request");
    const reviews = await Review.findById(req.params.id);
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// create comment request
const createComments = async (req, res) => {
  try {
    const reviews = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all approval requests by ID
const getAllApprovals = async (req, res) => {
  try {
    console.log("get request");
    const approval = await Approval.findById(req.params.id);
    res.json(approval);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// add approval request
const addApproval = async (req, res) => {
  try {
    const approval = await Approval.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(approval);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllPullReq,
  getPullReqByID,
  createPullReq,
  UpdatePullReq,
  deletePullReq,
  getAllComments,
  createComments,
  getAllApprovals,
  addApproval,
};
