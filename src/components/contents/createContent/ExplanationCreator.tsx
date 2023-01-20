import styled from "@emotion/styled";
import React, { useState } from "react";
import { footerHeightNormal } from "../../../constants/layout";
import { changePXtoVH } from "../../../utils/styles";
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
  /* position: fixed;
  top: auto;
  bottom: calc(${footerHeightNormal} + ${changePXtoVH(10)});
  left: 0; */
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
  explanation?: ExplanationData;
  submitExplanationText: (text: string, keyName?: string) => void;
}
const ExplanationCreator = ({
  explanation = { correctMessage: "", wrongMessage: "" },
  submitExplanationText,
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
                    html={correctMessage ?? ""}
                    onSubmitHtml={submitExplanationText}
                    keyName="correctMessage"
                  />
                ) : (
                  <HtmlCreator
                    html={wrongMessage ?? ""}
                    onSubmitHtml={submitExplanationText}
                    keyName="wrongMessage"
                  />
                )}
              </ExplanationTitle>
              {/* <AudioButton isAudio={true} audioUrl={audio.src} customCss={audioCss} /> */}
            </InfoWrapper>
            <HtmlCreator
              html={explanation.text ?? ""}
              customCss={ExplanationHtmlCss}
              onSubmitHtml={submitExplanationText}
              keyName="text"
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
