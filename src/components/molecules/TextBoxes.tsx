import React from "react";
import styled from "@emotion/styled";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import { TextBoxesData } from "../../types/templateContents";
import { breakPoints } from "../../constants/layout";
import { css, SerializedStyles } from "@emotion/react";

interface TextCardProps {
  customCss?: SerializedStyles;
}

const TextBoxesWrapper = styled.div`
  max-width: 528px;
  margin: 0 auto;
  @media all and (max-width: ${breakPoints.tablet}) {
    max-width: 51.6vw;
  }
`;

const TextCardGrp = styled.div`
  display: inline-block;
  text-align: center;
  color: #3c3c3c;
  font-weight: 400;

  &.horizontal {
    display: flex;
    align-items: center;
  }
`;

const TextCard = styled.div<TextCardProps>`
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
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: ${breakPoints.tablet}) {
    width: 15vw;
    height: 10.4166666667vw;
    line-height: 8.3333333333vw;
    margin: 1.0416666667vw;
    border-radius: 1.0416666667vw;
    padding: 1.0416666667vw 0;
    font-size: 3.125vw;
  }

  ${(props) => props.customCss}
`;

const MeaningText = styled("div")`
  margin-top: 17px;
  font-weight: 600;
  font-size: 16px;

  &.horizontal {
    margin-top: 0;
    font-size: 24px;
    margin-left: 17px;
    font-weight: 500;
  }

  @media all and (max-width: ${breakPoints.tablet}) {
    margin-top: 1.6666666667vw;
    font-size: 1.5625vw;

    &.horizontal {
      font-size: 2.5625vw;
    }
  }
`;

const htmlCustomCss = css`
  white-space: nowrap;
`;
interface TextBoxesProps {
  datas: TextBoxesData[];
  isHorizontal?: boolean;
  customBoxCss?: SerializedStyles;
}
/**
 * TODO: TP03F에서 props로 description이랑 description 위치를 받아서 구현
 * description 정렬
 * sub 확인
 */
const TextBoxes = ({ datas, isHorizontal, customBoxCss }: TextBoxesProps) => {
  return (
    <TextBoxesWrapper>
      {datas.map((item, index) => {
        return (
          <TextCardGrp key={index} className={isHorizontal ? "horizontal" : ""}>
            <TextCard className={isHorizontal ? "horizontal" : ""} customCss={customBoxCss}>
              <HtmlContentComponent html={item.main} customCss={htmlCustomCss} />
            </TextCard>
            <MeaningText className={isHorizontal ? "horizontal" : ""}>
              <HtmlContentComponent html={item.description ?? ""} />
            </MeaningText>
          </TextCardGrp>
        );
      })}
    </TextBoxesWrapper>
  );
};

export default TextBoxes;
