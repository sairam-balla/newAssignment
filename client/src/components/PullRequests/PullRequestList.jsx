import React, { useState, useEffect } from "react";
import { deletePullRequest, fetchPullRequests } from "../../services/api";
import { Link } from "react-router-dom";

const PullRequestList = () => {
  const [pullRequests, setPullRequests] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  const onDeleteRequest = async (id) => {
    await deletePullRequest(id);
    setIsDeleted(true);
  };

  useEffect(() => {
    const getPullRequests = async () => {
      const { data } = await fetchPullRequests();
      setPullRequests(data);
    };
    getPullRequests();
  }, [isDeleted]);

  return (
    <div className="flex flex-col  items-center w-full">
      <h2 className="text-3xl font-semibold my-4">Pull Requests</h2>
      <ul className="w-1/5">
        {pullRequests.map((pr) => (
          <li
            key={pr._id}
            className="border-2 border-orange-400 px-6 py-1 rounded-md bg-slate-200 w-full flex justify-between mb-2"
          >
            <Link to={`/pull-requests/${pr._id}`}>
              <p>{pr.title}</p>
            </Link>
            <button
              type="button"
              className=" p-1 px-2 text-red-600 text-xs"
              onClick={() => onDeleteRequest(pr._id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PullRequestList;
