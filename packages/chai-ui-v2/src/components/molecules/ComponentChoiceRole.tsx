import styled from "@emotion/styled";
import React from "react";
import ImgTemp01 from "../../images/img/temp_profile01.png";
import ImgTemp02 from "../../images/img/temp_profile02.png";
import { ComponentButtonBorderMain, ComponentButtonFillBlack } from "../atoms";

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
            <img src={ImgTemp01} alt="레이" className="img" />
          </div>
          <p className="name">{"레이"}</p>
          <ComponentButtonFillBlack text={"선택"} />
        </li>
        {/* end 반복영역 */}
        <li className="choice-role-list">
          <div className="img-wrap">
            <img src={ImgTemp02} alt="왕리리" className="img" />
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
