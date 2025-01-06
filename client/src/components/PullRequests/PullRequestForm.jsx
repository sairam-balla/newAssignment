import React, { useState } from "react";
import { createPullRequest, updatePullRequest } from "../../services/api";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const statusOptions = ["Pending", "Approved", "Rejected"];

const PullRequestForm = ({ isEditing = true }) => {
  const location = useLocation();
  const navigate = useNavigate();
  let pullRequest = null;
  if (isEditing) {
    const { pullRequestDetails } = location.state;
    pullRequest = { ...pullRequestDetails };
  }

  const [formData, setFormData] = useState({
    title: pullRequest?.title || "",
    description: pullRequest?.description || "",
    approvers: { status: pullRequest?.approvers?.status || "Pending" },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updatePullRequest(pullRequest._id, formData);
      navigate(`/pull-requests/${pullRequest._id}`);
    } else {
      await createPullRequest(formData);
      navigate("/");
    }
  };

  return (
    <div className="w-dvw h-full flex justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-4/12  bg-slate-200 rounded-3xl py-20 px-20 mt-10"
      >
        <label className="">Title</label>
        <input
          className="text-lg  rounded-lg py-1 px-4 border-2 border-gray-300 mb-2"
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <label>Description</label>
        <textarea
          className=" rounded-lg py-2 px-4 border-2 border-gray-300 mb-2"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <label>Status</label>

        <select
          className=" rounded-lg py-2 text-md px-2 border-2 border-gray-300 mb-2 w-1/2"
          value={formData.approvers.status}
          onChange={(e) =>
            setFormData({ ...formData, approvers: { status: e.target.value } })
          }
        >
          {statusOptions.map((each) => (
            <option key={each} value={each}>
              {each}
            </option>
          ))}
        </select>
        <button
          className="rounded-xl border-2 border-white p-2 px-4 text-white bg-blue-600  mt-4 self-start"
          type="submit"
        >
          {isEditing ? "Update" : "Create"} Pull Request
        </button>
      </form>
    </div>
  );
};

export default PullRequestForm;
