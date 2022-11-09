import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";
import IconCheck from "../svg/IconCheck";
import { CornerStateType } from "../../types/corner";

interface CornerStateItemProps {
  backgroundColor: string;
  borderColor: string;
}

const CornerStateItem = styled.li<CornerStateItemProps>`
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  margin: 4px 5px;
  border: 1px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor};
  -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
