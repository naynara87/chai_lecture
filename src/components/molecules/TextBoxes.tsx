import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { TextBoxesData } from "../../types/templateContents";
import { SerializedStyles } from "@emotion/react";
import TextBox from "../atoms/TextBox";
import HtmlContentComponent from "./HtmlContentComponent";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";

interface TextCardGrpProps {
  customCss?: SerializedStyles;
}
interface TextBoxesWrapperProps {
  customCss?: SerializedStyles;
}

const TextBoxesWrapper = styled.div<TextBoxesWrapperProps>`
  width: ${changePXtoVW(944)};
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

  > div:first-child {
  min-width: ${changePXtoVW(288)};
  height: ${changePXtoVH(160)};
}

  &.horizontal {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  ${(props) => props.customCss}
`;

const MeaningText = styled("div")`
  margin-top: ${changePXtoVH(32)};
  font-weight: 600;
  font-size: ${changePXtoVW(30)};

  &.horizontal {
    margin-top: 0;
    font-size: ${changePXtoVW(36)};
    margin-left: ${changePXtoVW(17)};
    font-weight: 500;
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
