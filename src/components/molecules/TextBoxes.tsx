import React from "react";
import styled from "@emotion/styled";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import { TextBoxesData } from "../../types/templateContents";

interface TextBoxesProps {
  datas: TextBoxesData[];
}

const TextBoxesWrapper = styled.div`
  max-width: 528px;
  margin: 0 auto;
  @media all and (max-width: 1024px) {
    max-width: 51.6vw;
  }
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

/**
 * TODO: TP03F에서 props로 description이랑 description 위치를 받아서 구현
 * description 정렬
 * sub 확인
 */
const TextBoxes = ({ datas }: TextBoxesProps) => {
  return (
    <TextBoxesWrapper>
      {datas.map((item, index) => {
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
