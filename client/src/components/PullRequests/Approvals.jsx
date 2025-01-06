import React, { useState, useEffect } from "react";
import { addApproval, fetchApprovals } from "../../services/api";

const Approvals = ({ pullRequest }) => {
  const [approvals, setApprovals] = useState([]);

  useEffect(() => {
    const getApprovals = async () => {
      const { data } = await fetchApprovals(pullRequest._id);
      setApprovals(data);
    };
    getApprovals();
  }, [pullRequest._id]);

  const handleApproval = async (approverId, status) => {
    await addApproval(pullRequest._id, { approverId, status });
    const updatedApprovals = await fetchApprovals(pullRequest._id);
    setApprovals(updatedApprovals.data);
  };

  return (
    <div>
      <h3>Approvals</h3>
      {pullRequest.approvers.map((approver, index) => {
        const isSequential = pullRequest.isSequential;
        const canApprove =
          !isSequential ||
          index === 0 ||
          approvals[index - 1]?.status === "Approved";

        return (
          <div key={approver.approverId}>
            <p>Approver: {approver.approverId}</p>
            <button
              onClick={() => handleApproval(approver.approverId, "Approved")}
              disabled={!canApprove}
            >
              Approve
            </button>
            <button
              onClick={() => handleApproval(approver.approverId, "Rejected")}
              disabled={!canApprove}
            >
              Reject
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Approvals;
