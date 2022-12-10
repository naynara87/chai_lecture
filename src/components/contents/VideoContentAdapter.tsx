import { css } from "@emotion/react";
import React from "react";
import { ID } from "../../types/appData";
import { VideoContent } from "../../types/templateContents";
import { changePXtoVW } from "../../utils/styles";
import VideoContentComponent from "./VideoContentComponent";

const videoCss = css`
  width: ${changePXtoVW(850)};
  height: ${changePXtoVW(500)};
`;
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
            customCss={videoCss}
          />
        );
      })}
    </>
  );
};

export default VideoContentAdapter;
