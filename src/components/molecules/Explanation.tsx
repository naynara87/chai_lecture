import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { footerHeightNormal } from "../../constants/layout";
import { colorPalette } from "../../styles/colorPalette";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import OIcon from "../atoms/svg/OIcon";

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
  transform: translate3d(-10%, -25%, 0);
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
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 10px 30px;
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
  width: 50px;
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
  return (
    <ExplanationWrapper>
      <ExplanationContainer>
        {/* <HtmlContentComponent html={explanationText} /> */}
        <ImageWrapper>
          <img src={iconUrl} alt="" />
          {/* background-image: url("${process.env.PUBLIC_URL}/images/img/bg_wrong_character.png"); */}
        </ImageWrapper>
        <TextBox>
          <OXWrapper>
            <OIcon />
          </OXWrapper>
          <HtmlContentComponent html={explanationText} />
          <CloseButton onClick={handleClickClose} />
        </TextBox>
      </ExplanationContainer>
    </ExplanationWrapper>
  );
};

export default Explanation;
