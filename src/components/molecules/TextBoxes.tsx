import React, { useMemo } from "react";
import styled from "@emotion/styled";
import HtmlContentComponent from "../contents/HtmlContentComponent";
import { TextBoxesData } from "../../types/templateContents";
import { breakPoints } from "../../constants/layout";
import { SerializedStyles } from "@emotion/react";
import TextBox from "../atoms/TextBox";

interface TextCardGrpProps {
  customCss?: SerializedStyles;
}

const TextBoxesWrapper = styled.div`
  max-width: 528px;
  margin: 0 auto;
  @media all and (max-width: ${breakPoints.tablet}) {
    max-width: 51.6vw;
  }
`;

const TextCardGrp = styled.div<TextCardGrpProps>`
  display: inline-block;
  text-align: center;
  color: #3c3c3c;
  font-weight: 400;

  &.horizontal {
    display: flex;
    align-items: center;
  }

  ${(props) => props.customCss}
`;

const MeaningText = styled("div")`
  margin-top: 17px;
  font-weight: 600;
  font-size: 16px;

  &.horizontal {
    margin-top: 0;
    font-size: 22px;
    margin-left: 17px;
    font-weight: 500;
  }

  @media all and (max-width: ${breakPoints.tablet}) {
    margin-top: 1.6666666667vw;
    font-size: 1.5625vw;

    &.horizontal {
      font-size: 1.825vw;
    }
  }
`;

interface TextBoxesProps {
  datas: TextBoxesData[];
  isHorizontal?: boolean;
  customBoxCss?: SerializedStyles;
  customBoxWrapperCss?: SerializedStyles;
}

/**
 * TODO: TP03F에서 props로 description이랑 description 위치를 받아서 구현
 * description 정렬
 * sub 확인
 */
const TextBoxes = ({ datas, isHorizontal, customBoxCss, customBoxWrapperCss }: TextBoxesProps) => {
  const renderTextBoxes = useMemo(() => {
    return datas.map((textBox, index) => {
      return (
        <TextCardGrp
          key={index}
          className={isHorizontal ? "horizontal" : ""}
          customCss={customBoxWrapperCss}
        >
          <TextBox text={textBox.main} customBoxCss={customBoxCss} />
          <MeaningText className={isHorizontal ? "horizontal" : ""}>
            <HtmlContentComponent html={textBox.description ?? ""} />
          </MeaningText>
        </TextCardGrp>
      );
    });
  }, [customBoxWrapperCss, datas, isHorizontal, customBoxCss]);

  return <TextBoxesWrapper>{renderTextBoxes}</TextBoxesWrapper>;
};

export default TextBoxes;
