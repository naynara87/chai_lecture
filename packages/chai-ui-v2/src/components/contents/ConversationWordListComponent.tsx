import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ConversationWordListContentData } from "../../core";
import useGlobalAudio from "../../core/hooks/useGlobalAudio";
import { ComponentButtonPlay, ImgCharacterComponent } from "../atoms";
import IconPauseButton from "../atoms/Button/IconPauseButton";
import ComponentButtonRoundArrow from "../atoms/ComponentButtonRoundArrow";

interface ConversationWordListComponentProps {
  contents: ConversationWordListContentData;
}

const ConversationWordListComponent = ({
  contents,
}: ConversationWordListComponentProps) => {
  const [isVocaNoteOpen, setIsVocaNoteOpen] = useState(false);

  const {
    globalAudioId,
    globalAudioRef,
    handleClickAudioButton,
    handleClickAudioStopButton,
    globalAudioState,
    handleAudioReset,
  } = useGlobalAudio();

  useEffect(() => {
    let globalAudioRefValue: HTMLAudioElement | null = null;
    if (globalAudioRef?.current) globalAudioRefValue = globalAudioRef.current;
    function resetAudio() {
      if (globalAudioId.toString().includes("vocaNote")) {
        handleAudioReset();
      }
    }
    globalAudioRef?.current?.addEventListener("ended", resetAudio);
    return () => {
      if (globalAudioRefValue) {
        globalAudioRefValue.removeEventListener("ended", resetAudio);
      }
    };
  }, [globalAudioRef, handleAudioReset, globalAudioId]);

  const handleClickVocaNoteButton = useCallback(() => {
    setIsVocaNoteOpen(!isVocaNoteOpen);
  }, [isVocaNoteOpen]);

  const mainContents = useMemo(() => {
    return contents.data.words.map((word, wordIndex) => {
      return (
        <li className="voca-list" key={wordIndex}>
          <div className="voca-wrap">
            <p className="chinese">{word.text}</p>
            <p className="pinyin">{word.pronunciation}</p>
            <p className="mean">{word.meaning}</p>
          </div>
          {globalAudioId === `vocaNote${wordIndex}` &&
          globalAudioState === "playing" ? (
            <IconPauseButton onClick={handleClickAudioStopButton} />
          ) : (
            <ComponentButtonPlay
              onClick={() => {
                if (!word.audio) return;
                handleClickAudioButton(`vocaNote${wordIndex}`, word.audio?.src);
              }}
            />
          )}
        </li>
      );
    });
  }, [
    contents.data.words,
    globalAudioId,
    handleClickAudioButton,
    handleClickAudioStopButton,
    globalAudioState,
  ]);

  return (
    <div className={`voca-note-container ${isVocaNoteOpen ? "active" : ""}`}>
      <h3 className="voca-title">
        회화 단어 목록
        <ImgCharacterComponent
          characterType="kkungiSmile"
          characterAlt="꿍이스마일"
        />
        <ComponentButtonRoundArrow onClick={handleClickVocaNoteButton} />
      </h3>
      <ul className="voca-list-wrap">{mainContents}</ul>
    </div>
  );
};

export default ConversationWordListComponent;
