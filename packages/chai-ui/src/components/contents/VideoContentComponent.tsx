import React, { useCallback, useRef } from "react";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";
import { VideoTrack } from "../../types/templateContents";
import { ID } from "../../types/appData";
import { footerHeightNormal, headerHeightNormal } from "../../constants/layout";

interface VideoContentComponentProps {
  videoId: ID;
  videoUrl: string;
  customCss?: SerializedStyles;
  tracks?: VideoTrack[];
}

interface IframeProps {
  customCss?: SerializedStyles;
}

const Iframe = styled.iframe<IframeProps>`
  width: 90%;
  height: calc(100% - ${headerHeightNormal} - ${footerHeightNormal});
  margin: 0 auto;

  ${(props) => props.customCss}
`;

const VideoContentComponent = ({
  videoUrl,
  customCss,
  tracks,
  videoId,
}: VideoContentComponentProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const sendDataVideoIframe = useCallback(() => {
    const videoData = {
      src: videoUrl,
      tracks: tracks,
    };
    iframeRef.current?.contentWindow?.postMessage(videoData, "*");
  }, [videoUrl, tracks]);

  return (
    <Iframe
      key={videoId}
      ref={iframeRef}
      customCss={customCss}
      onLoad={sendDataVideoIframe}
      src={`${process.env.REACT_APP_BASE_URL}/video-index.html`}
      frameBorder="0"
    ></Iframe>
  );
};

export default VideoContentComponent;
