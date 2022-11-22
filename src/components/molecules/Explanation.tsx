import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { footerHeightNormal } from "../../constants/layout";
import { colorPalette } from "../../styles/colorPalette";
import HtmlContentComponent from "../contents/HtmlContentComponent";
import OIcon from "../atoms/svg/OIcon";
import { css } from "@emotion/react";
import XIcon from "../atoms/svg/XIcon";

const ExplanationWrapper = styled.div`
  position: fixed;
  bottom: ${footerHeightNormal};
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ExplanationContainer = styled.div`
  width: 53%;
  min-width: 375px;
  max-width: 650px;
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 16px;
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: ${colorPalette.deepBlue};
  border-radius: 100%;
  padding: 15px;
  top: 0;
  right: 0;
  transform: translateX(-20%);
  background-image: url("${process.env.PUBLIC_URL}/images/icon/icon_close.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40%;
  cursor: pointer;
`;

const TextBox = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: 95%;
  padding: 10px 40px;
  background-position: left 3px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url("${process.env.PUBLIC_URL}/images/img/bg_answer_balloon.png");
`;

const ImageWrapper = styled.div`
  width: 50px;
  display: flex;
  flex-basis: flex-end;
`;

const OXWrapper = styled.div`
  width: 40px;
  min-width: 40px;
  height: 100%;
  padding-top: 4px;
  margin-right: 16px;
  display: flex;
  align-content: center;
`;

const ExplanationTextCss = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
`;

const Text = styled.div`
  padding-top: 12px;
  padding-bottom: 8px;
  ${ExplanationTextCss}
`;

const ExplanationHtmlCss = css`
  max-height: 50px;
  overflow: auto;
`;

interface ExplanationProps {
  explanationText: string;
  isCorrect: boolean;
  handleClickClose: () => void;
}
const Explanation = ({ explanationText, isCorrect, handleClickClose }: ExplanationProps) => {
  const iconUrl = useMemo(() => {
    if (isCorrect) {
      return `${process.env.PUBLIC_URL}/images/img/bg_right_character.png`;
    }
    return `${process.env.PUBLIC_URL}/images/img/bg_wrong_character.png`;
  }, [isCorrect]);

  const infoText = useMemo(() => {
    if (isCorrect) {
      return "정답입니다!";
    }
    return "오답입니다!";
  }, [isCorrect]);
  return (
    <ExplanationWrapper>
      <ExplanationContainer>
        <ImageWrapper>
          <img src={iconUrl} alt="" />
        </ImageWrapper>
        <TextBox>
          <OXWrapper>{isCorrect ? <OIcon /> : <XIcon />}</OXWrapper>
          <Text>
            <div>{infoText}</div>
            <HtmlContentComponent html={explanationText} customCss={ExplanationHtmlCss} />
          </Text>
          <CloseButton onClick={handleClickClose} />
        </TextBox>
      </ExplanationContainer>
    </ExplanationWrapper>
  );
};

export default Explanation;
