import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../Utils/constants";
import Video from "./Video";
import { Link } from "react-router-dom";

interface VideoData {
  id: string;
}
const VideoContainer = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
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
      {videos.map((video: VideoData) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <Video videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
