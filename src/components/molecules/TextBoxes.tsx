import React, { useCallback, useMemo } from "react";
import styled from "@emotion/styled";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import { TextBoxesData } from "../../types/templateContents";
import { breakPoints } from "../../constants/layout";
import { css, SerializedStyles } from "@emotion/react";

interface TextCardProps {
  customCss?: SerializedStyles;
}

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

const htmlCustomCss = css`
  white-space: nowrap;
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
  const divideTextToBrackets = (text: string) => {
    const firstBracketIndex = text.indexOf("(");
    const secondBracketIndex = text.indexOf(")");

    const firstText = text.slice(0, firstBracketIndex);
    const secondText = text.slice(firstBracketIndex, secondBracketIndex + 1);
    const thirdText = text.slice(secondBracketIndex, -1);

    return {
      firstText,
      secondText,
      thirdText,
    };
  };

  const renderDescription = useCallback((description: string) => {
    if (description.indexOf("(") >= 0) {
      const divideText = divideTextToBrackets(description);
      return (
        <>
          <HtmlContentComponent html={divideText.firstText ?? ""} />
          <HtmlContentComponent html={divideText.secondText ?? ""} />
          <HtmlContentComponent html={divideText.thirdText ?? ""} />
        </>
      );
    } else {
      return <HtmlContentComponent html={description ?? ""} />;
    }
  }, []);

  const renderTextBoxes = useMemo(() => {
    return datas.map((textBox, index) => {
      return (
        <TextCardGrp
          key={index}
          className={isHorizontal ? "horizontal" : ""}
          customCss={customBoxWrapperCss}
        >
          <TextCard className={isHorizontal ? "horizontal" : ""} customCss={customBoxCss}>
            <HtmlContentComponent html={textBox.main} customCss={htmlCustomCss} />
          </TextCard>
          <MeaningText className={isHorizontal ? "horizontal" : ""}>
            {textBox.description && renderDescription(textBox.description)}
          </MeaningText>
        </TextCardGrp>
      );
    });
  }, [customBoxCss, customBoxWrapperCss, datas, isHorizontal, renderDescription]);

  return <TextBoxesWrapper>{renderTextBoxes}</TextBoxesWrapper>;
};

export default TextBoxes;
