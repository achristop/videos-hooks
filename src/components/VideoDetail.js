import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div
        className="ui segment"
        style={{
          background: "black",
          color: "white",
          border: "1px solid white",
        }}
      >
        <h4
          className="ui header"
          style={{ background: "black", color: "white" }}
        >
          {video.snippet.title}
        </h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
