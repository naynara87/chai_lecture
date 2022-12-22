import React, { useCallback, useMemo } from "react";
import styled from "@emotion/styled";
import { MultiChoice } from "../../types/templateContents";
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
  boxLength: number;
}

const TextBoxesWrapper = styled.div<TextBoxesWrapperProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0 ${changePXtoVW(40)};
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
  cursor: pointer;

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

const SubText = styled.div`
  margin-top: ${changePXtoVH(32)};
`;

const subTextCss = css`
  font-size: ${changePXtoVW(30)};
  font-weight: 500;
  color: ${colorPalette.textBoxSub};
`;

const selectedBoxCss = css`
  background-color: ${colorPalette.dialogSelectedTextBox};
`;

interface TextBoxesProps {
  multiChoices: MultiChoice[];
  onClickTextBox: (choice: MultiChoice, index: number) => void;
  blankLength: number;
  userSelectedIndexes: (number | undefined)[];
}

const DialogTextBoxes = ({
  multiChoices,
  onClickTextBox,
  blankLength,
  userSelectedIndexes,
}: TextBoxesProps) => {
  const handleClickTextBox = useCallback(
    (index: number) => {
      if (userSelectedIndexes.length >= blankLength) {
        return;
      }

      onClickTextBox(multiChoices[index], index);
    },
    [multiChoices, onClickTextBox, blankLength, userSelectedIndexes],
  );

  const textBoxes = useMemo(() => {
    return multiChoices.map((textBox, dataIndex) => {
      const isSelectBox = userSelectedIndexes.findIndex((userSelect, index) => {
        return userSelect === dataIndex;
      });

      return (
        <TextCardGrp
          key={dataIndex}
          onClick={() => {
            handleClickTextBox(dataIndex);
          }}
        >
          <TextBox
            text={textBox.text}
            customBoxCss={isSelectBox !== -1 ? selectedBoxCss : undefined}
          />
          <SubText>
            <HtmlContentComponent html={textBox.pronunciation ?? ""} customCss={subTextCss} />
          </SubText>
        </TextCardGrp>
      );
    });
  }, [multiChoices, handleClickTextBox, userSelectedIndexes]);

  return <TextBoxesWrapper boxLength={multiChoices.length}>{textBoxes}</TextBoxesWrapper>;
};

export default DialogTextBoxes;
