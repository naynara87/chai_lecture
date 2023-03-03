import styled from "@emotion/styled";
import React from "react";
import { colorPalette } from "../../assets";
import ComponentButtonRadiBorderMain from "../atoms/ComponentButtonRadiBorderMain";
import ComponentButtonRadiFillMain from "../atoms/ComponentButtonRadiFillMain";
import ModalCommon from "./ModalCommon";
import CharacterProfile from "../../assets/images/img/cha_profile01.png";

// 임의 컬러. 대교측에서 색 변경 요청하여 230217 회의 이후 정해질 예정
// const RightColor = "#5BD37D";
// const WrongColor = "#EC5757";
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

interface LayoutModalSolutionProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LayoutModalSolution = ({
  isModalOpen,
  setIsModalOpen,
}: LayoutModalSolutionProps) => {
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
          <h2 className="ttl">{"타이틀 영역"}</h2>
          <p className="txt">{"서브 타이틀"}</p>
          {/* NOTE: 설명 - 정답일 때 보일 문구 */}
          {/* <h2 className="ttl">做得好!</h2>
              <p className="txt">정답이에요!</p> */}
          {/* NOTE: 설명 - 틀렸을 때 보일 문구 */}
          {/* <h2 className="ttl">真难过!</h2>
              <p className="txt">아쉬워요!</p> */}
        </div>
      </ModalBaseTitle>
      {/* 내용영역 */}
      <ModalBaseContents className="base-conts">
        <div className="dec">
          {
            "제3성이 연이어 나오면, 앞에 있는 제3성은 제2성으로 발음합니다. 이 때, 성조의 표기는 바뀌지 않습니다."
          }
        </div>
      </ModalBaseContents>

      {/* NOTE: 설명 - 버튼이 하나만 들어갈 수도 있음 */}
      <div className="btns-wrap">
        <ComponentButtonRadiBorderMain text="자세한 설명 들으러 가기" />
        <ComponentButtonRadiFillMain text="확인" />
      </div>
    </ModalCommon>
  );
};

export default LayoutModalSolution;
