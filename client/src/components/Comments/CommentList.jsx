import React, { useState, useEffect } from "react";
import { fetchComments } from "../../services/api";

const CommentList = ({ pullRequestId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await fetchComments(pullRequestId);
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };
    getComments();
  }, [pullRequestId]);

  if (loading) return <p>Loading comments...</p>;

  return (
    <div>
      <h3>Comments</h3>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>
              <p>{comment.comments}</p>
              <small>By User: {comment.reviewerId}</small>
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default CommentList;
