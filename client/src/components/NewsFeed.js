import React, { useEffect, useState } from "react";
import api from "../services/api";

const NewsFeed = () => {
  const [newsFeed, setNewsFeed] = useState([]);

  useEffect(() => {
    const fetchNewsFeed = async () => {
      try {
        const response = await api.get("/news-feed");
        setNewsFeed(response.data);
      } catch (error) {
        console.error("Error fetching news feed:", error.message);
      }
    };

    fetchNewsFeed();
  }, []);

  return (
    <div>
      <h2>News Feed</h2>
      <ul>
        {newsFeed.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
