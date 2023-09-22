export interface VideoProps {
  videoInfo: any;
}

const Video = ({ videoInfo }: VideoProps) => {
  const { snippet, statistics } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="px-2 py-2 w-80 mx-2 shadow-lg rounded-lg">
      <img
        className="rounded-lg"
        alt="thumbnails"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default Video;
