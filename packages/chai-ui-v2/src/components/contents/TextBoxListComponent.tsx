import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TextBoxListContentData, useGlobalAudio } from "../../core";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import IconPauseFillButton from "../atoms/Button/IconPauseFillButton";
import { ComponentButtonPlay } from "../atoms";
import { vh, vw } from "../../assets";

const TextBoxWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: linear-gradient(to top, #e3e8ff 0%, #e9faff 100%);
  width: ${vw(205)};
  min-height: ${vh(269)};
  margin: 0 ${vw(30)} 0 0;
  padding: ${vh(60)} ${vw(75)};
  border-radius: 1.5vw;
  transition: width 0.2s, height 0.2s;

  &:last-of-type {
    margin: 0;
  }
`;

interface TextBoxListComponentProps {
  contents: TextBoxListContentData;
  fullAudioId?: string;
}

const TextBoxListComponent = ({
  contents,
  fullAudioId,
}: TextBoxListComponentProps) => {
  console.log(contents);
  const [playBoxAudioIndex, setPlayBoxAudioIndex] = useState(-1);
  const [textBoxAudioUuids, setTextBoxAudioUuids] = useState<string[]>([]);

  const {
    globalAudioRef,
    globalAudioState,
    globalAudioId,
    handleAudioReset,
    handleClickAudioButton,
    handleClickAudioStopButton,
  } = useGlobalAudio();

  useEffect(() => {
    return () => {
      handleAudioReset();
    };
  }, [handleAudioReset]);

  useEffect(() => {
    contents.data.forEach(() => {
      setTextBoxAudioUuids((prev) => [...prev, uuidv4()]);
    });
  }, [contents.data]);

  const audioEnded = useCallback(() => {
    if (globalAudioId.toString().includes("textBox")) {
      setPlayBoxAudioIndex(-1);
      handleAudioReset();
    }
  }, [handleAudioReset, globalAudioId]);

  useEffect(() => {
    if (fullAudioId && globalAudioId.toString().includes(fullAudioId)) {
      const results = globalAudioId.toString().split("_");
      const [, , textBoxIndex] = results;
      setPlayBoxAudioIndex(parseInt(textBoxIndex, 10));
    }
  }, [globalAudioId, fullAudioId]);

  useEffect(() => {
    if (
      fullAudioId &&
      !globalAudioId.toString().includes("fullAudio") &&
      !globalAudioId.toString().includes("textBox")
    ) {
      setPlayBoxAudioIndex(-1);
    }
  }, [globalAudioId, fullAudioId]);

  useEffect(() => {
    let globalAudioRefValue: HTMLAudioElement | null = null;
    if (globalAudioRef?.current) globalAudioRefValue = globalAudioRef.current;
    globalAudioRef?.current?.addEventListener("ended", audioEnded);
    return () => {
      if (globalAudioRefValue) {
        globalAudioRefValue.removeEventListener("ended", audioEnded);
      }
    };
  }, [globalAudioRef, audioEnded]);

  const handleClickTextBoxAudio = useCallback(
    (textBoxIndex: number, audioSrc?: string) => {
      if (playBoxAudioIndex === textBoxIndex) {
        if (globalAudioState === "playing") {
          handleClickAudioStopButton();
        } else {
          handleClickAudioButton(
            "textBox",
            textBoxAudioUuids[textBoxIndex],
            textBoxIndex,
            audioSrc ?? "",
          );
        }
        return;
      }
      handleClickAudioButton(
        "textBox",
        textBoxAudioUuids[textBoxIndex],
        textBoxIndex,
        audioSrc ?? "",
      );
      setPlayBoxAudioIndex(textBoxIndex);
    },
    [
      handleClickAudioButton,
      handleClickAudioStopButton,
      globalAudioState,
      playBoxAudioIndex,
      textBoxAudioUuids,
    ],
  );

  const textBoxes = useMemo(() => {
    return contents.data.map((content, contentIndex) => {
      return (
        <TextBox key={contentIndex}>
          <HtmlContentComponent html={content.text} />
          {playBoxAudioIndex === contentIndex &&
          globalAudioState === "playing" ? (
            <IconPauseFillButton
              onClick={() => {
                handleAudioReset();
              }}
              isMini={true}
            />
          ) : (
            <ComponentButtonPlay
              isMini={true}
              onClick={() => {
                if (content.audio) {
                  handleClickTextBoxAudio(contentIndex, content.audio.src);
                }
              }}
            />
          )}
        </TextBox>
      );
    });
  }, [
    contents.data,
    handleClickTextBoxAudio,
    playBoxAudioIndex,
    handleAudioReset,
    globalAudioState,
  ]);

  return <TextBoxWrap>{textBoxes}</TextBoxWrap>;
};

export default TextBoxListComponent;
