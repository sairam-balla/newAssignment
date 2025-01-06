import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { deletePullRequest, fetchPullRequestById } from "../../services/api"; // Assuming you have an API function to fetch details
import PullRequestForm from "./PullRequestForm";

const PullRequestDetails = () => {
  const { id } = useParams(); // Correctly using useParams to get the id from the URL
  const [pullRequest, setPullRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onDeleteRequest = async () => {
    await deletePullRequest(id);
    navigate("/");
  };

  useEffect(() => {
    const getPullRequestDetails = async () => {
      try {
        const { data } = await fetchPullRequestById(id); // Fetch pull request details using the id
        setPullRequest(data);
      } catch (error) {
        setError("Error fetching pull request details");
      } finally {
        setLoading(false);
      }
    };

    getPullRequestDetails();
  }, [id]);

  if (loading) return <p>Loading pull request details...</p>;
  if (error) return <p>{error}</p>;
  if (!pullRequest) return <p>No pull request found.</p>;

  return (
    <div className="flex  w-3/5 px-10 items-center gap-6 justify-between mx-auto mt-20 border-2 rounded-2xl border-black py-6">
      <div className="w-3/5">
        <h2>{pullRequest.title}</h2>
        <p>{pullRequest.description}</p>
        <p>Create at: {pullRequest.createdAt}</p>
        <p>Updated at: {pullRequest.updatedAt}</p>
        <ul>
          {pullRequest.approvers.map((each) => {
            return (
              <li key={each.approverId}>
                <p>Status: {each.status}</p>
                <p>comments: {each.comments}</p>
                <p>Approver ID: {each.approverId}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2">
        <button
          className="border-2 border-white rounded-lg bg-red-600 text-white px-3 py-1"
          type="button"
          onClick={onDeleteRequest}
        >
          Delete
        </button>
        <Link
          to={`/pull-requests/edit/${id}/`}
          state={{ pullRequestDetails: { ...pullRequest } }}
        >
          <button
            className="border-2 border-white bg-blue-600 text-white rounded-lg  px-3 py-1"
            type="button"
          >
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PullRequestDetails;
