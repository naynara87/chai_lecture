import React, { useCallback, useRef } from "react";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";
import { changePXtoVW } from "../../utils/styles";
import { VideoTrack } from "../../types/templateContents";

interface VideoContentComponentProps {
  videoUrl: string;
  customCss?: SerializedStyles;
  tracks?: VideoTrack;
}

interface IframeProps {
  customCss?: SerializedStyles;
}

const Iframe = styled.iframe<IframeProps>`
  width: ${changePXtoVW(800)};
  height: ${changePXtoVW(450)};
  margin: 0 auto;
  ${(props) => props.customCss}
`;

const VideoContentComponent = ({ videoUrl, customCss, tracks }: VideoContentComponentProps) => {
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
      ref={iframeRef}
      customCss={customCss}
      onLoad={sendDataVideoIframe}
      src={`${process.env.PUBLIC_URL}/video-index.html`}
      frameBorder="0"
    ></Iframe>
  );
};

export default VideoContentComponent;
