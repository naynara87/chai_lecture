import styled from "@emotion/styled";
import React from "react";
import ImgCharacter from "../../images/img/cha_kkungi_smile.png";
import ComponentButtonBorderMain from "./ComponentButtonBorderMain";
import ComponentButtonFillBlack from "./ComponentButtonFillBlack";

// 임의 컬러. 대교측에서 색 변경 요청하여 230217 회의 이후 정해질 예정
// const RightColor = '#5BD37D';
// const WrongColor = '#EC5757';
const TextColor = "#222222";

const ModalBase = styled.div``;

const ModalBaseTitle = styled.div`
  .profile-img-wrap {
    /* 설명 - 오답일땐 오답 컬러, 정답일 땐 정답 컬러 */
    background-color: ${TextColor};
  }

  .ttl {
    /* 설명 - 오답일땐 오답 컬러, 정답일 땐 정답 컬러 */
    color: ${TextColor};
  }
`;

const ModalBaseContents = styled.div`
  /* 설명 - dec 의 height 가 36.3333333333vh(436px을 vh로 변경)이상일 때 추가됨 */
  align-items: flex-start;
`;

const LayoutModal = () => {
  return (
    // 설명 - active가 되면 보임
    <ModalBase className="modal">
      <div className="modal-bg"></div>
      <div className="modal-container base-modal">
        <div className="base-wrapper">
          {/* 제목영역 */}
          <ModalBaseTitle className="base-ttl">
            <div className="profile-img-wrap">
              <img src={ImgCharacter} alt="" className="img" />
            </div>
            <div className="txt-wrap">
              {/* 간지 */}
              <h2 className="ttl">{"타이틀 영역"}</h2>
              <p className="txt">{"서브 타이틀"}</p>
              {/* 설명 - 정답일 때 보일 문구 */}
              {/* <h2 className="ttl">做得好!</h2>
              <p className="txt">정답이에요!</p> */}
              {/* 설명 - 틀렸을 때 보일 문구 */}
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

          {/* 설명 - 버튼이 하나만 들어갈 수도 있음 */}
          <div className="btns-wrap">
            <ComponentButtonBorderMain text="자세한 설명 들으러 가기" />
            <ComponentButtonFillBlack text="확인" />
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default LayoutModal;
