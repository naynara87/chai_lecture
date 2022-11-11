import React from "react";
import styled from "@emotion/styled";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import { TextBoxesContent } from "../../types/templateContents";

interface TextBoxesProps {
  textBoxes: TextBoxesContent["data"];
}

const TextBoxesWrapper = styled.div`
  max-width: 435px;
  margin: 0 auto;
`;

const TextCardGrp = styled.div`
  display: inline-block;
`;

const TextCard = styled.div`
  width: 154px;
  height: 106px;
  line-height: 84px;
  margin: 11px;
  padding: 11px 0;
  border: 1px solid color(gray2);
  border-radius: 11px;
  font-size: 32px;
  -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  text-align: center;
  cursor: pointer;

  @media all and (max-width: 1024px) {
    width: 15vw;
    height: 10.4166666667vw;
    line-height: 8.3333333333vw;
    margin: 1.0416666667vw;
    border-radius: 1.0416666667vw;
    padding: 1.0416666667vw 0;
    font-size: 3.125vw;
  }
`;

const MeaningText = styled("div")`
  margin-top: 17px;
  font-weight: 600;
  font-size: 16px;

  @media all and (max-width: 1024px) {
    margin-top: 1.6666666667vw;
    font-size: 1.5625vw;
  }
`;

const TextBoxes = ({ textBoxes }: TextBoxesProps) => {
  return (
    <TextBoxesWrapper>
      {textBoxes.map((item, index) => {
        return (
          <TextCardGrp key={index}>
            <TextCard>
              <HtmlContentComponent html={item.main} />
            </TextCard>
            <MeaningText>
              <HtmlContentComponent html={item.description ?? ""} />
            </MeaningText>
          </TextCardGrp>
        );
      })}
    </TextBoxesWrapper>
  );
};

export default TextBoxes;
