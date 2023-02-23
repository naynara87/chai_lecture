import styled from "@emotion/styled";
import React from "react";
import {
  ComponentButtonBorderMain,
  ComponentButtonFillBlack,
  ImgTemp01Component,
} from "../atoms";
import ImgTemp02Component from "../atoms/ImgTemp02Component";

const ChoiceRoleWrapper = styled.div`
  .btn-wrap {
    .btn {
      // 471px
      width: 23.55vw;
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
          <ComponentButtonFillBlack text={"선택"} />
        </li>
        {/* end 반복영역 */}
        <li className="choice-role-list">
          <div className="img-wrap">
            <ImgTemp02Component imageAlt="왕리리" />
          </div>
          <p className="name">{"왕리리"}</p>
          <ComponentButtonFillBlack text={"선택"} />
        </li>
      </ul>
      <div className="btn-wrap">
        <ComponentButtonBorderMain text={"다음 학습으로 넘어가기"} />
      </div>
    </ChoiceRoleWrapper>
  );
};

export default ComponentChoiceRole;
