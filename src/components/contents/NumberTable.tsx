import { css } from "@emotion/react";
import React from "react";
import { changePXtoVW } from "../../utils/styles";
import AudioButton from "../atoms/AudioButton";
import HtmlContentComponent from "../molecules/HtmlContentComponent";

interface NumberTableProps {
  text: string;
  pronunciation: string;
  meaning: string;
  audioUrl: string;
  audioIndex: number;
  currentAudioIndex: number;
  audioState: boolean;
  audioHandler: (src: string, index: number) => void;
}

const htmlCustomCss = css`
  font-weight: 500;
  font-size: ${changePXtoVW(48)};
`;

const NumberTable = ({
  text,
  pronunciation,
  meaning,
  audioUrl,
  audioHandler,
  audioState,
  audioIndex,
  currentAudioIndex,
}: NumberTableProps) => {
  return (
    <>
      <HtmlContentComponent html={text} customCss={htmlCustomCss} />
      <HtmlContentComponent html={pronunciation} customCss={htmlCustomCss} />
      <HtmlContentComponent html={meaning} customCss={htmlCustomCss} />
      <AudioButton
        isAudio={false}
        currentAudioIndex={currentAudioIndex}
        audioHandler={audioHandler}
        audioUrl={audioUrl}
        audioIndex={audioIndex}
        audioState={audioState}
      />
    </>
  );
};

export default NumberTable;
