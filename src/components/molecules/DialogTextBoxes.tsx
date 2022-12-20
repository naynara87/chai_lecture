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
  isChoice?: boolean;
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

  background-color: ${(props) => props.isChoice && colorPalette};

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

interface TextBoxesProps {
  datas: MultiChoice[];
  onClickTextBox: (data: MultiChoice) => void;
  userSelectedChoice: MultiChoice[];
}

const DialogTextBoxes = ({ datas, userSelectedChoice, onClickTextBox }: TextBoxesProps) => {
  const handleClickTextBox = useCallback(
    (index: number) => {
      onClickTextBox(datas[index]);
    },
    [onClickTextBox, datas],
  );

  const renderTextBoxes = useMemo(() => {
    return datas.map((textBox, index) => {
      return (
        <TextCardGrp
          key={index}
          onClick={() => {
            handleClickTextBox(index);
          }}
        >
          <TextBox text={textBox.text} />
          <SubText>
            <HtmlContentComponent html={textBox.pronunciation ?? ""} customCss={subTextCss} />
          </SubText>
        </TextCardGrp>
      );
    });
  }, [datas, handleClickTextBox]);

  return <TextBoxesWrapper boxLength={datas.length}>{renderTextBoxes}</TextBoxesWrapper>;
};

export default DialogTextBoxes;
