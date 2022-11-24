import React from "react";
import { VideoContent } from "../../types/templateContents";
import VideoContentComponent from "./VideoContentComponent";

interface VideoContentAdapterProps {
  content: VideoContent;
}

const VideoContentAdapter = ({ content }: VideoContentAdapterProps) => {
  const { data } = content;

  return (
    <>
      {data.map((videoData, index) => {
        return <VideoContentComponent key={index} videoUrl={videoData.src} />;
      })}
    </>
  );
};

export default VideoContentAdapter;
