import React, { useCallback, useMemo, useState } from "react";
import { ConversationWordListContentData } from "../../core";
import useGlobalAudio from "../../core/hooks/useGlobalAudio";
import { ComponentButtonPlay, ImgCharacterComponent } from "../atoms";
import PauseButton from "../atoms/Button/PauseButton";
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
    handleClickAudioButton,
    handleClickAudioStopButton,
    globalAudioState,
  } = useGlobalAudio();

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
          globalAudioState === "play" ? (
            <PauseButton active={true} onClick={handleClickAudioStopButton} />
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
