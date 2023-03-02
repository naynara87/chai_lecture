import { css } from "@emotion/react";
import styled from "@emotion/styled";

const buttonCSS = css`
  background: white;
  box-shadow: none;
  border: 1px solid #d6d6d6;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  color: #565656;
`;

export const CreateTemplateWrap = styled.div`
  display: flex;
  padding: 40px 24px;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh;
`;

export const CreateEditTop = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
`;

export const BtnChangeLayout = styled.button`
  ${buttonCSS}
  margin-right: 8px;
`;

export const BtnPreview = styled.button`
  ${buttonCSS}
`;
export const BtnAddGanjiChange = styled.button`
  ${buttonCSS}
  margin-left: auto;
`;

export const CreateEditMainWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const CreateTemplateNavWrap = styled.div`
  text-align: left;
  position: absolute;
  height: 300px;
  width: 280px;
  overflow-y: scroll;
  box-shadow: 2px 6px 12px #00000026;
  padding: 16px;
  right: 0;
  transform: translateY(-100%);
  background-color: #ffffff;
  display: none;
  transition: all 0.2s;

  .nav-tit {
    font-size: 12px;
    font-weight: 500;
    color: #565656;
    margin-bottom: 10px;
  }

  &.active {
    transform: translateY(0%);
    display: block;
  }
`;

export const NavList = styled.ul`
  .nav-li {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  .thumb-comp {
    width: 50px;
    height: 50px;
    font-size: 12px;
    font-weight: 700;
    background-color: #d9d9d9;
    line-height: 50px;
    text-align: center;
    border-radius: 4px;
    margin-right: 8px;
  }
  .txt-comp {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const CreateTemplateChoiceBtnWrap = styled.div`
  margin-left: auto;
  text-align: right;
  position: relative;

  .btn-comp-select {
    margin-bottom: 8px;
  }
`;

export const DashBoxArea = styled.div`
  width: 100%;
  border: 2px dashed #888888;
  padding: 16px;
`;

export const CreateTemplateNav = styled.div`
  margin-bottom: 14px;
`;
export const CreateEditMain = styled.div`
  display: flex;
  padding: 24px;
  box-sizing: border-box;
  background-color: white;
  height: 502px;
  border-radius: 20px;
  box-shadow: 0px 4px 19px rgba(145, 145, 145, 0.2);
  width: 100%;

  margin-bottom: 24px;

  &:nth-of-type(1) {
    margin-right: 12px;
  }
  &:nth-of-type(2) {
    margin-left: 12px;
  }

  & .btn-comp-select {
    color: #7686d4;
    background: #ffffff;
    border-radius: 50px;
    border: 1px solid #dbe1ff;
    width: 90px;
    height: 30px;
    line-height: 30px;
    font-size: 10px;
    font-weight: 500;
  }
`;

export const CreateAddBtn = styled.button`
  background-color: #ffffff;
  height: 102px;
  box-shadow: 0px 4px 19px rgba(145, 145, 145, 0.2);
  border-radius: 20px;
  color: #888888;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;
