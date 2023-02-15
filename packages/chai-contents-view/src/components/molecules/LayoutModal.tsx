import styled from "@emotion/styled";
import React from "react";
import ImgCharacter from "../../images/img/cha_kkungi_smile.png";

// 임의 컬러. 대교측에서 색 변경 요청하여 230217 회의 이후 정해질 예정
const RightColor = '#5BD37D';
const WrongColor = '#EC5757';

const ModalBase = styled.div`
`;

const GradeTitle = styled.div`
  .profile-img-wrap {
    /* TODO: 오답일땐 오답 컬러 */
    background-color: ${RightColor};
  }
  
  .ttl {
    /* TODO: 오답일땐 오답 컬러 */
    color: ${RightColor};
  }
`;

const GradeContents = styled.div`
  /* TODO: dec 의 height 가 36.3333333333vh(436px을 vh로 변경)이상일 때 추가됨 */
  align-items: flex-start;
`;


const LayoutModal = () => {
  return (
    // TODO: active가 되면 보임
    <ModalBase className="modal">
      <div className="modal-bg"></div>
      <div className="modal-container grade-modal">
        <div className="grade-wrapper">
          {/* 제목영역 */}
          <GradeTitle className="grade-ttl">
            <div className="profile-img-wrap">
              <img src={ImgCharacter} alt="" className="img" />
            </div>
            <div className="txt-wrap">
              {/* TODO: 정답일 때 보일 문구 */}
              <h2 className="ttl">做得好!</h2>
              <p className="txt">정답이에요!</p>
              {/* TODO: 틀렸을 때 보일 문구 */}
              {/* <h2 className="ttl">真难过!</h2>
              <p className="txt">아쉬워요!</p> */}
            </div>
          </GradeTitle>
          {/* 내용영역 */}
          <GradeContents className="grade-conts">
            <div className="dec">{ '제3성이 연이어 나오면, 앞에 있는 제3성은 제2성으로 발음합니다. 이 때, 성조의 표기는 바뀌지 않습니다.' }</div>
          </GradeContents>

            <div className="btns-wrap">
              <button className="btn-border-main" data-text="자세한 설명 들으러 가기"><span>자세한 설명 들으러 가기</span></button>
              <button className="btn-fill-black" data-text="확인"><span>확인</span></button>
            </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default LayoutModal;
