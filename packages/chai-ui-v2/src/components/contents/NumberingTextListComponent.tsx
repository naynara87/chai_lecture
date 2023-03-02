import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { NumberingTextListContentData } from "../../core";
import HtmlContentComponent from "../atoms/HtmlContentComponent";

const NumberingWrapper = styled.div`
  .text1 {
    /* TODO: key설명 - text2 에 글이 없으면 width: 100% */
    width: 50%;
  }

  .text2 {
    /* TODO: key설명 - 글이 없으면 생성되지 않음 */
    width: 50%;
  }
`;

interface NumberingTextListComponentProps {
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
          {/* TODO: key설명 - 저작도구에서 text2의 입력이 없어 text2가 생성되지 않고, text1 width: 100% */}
          <div className="text1" style={{ width: "100%" }}>
            <p className="chinese">
              <HtmlContentComponent html={numberingText.firstText} />
            </p>
            {numberingText.secondText && (
              <p className="pinyin">
                <HtmlContentComponent html={numberingText.secondText} />
              </p>
            )}
          </div>
        </li>
      );
    });
  }, [contents.data]);

  return (
    <NumberingWrapper className="numbering-wrapper">
      <ul className="numbering-list-wrap">{numberingTextList}</ul>
    </NumberingWrapper>
  );
};

export default NumberingTextListComponent;
