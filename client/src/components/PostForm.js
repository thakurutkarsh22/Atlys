import React, { useState } from "react";
import api from "../services/api";

const PostForm = () => {
  const [content, setContent] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handlePost = async () => {
    try {
      const response = await api.post("/posts", { content, isAnonymous });
      console.log("Post created:", response.data);
      // You can handle success or navigate to a different page
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  };

  return (
    <div>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <label>
        Anonymous:
        <input
          type="checkbox"
          checked={isAnonymous}
          onChange={() => setIsAnonymous(!isAnonymous)}
        />
      </label>
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default PostForm;
