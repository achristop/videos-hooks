import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos(defaultTerm);
  }, [defaultTerm]);

  const fetchVideos = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };

  return [videos, fetchVideos];
};

export default useVideos;
