import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";
import { changePXtoVW } from "../../utils/styles";
import { SerializedStyles } from "@emotion/react";
import IconPlayArrow from "./svg/IconPlayArrow";
import IconPlaying from "./svg/IconPlaying";

interface DialogAudioProps {
  customCss?: SerializedStyles;
}

const Audio = styled.button<DialogAudioProps>`
  position: relative;
  width: ${changePXtoVW(80)};
  height: ${changePXtoVW(80)};
  margin: 0 ${changePXtoVW(10)};
  border-radius: 50%;
  background-color: ${colorPalette.confirmBtn};
  cursor: pointer;
  ${(props) => props.customCss}
`;

interface AudioProps {
  customCss?: SerializedStyles;
  audioState: boolean;
  audioHandler: () => void;
}

const DialogAudio = ({ customCss, audioState, audioHandler }: AudioProps) => {
  const handleClickDialogAudio = () => {
    if (audioState) {
      audioHandler();
    } else {
      audioHandler();
    }
  };

  const renderAudioIcon = useMemo(() => {
    if (audioState) {
      return <IconPlaying />;
    } else {
      return <IconPlayArrow />;
    }
  }, [audioState]);

  return (
    <Audio onClick={handleClickDialogAudio} customCss={customCss}>
      {renderAudioIcon}
    </Audio>
  );
};

export default DialogAudio;
