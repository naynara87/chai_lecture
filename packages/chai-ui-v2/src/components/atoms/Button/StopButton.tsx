import styled from "@emotion/styled";
import React from "react";
import { colorPalette } from "../../../styles";
import AudioStopIcon from "../AudioStopIcon";
import IconButton from "./IconButton";

// TODO: color palette 정의 후 적용하기 => BBC-982
const CustomIconButton = styled(IconButton)`
  border: 1px solid ${colorPalette.red600};
  overflow: hidden;
`;

interface StopButtonProps {
  color?: string;
}
const StopButton = ({ color }: StopButtonProps) => {
  return (
    <CustomIconButton>
      <AudioStopIcon color={color} />
    </CustomIconButton>
  );
};

export default StopButton;
