import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ConversationWordListContentData } from "../../core";
import useGlobalAudio from "../../core/hooks/useGlobalAudio";
import { ComponentButtonPlay, ImgCharacterComponent } from "../atoms";
import IconPauseFillButton from "../atoms/Button/IconPauseFillButton";
import ComponentButtonRoundArrow from "../atoms/ComponentButtonRoundArrow";
import { v4 as uuidv4 } from "uuid";
interface ConversationWordListComponentProps {
  contents: ConversationWordListContentData;
}

const ConversationWordListComponent = ({
  contents,
}: ConversationWordListComponentProps) => {
  const [isVocaNoteOpen, setIsVocaNoteOpen] = useState(false);
  const [dialogueAudioUuids, setDialogueAudioUuids] = useState<string[]>([]);
  useEffect(() => {
    contents.data.words.forEach(() => {
      setDialogueAudioUuids((prev) => [...prev, uuidv4()]);
    });
  }, [contents.data]);

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
          {globalAudioId ===
            `vocaNote_${dialogueAudioUuids[wordIndex]}_${wordIndex}` &&
          globalAudioState === "playing" ? (
            <IconPauseFillButton onClick={handleClickAudioStopButton} />
          ) : (
            <ComponentButtonPlay
              onClick={() => {
                if (!word.audio) return;
                handleClickAudioButton(
                  "vocaNote",
                  dialogueAudioUuids[wordIndex],
                  wordIndex,
                  word.audio?.src,
                );
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
    dialogueAudioUuids,
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
