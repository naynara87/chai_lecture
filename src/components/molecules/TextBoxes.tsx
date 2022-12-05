import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { TextBoxesData } from "../../types/templateContents";
import { breakPoints } from "../../constants/layout";
import { SerializedStyles } from "@emotion/react";
import TextBox from "../atoms/TextBox";
import HtmlContentComponent from "./HtmlContentComponent";
import { changePXtoVW } from "../../utils/styles";

interface TextCardGrpProps {
  customCss?: SerializedStyles;
}
interface TextBoxesWrapperProps {
  customCss?: SerializedStyles;
}

const TextBoxesWrapper = styled.div<TextBoxesWrapperProps>`
  width: ${changePXtoVW(600)};
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  ${(props) => props.customCss}
`;

const TextCardGrp = styled.div<TextCardGrpProps>`
  display: inline-block;
  text-align: center;
  color: #3c3c3c;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.horizontal {
    display: flex;
    flex-direction: row;
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
  customBoxContainerCss?: SerializedStyles;
  customDescriptionCss?: SerializedStyles;
}

const TextBoxes = ({
  datas,
  isHorizontal,
  customBoxCss,
  customBoxWrapperCss,
  customBoxContainerCss,
  customDescriptionCss,
}: TextBoxesProps) => {
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
            <HtmlContentComponent
              html={textBox.description ?? ""}
              customCss={customDescriptionCss}
            />
          </MeaningText>
        </TextCardGrp>
      );
    });
  }, [customBoxWrapperCss, datas, isHorizontal, customBoxCss, customDescriptionCss]);

  return <TextBoxesWrapper customCss={customBoxContainerCss}>{renderTextBoxes}</TextBoxesWrapper>;
};

export default TextBoxes;
