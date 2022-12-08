import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";
import IconCheck from "./svg/IconCheck";
import { CornerStateType } from "../../types/corner";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";

interface CornerStateItemProps {
  backgroundColor: string;
  borderColor: string;
}

const CornerStateItem = styled.li<CornerStateItemProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${changePXtoVW(32)};
  height: ${changePXtoVW(32)};
  border-radius: 50%;
  margin: ${changePXtoVH(4)} ${changePXtoVW(5)};
  border: 1px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  user-select: none;

  > svg {
  width: ${changePXtoVW(25)};
  }
`;

interface CornerStateProps {
  state: CornerStateType;
}
const CornerState = ({ state }: CornerStateProps) => {
  const cornerStateBackgroundColor = useMemo(() => {
    if (state === "current") {
      return colorPalette.deepBlue;
    } else if (state === "completed") {
      return colorPalette.white;
    } else {
      return colorPalette.disableBackground;
    }
  }, [state]);

  const cornerStateBorderColor = useMemo(() => {
    if (state === "current") {
      return colorPalette.white;
    } else if (state === "completed") {
      return colorPalette.white;
    } else {
      return colorPalette.disableBackground;
    }
  }, [state]);

  const cornerStateIconColor = useMemo(() => {
    if (state === "current") {
      return colorPalette.white;
    } else if (state === "completed") {
      return colorPalette.deepBlue;
    } else {
      return colorPalette.white;
    }
  }, [state]);

  return (
    <CornerStateItem
      backgroundColor={cornerStateBackgroundColor}
      borderColor={cornerStateBorderColor}
    >
      <IconCheck color={cornerStateIconColor} />
    </CornerStateItem>
  );
};

export default CornerState;
