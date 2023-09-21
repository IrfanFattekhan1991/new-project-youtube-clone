import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../Utils/constants";
import Video from "./Video";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();

    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video, index) => (
        <Link to="/watch">
          <Video key={index} videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
