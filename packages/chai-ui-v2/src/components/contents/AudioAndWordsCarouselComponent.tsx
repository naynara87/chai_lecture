import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AudioAndWordsCarouselContentData, useGlobalAudio } from "../../core";
import IconDictionaryButton from "../atoms/Button/IconDictionaryButton";
import { LayoutModalVoca } from "../modal";
import AudioComponent from "./AudioComponent";
import { v4 as uuidv4 } from "uuid";

const AudioAndWordsWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 3vmin;
`;

export interface AudioAndWordsCarouselComponentProps {
  contents: AudioAndWordsCarouselContentData;
}
const AudioAndWordsCarouselComponent = ({
  contents,
}: AudioAndWordsCarouselComponentProps) => {
  const [isVocaModalOpen, setIsVocaModalOpen] = useState(false);

  const vocaModalUuidRef = useRef(uuidv4());

  const {
    globalAudioRef,
    globalAudioId,
    handleAudioReset,
    handleClickAudioButton,
  } = useGlobalAudio();

  const audioEnded = useCallback(() => {
    if (
      globalAudioId.toString().includes(`vocaModal_${vocaModalUuidRef.current}`)
    ) {
      handleAudioReset();
    }
  }, [handleAudioReset, globalAudioId]);

  useEffect(() => {
    let globalAudioRefValue: HTMLAudioElement | null = null;
    if (globalAudioRef?.current) globalAudioRefValue = globalAudioRef.current;
    globalAudioRef?.current?.addEventListener("ended", audioEnded);
    return () => {
      if (globalAudioRefValue) {
        globalAudioRefValue.removeEventListener("ended", audioEnded);
      }
    };
  }, [audioEnded, globalAudioRef]);

  useEffect(() => {
    return () => {
      handleAudioReset();
    };
  }, [handleAudioReset]);

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
          handleClickAudioButton(
            "vocaModal",
            vocaModalUuidRef.current,
            0,
            contents.data.wordCarouselContents.soundEffect?.src ?? "",
          );
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
