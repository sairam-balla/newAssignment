import React, { useState } from "react";
import { addComment } from "../../services/api";

const CommentForm = ({ pullRequestId, onSuccess }) => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addComment(pullRequestId, { comments: comment });
      setComment("");
      onSuccess();
    } catch (error) {
      console.error("Error adding comment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Add Comment</label>
      <textarea
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Comment"}
      </button>
    </form>
  );
};

export default CommentForm;
