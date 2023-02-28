import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { NumberingTextListContentData } from "../../core";
import { vh, vw } from "../../styles";
import HtmlContentComponent from "../atoms/HtmlContentComponent";

const NumberingTextListWrapper = styled.ol`
  width: 100%;
`;

interface NumberTextListProps {
  index: number;
}

const NumberTextList = styled.li<NumberTextListProps>`
  width: 100%;
  height: auto;
  display: flex;
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: ${vh(24)} ${vw(60)};
  margin-top: ${vh(24)};

  &:first-child {
    margin-top: 0;
  }

  &::before {
    content: "${(props) => props.index}";
    width: ${vw(36)};
    height: ${vw(36)};
    font-size: ${vw(24)};
    background-color: #7984c3;
    color: #f5f5f5;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    margin-right: ${vw(24)};
    margin-top: ${vh(4)};
  }
`;

const NumberingTextWrapper = styled.div``;

interface NumberingTextListComponentProps {
  contents: NumberingTextListContentData;
}

const NumberingTextListComponent = ({
  contents,
}: NumberingTextListComponentProps) => {
  const numberingTextList = useMemo(() => {
    return contents.data.map((numberingText, numberingTextIndex) => {
      return (
        <NumberTextList key={numberingTextIndex} index={numberingTextIndex + 1}>
          <NumberingTextWrapper>
            <HtmlContentComponent html={numberingText.firstText} />
            {numberingText.secondText && (
              <HtmlContentComponent html={numberingText.secondText} />
            )}
          </NumberingTextWrapper>
        </NumberTextList>
      );
    });
  }, [contents.data]);

  return (
    <NumberingTextListWrapper>{numberingTextList}</NumberingTextListWrapper>
  );
};

export default NumberingTextListComponent;
