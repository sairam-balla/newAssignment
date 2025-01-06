import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" }); // Update with your backend URL

// Pull Requests
export const fetchPullRequests = () => API.get("/pull-requests");
export const fetchPullRequestById = (id) => API.get(`/pull-requests/${id}`);
export const createPullRequest = (data) => API.post("/pull-requests", data);
export const updatePullRequest = (id, data) =>
  API.put(`/pull-requests/${id}`, data);
export const deletePullRequest = (id) => API.delete(`/pull-requests/${id}`);

// Comments
export const fetchComments = (pullRequestId) =>
  API.get(`/pull-requests/${pullRequestId}/comments`);
export const addComment = (pullRequestId, data) =>
  API.post(`/pull-requests/${pullRequestId}/comments`, data);

// Approvals
export const fetchApprovals = (pullRequestId) =>
  API.get(`/pull-requests/${pullRequestId}/approvals`);
export const addApproval = (pullRequestId, data) =>
  API.post(`/pull-requests/${pullRequestId}/approvals`, data);

export default API;
