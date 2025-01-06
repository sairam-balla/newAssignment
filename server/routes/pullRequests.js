const express = require("express");
const {
  getAllPullReq,
  getPullReqByID,
  createPullReq,
  UpdatePullReq,
  deletePullReq,
  getAllComments,
  createComments,
  getAllApprovals,
  addApproval,
} = require("../controllers/pullRequests");

const router = express.Router();

router.get("/", getAllPullReq);
router.get("/:id", getPullReqByID);
router.post("/", createPullReq);
router.put("/:id", UpdatePullReq);
router.delete("/:id", deletePullReq);
router.get("/:id/comments", getAllComments);
router.put("/:id/comments", createComments);
router.get("/:id/approvals", getAllApprovals);
router.put("/:id/approvals", addApproval);

module.exports = router;
