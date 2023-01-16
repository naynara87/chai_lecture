import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import { changePXtoVW } from "../../../utils/styles";

interface HtmlWrapperProps {
  customCss?: SerializedStyles;
}

const HtmlWrapper = styled.div<HtmlWrapperProps>`
  > h1 {
    font-size: ${changePXtoVW(64)};
  }

  > p {
    font-weight: 400;
    font-size: ${changePXtoVW(48)};
  }

  > h2 {
    font-weight: 400;
    font-size: ${changePXtoVW(48)};
  }

  > h4 {
    font-weight: 400;
    font-size: ${changePXtoVW(48)};
  }
  ${(props) => props.customCss}
`;

interface HtmlCreatorProps extends HtmlWrapperProps {
  html: string;
  onSubmitHtml: (event: React.FormEvent<HTMLFormElement>) => void;
  onClickHtml?: () => void;
}

const HtmlCreator = ({ html, customCss, onClickHtml, onSubmitHtml }: HtmlCreatorProps) => {
  const [isSave, setIsSave] = useState(false);
  const [text, setText] = useState(html);

  const handleFixedHtml = useCallback(() => {
    setIsSave(false);
  }, []);

  return (
    <>
      {isSave ? (
        <HtmlWrapper
          dangerouslySetInnerHTML={{ __html: text }}
          customCss={customCss}
          onClick={handleFixedHtml}
        ></HtmlWrapper>
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setIsSave(true);
            setText(text);
            onSubmitHtml(event);
          }}
        >
          <input type="text" onChange={(event) => setText(event.target.value)} value={text} />
        </form>
      )}
    </>
  );
};

export default HtmlCreator;
