import styled from "@emotion/styled";
import React from "react";

const PlusBoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(178, 178, 178);
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: rgb(119, 119, 119);
  }
`;
interface BarProps {
  isRotate?: boolean;
}

const Bar = styled.div<BarProps>`
  width: 50px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: black;
  transform: translate(-50%, -50%) ${(props) => props.isRotate && "rotate(90deg)"};
`;

interface CreatePlusBoxProps {
  componentIndex: number;
  setComponentIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const CreatePlusBox = ({ componentIndex, setComponentIndex }: CreatePlusBoxProps) => {
  return (
    <PlusBoxWrapper
      onClick={() => {
        setComponentIndex(componentIndex);
      }}
      className="plusBoxWrapper"
    >
      <Bar className="plusBoxWrapper" />
      <Bar isRotate={true} className="plusBoxWrapper" />
    </PlusBoxWrapper>
  );
};

export default CreatePlusBox;
