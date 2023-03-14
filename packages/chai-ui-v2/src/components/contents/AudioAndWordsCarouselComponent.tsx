import styled from "@emotion/styled";
import React, { useState } from "react";
import { vw } from "../../assets";
import { AudioAndWordsCarouselContentData, useGlobalAudio } from "../../core";
import IconDictionaryButton from "../atoms/Button/IconDictionaryButton";
import { LayoutModalVoca } from "../modal";
import AudioComponent from "./AudioComponent";

const AudioAndWordsWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: ${vw(30)};
`;

export interface AudioAndWordsCarouselComponentProps {
  contents: AudioAndWordsCarouselContentData;
}
const AudioAndWordsCarouselComponent = ({
  contents,
}: AudioAndWordsCarouselComponentProps) => {
  const [isVocaModalOpen, setIsVocaModalOpen] = useState(false);

  const { handleAudioReset } = useGlobalAudio();

  return (
    <AudioAndWordsWrap>
      <AudioComponent
        contents={{
          id: "",
          type: "audio",
          data: {
            src: contents.data.audio.src,
          },
        }}
      />
      <IconDictionaryButton
        onClickBtn={() => {
          handleAudioReset();
          setIsVocaModalOpen(true);
        }}
      />
      <LayoutModalVoca
        isModalOpen={isVocaModalOpen}
        setIsModalOpen={setIsVocaModalOpen}
        contentsData={contents.data.wordCarouselContents}
      />
    </AudioAndWordsWrap>
  );
};

export default AudioAndWordsCarouselComponent;
