import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useCallback, useMemo } from "react";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVW } from "../../utils/styles";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import AudioButton from "./AudioButton";

interface MediaTextStylesProps {
  color: string;
}

const MediaTextStyles = styled.div<MediaTextStylesProps>`
  padding: 1.3888888889vh 2.5vw 1.3888888889vh;
  min-width: 210px;
  border: 0.2083333333vw solid ${(props) => props.color};
  color: ${(props) => props.color};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  font-size: ${changePXtoVW(50)};
  cursor: pointer;
  margin-bottom: 10px;
`;

const HtmlCss = css`
  margin-right: 10px;
`;

interface MediaTextProps {
  index: number;
  text: string;
  audioUrl?: string;
  currentAudioIndex?: number;
  check: boolean | undefined;
  onClickAudioButton?: (src: string, index: number) => void;
  onClickMediaText?: (index: number) => void;
}

const MediaText = ({
  index,
  text,
  onClickMediaText,
  audioUrl,
  currentAudioIndex,
  check,
  onClickAudioButton,
}: MediaTextProps) => {
  const handleClickMediaText = useCallback(
    (event: React.MouseEvent) => {
      const element = event.target as HTMLElement;
      if (element.tagName !== "DIV") {
        return;
      }
      if (onClickMediaText) {
        onClickMediaText(index);
      }
    },
    [onClickMediaText, index],
  );

  const changeColor = useMemo(() => {
    if (check !== undefined) {
      if (check) {
        return colorPalette.deepBlue;
      } else {
        return colorPalette.wrongAnswer;
      }
    } else {
      return colorPalette.disableBackground;
    }
  }, [check]);

  return (
    <MediaTextStyles onClick={handleClickMediaText} color={changeColor}>
      <HtmlContentComponent html={text} customCss={HtmlCss} />
      {audioUrl && (
        <AudioButton
          isAudio={false}
          audioUrl={audioUrl}
          currentAudioIndex={currentAudioIndex}
          audioIndex={index}
          audioHandler={onClickAudioButton}
        />
      )}
    </MediaTextStyles>
  );
};

export default MediaText;
