import styled from "@emotion/styled";
import React from "react";
import { Content } from "../../../types/appData";

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

interface ContextMenuProps {
  top: number;
  left: number;
}

const ContextMenu = styled.div<ContextMenuProps>`
  position: absolute;
  border: 1px solid #ffffff2d;
  border-radius: 4px;
  padding: 18px;
  margin: 5px 0;
  box-sizing: border-box;
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};
`;

interface CreatePlusBoxProps {
  clicked: boolean;
  points: {
    x: number;
    y: number;
  };
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setPoints: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
    }>
  >;
  componentNames: Content["type"][];
  addNewComponent: (contentType: Content["type"]) => void;
}

const CreatePlusBox = ({
  clicked,
  setClicked,
  points,
  setPoints,
  componentNames,
  addNewComponent,
}: CreatePlusBoxProps) => {
  return (
    <PlusBoxWrapper
      onClick={(event) => {
        const target = event.target as Element;
        const rect = target.getBoundingClientRect();
        event.preventDefault();
        setClicked(!clicked);
        setPoints({
          x: event.clientX - rect.x,
          y: event.clientY - rect.y,
        });
      }}
    >
      {clicked && (
        <ContextMenu top={points.y} left={points.x}>
          <ul>
            {componentNames.map((componentName, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    addNewComponent(componentName);
                  }}
                >
                  {componentName}
                </li>
              );
            })}
          </ul>
        </ContextMenu>
      )}
      <Bar />
      <Bar isRotate={true} />
    </PlusBoxWrapper>
  );
};

export default CreatePlusBox;
