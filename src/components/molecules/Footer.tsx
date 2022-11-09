import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../../styles/colorPalette";
import Button from "../atoms/Button";
import ArrowRightNavy from "../svg/ArrowRightNavy";
import { css } from "@emotion/react";
import Spacing from "../atoms/Spacing";
import CornerState from "../atoms/CornerState";
import { FooterCornerState } from "../../hooks/useFooterState";

const FooterContainer = styled.footer`
  background-color: ${colorPalette.deepBlue};
  color: ${colorPalette.white};
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 70px;
  padding: 0 43px;
`;

const CornerStateWrapper = styled.ul`
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
`;

interface ButtonTextArrowProps {
  left?: boolean;
}
const ButtonTextArrow = styled(Button)<ButtonTextArrowProps>`
  position: relative;
  height: auto;
  padding: 8px 24px;
  padding-right: 38px;
  background-color: ${(props) =>
    props.disabled ? colorPalette.disableBackground : colorPalette.white};
  color: ${(props) => (props.disabled ? colorPalette.disableText : colorPalette.deepBlue)};
  font-weight: 600;
  font-size: 12px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
`;

const arrowCss = css`
  transform: scale(0.6);
  position: absolute;
  margin-left: 10px;
  right: 16px;
`;

interface FooterProps {
  handleClickNext: () => void;
  isPageCompleted: boolean;
  cornerStateList: FooterCornerState[];
}
const Footer = ({ handleClickNext, isPageCompleted, cornerStateList }: FooterProps) => {
  const isLastPage = false;
  const isDisable = useMemo(() => {
    if (isLastPage) {
      return true;
    }
    return !isPageCompleted;
  }, [isPageCompleted, isLastPage]);

  return (
    <FooterContainer>
      {/* 이전 버튼 대신 영역 차지용 */}
      <Spacing width="80px" />
      <CornerStateWrapper>
        {/* TODO: corner 완료 여부 */}
        {cornerStateList.map((cornerState) => (
          <CornerState key={cornerState.id} state={cornerState.state} />
        ))}
      </CornerStateWrapper>
      <ButtonTextArrow type="button" onClick={handleClickNext} disabled={isDisable}>
        다음
        <ArrowRightNavy customCss={arrowCss} disabled={isDisable} />
      </ButtonTextArrow>
    </FooterContainer>
  );
};

export default Footer;
