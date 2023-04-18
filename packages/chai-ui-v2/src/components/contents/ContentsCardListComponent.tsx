import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  ContentsCardListContentData,
  useContentMapper,
  useGlobalAudio,
  useXapi,
} from "../../core";
import styled from "@emotion/styled";
import { colorPalette, vh, vw } from "../../assets";
import { v4 as uuidv4 } from "uuid";
import IconPauseFillButton from "../atoms/Button/IconPauseFillButton";
import { ComponentButtonPlay } from "../atoms";

const ContentsBoxWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${vw(30)};
  
  .image-with-caption-wrapper img {
    width: ${vw(200)};
    height: ${vw(150)};
  }
`;

interface TextBoxProps {
  isAccent: boolean;
}

const ContentBox = styled.div<TextBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: ${vw(205)};
  min-height: ${vh(269)};
  padding: ${vh(60)} ${vw(75)};
  border: ${vw(3)} solid ${colorPalette.subblue};
  border-radius: 1.5vw;
  background-image: linear-gradient(to top, #e3e8ff 0%, #e9faff 100%);
  font-size: ${vw(28)};
  transition: width 0.2s, height 0.2s;

  ${(props) =>
    !props.isAccent &&
    `
    background-image: none;
  `}

  &:last-of-type {
    margin: 0;
  }

  > div {
    margin-bottom: ${vw(24)};
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

  const { xapiPlayed } = useXapi();

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
    if (fullAudioId && globalAudioId.toString().includes("fullAudio")) {
      const results = globalAudioId.toString().split("_");
      const [, , textBoxIndex] = results;
      setPlayBoxAudioIndex(parseInt(textBoxIndex, 10));
    }
  }, [globalAudioId, fullAudioId]);

  useEffect(() => {
    if (
      globalAudioId &&
      !globalAudioId.toString().includes("fullAudio") &&
      !globalAudioId.toString().includes("textBox")
    ) {
      setPlayBoxAudioIndex(-1);
    }
  }, [globalAudioId]);

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
                      xapiPlayed("audio", component.id, component.data.src);
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
    xapiPlayed,
  ]);

  return <ContentsBoxWrap>{textBoxes}</ContentsBoxWrap>;
};

export default ContentsCardListComponent;
