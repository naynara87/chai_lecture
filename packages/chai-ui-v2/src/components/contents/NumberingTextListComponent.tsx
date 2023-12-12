import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { NumberingTextListContentData } from "../../core";
import HtmlContentComponent from "../atoms/HtmlContentComponent";

interface NumberingTextProps {
  isWithSecondText: boolean;
}

const NumberingText = styled.div<NumberingTextProps>`
  width: ${(props) => (props.isWithSecondText ? "50%" : "100%")};
`;

export interface NumberingTextListComponentProps {
  contents: NumberingTextListContentData;
}

const NumberingTextListComponent = ({
  contents,
}: NumberingTextListComponentProps) => {
  const numberingTextList = useMemo(() => {
    return contents.data.map((numberingText, numberingTextIndex) => {
      return (
        <li className="numbering-list" key={numberingTextIndex}>
          <span className="number">{numberingTextIndex + 1}</span>
          {/* key설명 - 저작도구에서 text2의 입력이 없어 text2가 생성되지 않고, text1 width: 100% */}
          <div className="text numbering-text-list">
            <NumberingText
              isWithSecondText={numberingText.secondText ? true : false}
            >
              <HtmlContentComponent html={numberingText.firstText} />
            </NumberingText>
            {numberingText.secondText && (
              <NumberingText isWithSecondText={true}>
                <HtmlContentComponent html={numberingText.secondText} />
              </NumberingText>
            )}
          </div>
        </li>
      );
    });
  }, [contents.data]);

  return (
    <div className="numbering-wrapper">
      <ul className="numbering-list-wrap">{numberingTextList}</ul>
    </div>
  );
};

export default NumberingTextListComponent;
