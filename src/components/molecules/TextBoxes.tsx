import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { TextBoxesData } from "../../types/templateContents";
import { css, SerializedStyles } from "@emotion/react";
import TextBox from "../atoms/TextBox";
import HtmlContentComponent from "./HtmlContentComponent";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import { colorPalette } from "../../styles/colorPalette";

interface TextCardGrpProps {
  customCss?: SerializedStyles;
}
interface TextBoxesWrapperProps {
  customCss?: SerializedStyles;
  boxLength?: number;
}

export const TextBoxesWrapper = styled.div<TextBoxesWrapperProps>`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0 ${changePXtoVW(40)};
  width: ${(props) =>
    `${props.boxLength && props.boxLength > 4 ? changePXtoVW(1200) : changePXtoVW(1400)}`};
  margin: 0 auto;

  ${(props) => props.customCss}
`;

export const TextCardGrp = styled.div<TextCardGrpProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  color: #3c3c3c;
  text-align: center;

  > div:first-child {
    min-width: ${changePXtoVW(288)};
    width: auto;
    height: ${changePXtoVH(160)};
  }

  &.horizontal {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  ${(props) => props.customCss}
`;

export const SubText = styled.div`
  margin-top: ${changePXtoVH(32)};
`;

export const subTextCss = css`
  font-weight: 500;
  font-size: ${changePXtoVW(30)};
  color: ${colorPalette.textBoxSub};
`;

export const MeaningText = styled("div")`
  margin-top: ${changePXtoVH(32)};
  font-weight: 600;
  font-size: ${changePXtoVW(30)};

  &.horizontal {
    margin-top: 0;
    margin-left: ${changePXtoVW(17)};
    font-weight: 500;
    font-size: ${changePXtoVW(36)};
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
          <SubText>
            <HtmlContentComponent html={textBox.sub ?? ""} customCss={subTextCss} />
          </SubText>
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

  return (
    <TextBoxesWrapper customCss={customBoxContainerCss} boxLength={datas.length}>
      {renderTextBoxes}
    </TextBoxesWrapper>
  );
};

export default TextBoxes;
