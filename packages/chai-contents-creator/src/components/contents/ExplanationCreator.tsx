import styled from "@emotion/styled";
import {
  ExplanationContainer,
  ExplanationHtmlCss,
  ExplanationText,
  ExplanationTextBox,
  ExplanationTitle,
  InfoWrapper,
  OIcon,
  OXWrapper,
  XIcon,
} from "chai-ui";
import React, { useState } from "react";
import ButtonCreator from "../atoms/ButtonCreator";
import TextCreator from "../molecules/TextCreator";

const ExplanationWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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
  const { correctMessage, wrongMessage, text } = explanation;

  return (
    <ExplanationWrapper>
      <ExplanationContainer>
        <ExplanationTextBox>
          <ExplanationText isText={!!text}>
            <InfoWrapper>
              <OXWrapper>{isCorrectMode ? <OIcon /> : <XIcon />}</OXWrapper>
              <ExplanationTitle>
                {isCorrectMode ? (
                  <TextCreator
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
                  <TextCreator
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
            <TextCreator
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
          </ExplanationText>
        </ExplanationTextBox>
        <ButtonCreator onClick={() => setIsCorrectMode(!isCorrectMode)}>
          {isCorrectMode ? "오답화면으로 변경" : "정답화면으로 변경"}
        </ButtonCreator>
      </ExplanationContainer>
    </ExplanationWrapper>
  );
};

export default ExplanationCreator;
