import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ContentsCardListContentData,
  useContentMapper,
  useGlobalAudio,
} from "../../core";
import styled from "@emotion/styled";
import { vh, vw } from "../../assets";
import { v4 as uuidv4 } from "uuid";
import IconPauseFillButton from "../atoms/Button/IconPauseFillButton";
import { ComponentButtonPlay } from "../atoms";

const ContentsBoxWrap = styled.div`
  display: flex;
  justify-content: center;
`;

interface TextBoxProps {
  isAccent: boolean;
}

const ContentBox = styled.div<TextBoxProps>`
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

  ${(props) =>
    !props.isAccent &&
    `
    background-image: none;
    border: 3px solid #D6E9FF;
  `}

  &:last-of-type {
    margin: 0;
  }
`;

export interface ContentsCardListProps {
  contents: ContentsCardListContentData;
  fullAudioId?: string;
}

const ContentsCardListComponent = ({
  contents,
  fullAudioId,
}: ContentsCardListProps) => {
  const { getContentComponent } = useContentMapper();
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
    if (globalAudioRef?.current) {
      globalAudioRefValue = globalAudioRef.current;
      globalAudioRefValue?.addEventListener("ended", audioEnded);
    }
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
        <ContentBox key={contentIndex} isAccent={content.isAccent}>
          {content.contents.map((component, componentIndex) => {
            if (component.type !== "audio") {
              return getContentComponent(component, componentIndex);
            }
            {
              if (
                playBoxAudioIndex === contentIndex &&
                globalAudioState === "playing"
              ) {
                return (
                  <IconPauseFillButton
                    onClick={() => {
                      handleAudioReset();
                    }}
                    isMini={true}
                  />
                );
              }
              return (
                <ComponentButtonPlay
                  isMini={true}
                  onClick={() => {
                    if (component.data.src) {
                      handleClickTextBoxAudio(contentIndex, component.data.src);
                    }
                  }}
                />
              );
            }
          })}
        </ContentBox>
      );
    });
  }, [
    contents.data,
    getContentComponent,
    globalAudioState,
    handleAudioReset,
    handleClickTextBoxAudio,
    playBoxAudioIndex,
  ]);

  return <ContentsBoxWrap>{textBoxes}</ContentsBoxWrap>;
};

export default ContentsCardListComponent;