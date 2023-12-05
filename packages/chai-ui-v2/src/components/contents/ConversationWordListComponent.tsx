import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ConversationWordListContentData } from "../../core";
import useGlobalAudio from "../../core/hooks/useGlobalAudio";
import {
  ComponentButtonPlay,
  HtmlContentComponent,
  ImgCharacterComponent,
} from "../atoms";
import IconPauseFillButton from "../atoms/Button/IconPauseFillButton";
import ComponentButtonRoundArrow from "../atoms/ComponentButtonRoundArrow";
import { v4 as uuidv4 } from "uuid";
export interface ConversationWordListComponentProps {
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
    function resetAudio() {
      if (globalAudioId.toString().includes("vocaNote")) {
        handleAudioReset();
      }
    }
    if (globalAudioRef?.current) {
      globalAudioRefValue = globalAudioRef.current;
      globalAudioRefValue?.addEventListener("ended", resetAudio);
    }
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
            <p className="chinese">
              <HtmlContentComponent html={word.text} />
            </p>
          </div>
          {globalAudioId ===
            `vocaNote_${dialogueAudioUuids[wordIndex]}_${wordIndex}` &&
          globalAudioState === "playing" ? (
            <IconPauseFillButton
              onClick={handleClickAudioStopButton}
              isMini={true}
            />
          ) : (
            <ComponentButtonPlay
              isMini={true}
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
      <div className="voca-header">
        <ImgCharacterComponent
          characterType="kkungiHello"
          characterAlt="꿍이윙크인사"
        />
        <h3 className="voca-title">
          {contents.data.title || "회화 단어 목록"}
        </h3>
        <ComponentButtonRoundArrow onClick={handleClickVocaNoteButton} />
      </div>
      <ul className="voca-list-wrap">{mainContents}</ul>
    </div>
  );
};

export default ConversationWordListComponent;
