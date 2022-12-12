import React from "react";
import styled from "@emotion/styled";
import { ListenWordData } from "../../types/templateContents";
import HtmlContentComponent from "../molecules/HtmlContentComponent";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import { colorPalette } from "../../styles/colorPalette";

interface WordsContentComponentProps extends ListenWordData {
  index: number;
  handleClickWordContent: (audioSrc: string, index: number) => void;
}

const TextCardGrp = styled.div`
  display: inline-block;
`;

const TextCard = styled.div`
  width: ${changePXtoVW(288)};
  height: ${changePXtoVH(106)};
  line-height: ${changePXtoVW(200)};
  margin: ${changePXtoVW(20)};
  padding: ${changePXtoVH(20)} 0;
  /* border: 1px solid color(gray2); */
  border: 1px solid ${colorPalette.textBoxBorder};
  border-radius: ${changePXtoVW(20)};
  font-size: ${changePXtoVW(60)};
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MeaningText = styled("div")`
  margin-top: ${changePXtoVH(32)};
  font-weight: 600;
  font-size: ${changePXtoVW(30)};
`;

const WordsContentComponent = (props: WordsContentComponentProps) => {
  const handleClickWorkContent = () => {
    if (props.audio) {
      props.handleClickWordContent(props.audio.src, props.index);
    }
  };
  return (
    <TextCardGrp>
      <TextCard onClick={handleClickWorkContent}>
        <HtmlContentComponent html={props.text} />
      </TextCard>
      {props.meaning && (
        <MeaningText>
          <HtmlContentComponent html={props.meaning} />
        </MeaningText>
      )}
    </TextCardGrp>
  );
};

export default WordsContentComponent;
