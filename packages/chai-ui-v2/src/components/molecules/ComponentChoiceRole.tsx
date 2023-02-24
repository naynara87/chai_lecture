import styled from "@emotion/styled";
import React from "react";
import {
  ComponentButtonRadiBorderMain,
  ComponentButtonRadiFillMain,
  ImgTemp01Component,
} from "../atoms";
import ImgTemp02Component from "../atoms/ImgTemp02Component";

const ChoiceRoleWrapper = styled.div`
  .btn-wrap {
    text-align: center;
    .btn {
      // 471px
      width: 23.55vw;
      // 60px
      margin-top: 5vh;
    }
  }
`;

const ComponentChoiceRole = () => {
  return (
    <ChoiceRoleWrapper className="choice-role-wrapper">
      <ul className="choice-role-list-wrap">
        {/* 반복영역 */}
        <li className="choice-role-list active">
          <div className="img-wrap">
            <ImgTemp01Component imageAlt="레이" />
          </div>
          <p className="name">{"레이"}</p>
          <ComponentButtonRadiFillMain text={"선택"} />
        </li>
        {/* end 반복영역 */}
        <li className="choice-role-list">
          <div className="img-wrap">
            <ImgTemp02Component imageAlt="왕리리" />
          </div>
          <p className="name">{"왕리리"}</p>
          <ComponentButtonRadiFillMain text={"선택"} />
        </li>
      </ul>
      <div className="btn-wrap">
        <ComponentButtonRadiBorderMain text={"다음 학습으로 넘어가기"} />
      </div>
    </ChoiceRoleWrapper>
  );
};

export default ComponentChoiceRole;
