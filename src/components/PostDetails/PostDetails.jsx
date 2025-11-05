import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  const { title, body } = post;
  const navigate = useNavigate();

  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default PostDetails;
