const express = require("express");
const PullRequest = require("../models/pullRequest");
const router = express.Router();
const mongoose = require("mongoose");

// Get all pull requests
router.get("/", async (req, res) => {
  try {
    const pullRequests = await PullRequest.find().populate(
      "requesterId approvers.approverId"
    );
    res.json(pullRequests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all pull request by ID
router.get("/:id", async (req, res) => {
  try {
    console.log("get request");
    const pullRequest1 = await PullRequest.findById(req.params.id);
    console.log("get request");
    console.log(pullRequest1);
    res.json(pullRequest1);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a pull request
router.post("/", async (req, res) => {
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
});

// Update a pull request
router.put("/:id", async (req, res) => {
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
});

// Delete a pull request
router.delete("/:id", async (req, res) => {
  try {
    await PullRequest.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
