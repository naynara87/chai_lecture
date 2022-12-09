import React from "react";
import { ID } from "../../types/appData";
import { VideoContent } from "../../types/templateContents";
import VideoContentComponent from "./VideoContentComponent";

interface VideoContentAdapterProps {
  content: VideoContent;
  videoId: ID;
}

const VideoContentAdapter = ({ content, videoId }: VideoContentAdapterProps) => {
  const { data } = content;
  return (
    <>
      {data.map((videoData, index) => {
        return (
          <VideoContentComponent
            videoId={videoId}
            key={index}
            videoUrl={videoData.src}
            tracks={videoData.tracks}
          />
        );
      })}
    </>
  );
};

export default VideoContentAdapter;
