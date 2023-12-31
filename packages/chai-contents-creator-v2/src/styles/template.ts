import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { colorPalette } from "chai-ui-v2";

export const buttonCSS = css`
  background: white;
  box-shadow: none;
  border: 1px solid ${colorPalette.gray550};
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  color: ${colorPalette.gray900};
  :not(:last-child) {
    margin-right: 8px;
  }
`;

export const CreateTemplateWrap = styled.div`
  display: flex;
  padding: 40px 24px;
  flex-direction: column;
  background-color: ${colorPalette.gray100};
  min-height: 100vh;
`;

export const CreateTemplateInner = styled.div`
  position: relative;
`;

export const CreateEditTop = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
`;

export const PageHeaderLeft = styled.div`
  margin-left: auto;
`;

export const CreateEditMainWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface CreateTemplateNavWrapProps {
  customCSS?: SerializedStyles;
}
export const CreateTemplateNavWrap = styled.div<CreateTemplateNavWrapProps>`
  text-align: left;
  position: absolute;
  height: 300px;
  width: 280px;
  overflow-y: scroll;
  box-shadow: 2px 6px 12px #00000026;
  border: 16px solid ${colorPalette.white};
  border-radius: 16px;
  right: 0;
  background-color: ${colorPalette.white};
  display: none;
  transition: all 0.2s;
  z-index: 10;

  .nav-tit {
    font-size: 12px;
    font-weight: 500;
    color: ${colorPalette.gray900};
    margin-bottom: 10px;
  }

  &.active {
    display: block;
  }
  ${({ customCSS }) => customCSS}
`;

export const NavList = styled.ul`
  .nav-li {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    cursor: pointer;
  }

  .thumb-comp {
    width: 50px;
    height: 50px;
    font-size: 12px;
    font-weight: 700;
    line-height: 50px;
    text-align: center;
    border-radius: 4px;
    margin-right: 8px;
    border: 1px solid ${colorPalette.gray500};
  }
  .txt-comp {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const CreateTemplateChoiceBtnWrap = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  margin-left: auto;
  text-align: right;
  z-index: 10;

  .btn-comp-select {
    margin-bottom: 8px;
  }
`;

export const CreateTemplateNav = styled.div`
  :not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const CreateEditMain = styled.div`
  display: flex;
  padding: 24px;
  box-sizing: border-box;
  background-color: white;
  min-height: 502px;
  border-radius: 20px;
  box-shadow: 0px 4px 19px rgba(145, 145, 145, 0.2);
  width: 100%;
  margin-bottom: 24px;
  gap: 24px;

  & .btn-comp-select {
    color: ${colorPalette.purple700};
    background: ${colorPalette.white};
    border-radius: 2em;
    border: 1px solid #dbe1ff;
    max-width: 100px;
    width: 100px;
    padding: 0.5vmin;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const BtnSelectComponent = styled.button`
  width: 100px;
  padding: 0.5vmin;
  color: ${colorPalette.purple700};
  font-size: 12px;
  font-weight: 500;
  border: 1px solid #dbe1ff;
  border-radius: 2em;
  background: ${colorPalette.white};
`;

export const CreateAddBtn = styled.button`
  background-color: ${colorPalette.white};
  width: 100%;
  height: 102px;
  box-shadow: 0px 4px 19px rgba(145, 145, 145, 0.2);
  border-radius: 20px;
  color: ${colorPalette.gray700};
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;
