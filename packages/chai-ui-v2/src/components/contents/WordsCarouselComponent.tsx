import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useGlobalAudio, WordsCarouselContentData } from "../../core";
import IconDictionaryButton from "../atoms/Button/IconDictionaryButton";
import { LayoutModalVoca } from "../modal";
import { v4 as uuidv4 } from "uuid";

const WordsCarouselWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export interface WordsCarouselComponentProps {
  contents: WordsCarouselContentData;
}

const WordsCarouselComponent = ({ contents }: WordsCarouselComponentProps) => {
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
    <WordsCarouselWrap>
      <IconDictionaryButton
        onClickBtn={() => {
          setIsVocaModalOpen(true);
          handleClickAudioButton(
            "vocaModal",
            vocaModalUuidRef.current,
            0,
            contents.data.soundEffect?.src ?? "",
          );
        }}
      />
      <LayoutModalVoca
        isModalOpen={isVocaModalOpen}
        setIsModalOpen={setIsVocaModalOpen}
        contentsData={contents.data}
      />
    </WordsCarouselWrap>
  );
};

export default WordsCarouselComponent;
