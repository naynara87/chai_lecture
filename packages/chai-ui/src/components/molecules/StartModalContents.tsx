import styled from "@emotion/styled";
import React from "react";
import { colorPalette } from "../../styles/colorPalette";
import { Introduction } from "../../types/appData";
import IconCheckYellow from "../atoms/svg/IconCheckYellow";

interface ContentsContainerProps {
  align: "vertical" | "horizontal";
}
const ContentsContainer = styled.div<ContentsContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.align === "vertical" ? "column" : "row")};
  align-items: ${(props) => (props.align === "vertical" ? "flex-start" : "center")};
  justify-content: center;

  margin-left: ${(props) => (props.align === "vertical" ? "10px" : "0px")};

  & > :not(:last-child) {
    margin-right: ${(props) => (props.align === "vertical" ? "0" : "10px")};
  }
`;

const ModalDescription = styled.p`
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 0.5555555556vh;
  margin-left: 0.5vh;
  font-weight: 500;
  font-size: 1.25vw;
  white-space: pre-line;
`;

interface StartModalContentsProps {
  introduction: Introduction;
}
const StartModalContents = ({ introduction }: StartModalContentsProps) => {
  return introduction.contents ? (
    <ContentsContainer align={introduction.contentsAlign || "horizontal"}>
      {introduction.contents.map((content, index) => (
        <div key={index}>
          <IconCheckYellow color={colorPalette.modalCheckIcon} />
          <ModalDescription key={index}>{content}</ModalDescription>
        </div>
      ))}
    </ContentsContainer>
  ) : (
    <></>
  );
};

export default StartModalContents;
