import styled from "@emotion/styled";
import React, { useState } from "react";
import OIcon from "../../atoms/svg/OIcon";
import XIcon from "../../atoms/svg/XIcon";
import {
  ExplanationContainer,
  ExplanationHtmlCss,
  ExplanationTitle,
  InfoWrapper,
  OXWrapper,
  Text,
  TextBox,
} from "../../molecules/Explanation";
import HtmlCreator from "./HtmlCreator";

const ExplanationWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 467px;
  height: 100px;
`;

type ExplanationData = {
  audio?: {
    src: string;
  };
  correctMessage?: string;
  wrongMessage?: string;
  text?: string;
};

interface ExplanationProps {
  id: string;
  focusEditor?: string;
  explanation?: ExplanationData;
  submitExplanationText: (text: string, keyName?: string) => void;
  handleFocusHtml?: (id?: string, type?: string, index?: number) => void;
}
const ExplanationCreator = ({
  id,
  focusEditor,
  explanation = { correctMessage: "", wrongMessage: "" },
  submitExplanationText,
  handleFocusHtml,
}: ExplanationProps) => {
  const [isCorrectMode, setIsCorrectMode] = useState(true);
  const { audio, correctMessage, wrongMessage, text } = explanation;

  return (
    <ExplanationWrapper>
      <ExplanationContainer>
        <TextBox>
          <Text isText={!!text}>
            <InfoWrapper>
              <OXWrapper>{isCorrectMode ? <OIcon /> : <XIcon />}</OXWrapper>
              <ExplanationTitle>
                {isCorrectMode ? (
                  <HtmlCreator
                    id={id + "correctMessage" + 0}
                    focusEditor={focusEditor}
                    html={correctMessage ?? ""}
                    onSubmitHtml={submitExplanationText}
                    keyName="correctMessage"
                    onClickHtml={() => {
                      if (!handleFocusHtml) return;
                      handleFocusHtml(id, "correctMessage", 0);
                    }}
                    textMaxLength={10}
                  />
                ) : (
                  <HtmlCreator
                    id={id + "wrongMessage" + 0}
                    focusEditor={focusEditor}
                    html={wrongMessage ?? ""}
                    onSubmitHtml={submitExplanationText}
                    keyName="wrongMessage"
                    onClickHtml={() => {
                      if (!handleFocusHtml) return;
                      handleFocusHtml(id, "wrongMessage", 0);
                    }}
                    textMaxLength={10}
                  />
                )}
              </ExplanationTitle>
              {/* <AudioButton isAudio={true} audioUrl={audio.src} customCss={audioCss} /> */}
            </InfoWrapper>
            <HtmlCreator
              id={id + "explanationText" + 0}
              focusEditor={focusEditor}
              html={explanation.text ?? ""}
              customCss={ExplanationHtmlCss}
              onSubmitHtml={submitExplanationText}
              keyName="text"
              onClickHtml={() => {
                if (!handleFocusHtml) return;
                handleFocusHtml(id, "explanationText", 0);
              }}
              textMaxLength={50}
            />
          </Text>
        </TextBox>
        <button onClick={() => setIsCorrectMode(!isCorrectMode)}>
          {isCorrectMode ? "오답화면으로 변경" : "정답화면으로 변경"}
        </button>
      </ExplanationContainer>
    </ExplanationWrapper>
  );
};

export default ExplanationCreator;
