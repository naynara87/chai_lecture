import { SerializedStyles } from "@emotion/react";
import React from "react";
import { AudioContent } from "../../types/templateContents";
import AudioButton from "../atoms/AudioButton";

interface AudioContentAdapterProps {
  content: AudioContent;
  audioCss?: SerializedStyles;
}

const AudioContentAdapter = ({ content, audioCss }: AudioContentAdapterProps) => {
  const { data } = content;

  return (
    <>
      {data.map((audioData, index) => {
        return (
          <AudioButton key={index} isAudio={true} audioUrl={audioData.src} customCss={audioCss} />
        );
      })}
    </>
  );
};

export default AudioContentAdapter;
