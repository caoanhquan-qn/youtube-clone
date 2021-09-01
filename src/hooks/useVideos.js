import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (input) => {
  const [videos, setVideos] = useState([]);
  const search = async (term) => {
    const { data } = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(data.items);
  };
  useEffect(() => {
    search(input);
  }, [input]);

  return [videos, search];
};

export default useVideos;
