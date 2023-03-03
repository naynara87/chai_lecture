import styled from "@emotion/styled";
import React from "react";
import { PageIntroduction } from "../../core";
import { colorPalette } from "../../styles";
import ComponentButtonRadiFillMain from "../atoms/ComponentButtonRadiFillMain";
import ModalCommon from "./ModalCommon";
import CharacterProfile from "../../images/img/cha_profile01.png";

// const RightColor = "#30C17B";
// const WrongColor = "#EE8407";
// const TextColor = "#222222";

const ModalBaseTitle = styled.div`
  .ttl {
    /* NOTE: 설명 - 오답일땐 오답 컬러, 정답일 땐 정답 컬러 */
    color: ${colorPalette.black};
  }
`;

const ModalBaseContents = styled.div`
  /* NOTE: 설명 - dec 의 height 가 36.3333333333vh(436px을 vh로 변경)이상일 때 추가됨 */
  align-items: flex-start;
`;

interface LayoutModalIntroductionProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  introduction: PageIntroduction;
}

const LayoutModalIntroduction = ({
  isModalOpen,
  setIsModalOpen,
  introduction,
}: LayoutModalIntroductionProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    // NOTE: 설명 - active가 되면 보임
    <ModalCommon open={isModalOpen} onClose={handleClose}>
      {/* 제목영역 */}
      <ModalBaseTitle className="base-ttl">
        <div className="profile-img-wrap">
          <img src={CharacterProfile} alt="프로필" />
        </div>
        <div className="txt-wrap">
          {/* 간지 */}
          <h2 className="ttl">{introduction.title}</h2>
          <p className="txt">{introduction.subTitle}</p>
        </div>
      </ModalBaseTitle>
      {/* 내용영역 */}
      <ModalBaseContents className="base-conts">
        <div className="dec">{introduction.contents}</div>
      </ModalBaseContents>

      {/* NOTE: 설명 - 버튼이 하나만 들어갈 수도 있음 */}
      <div className="btns-wrap">
        <ComponentButtonRadiFillMain text="확인" onClickBtn={handleClose} />
      </div>
    </ModalCommon>
  );
};

export default LayoutModalIntroduction;
