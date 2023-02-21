import styled from "@emotion/styled";
import React from "react";
import ComponentButtonFillBlack from "./ComponentButtonFillBlack";
import ImgVoca from "../../images/img/img_voca.png";
import IconSpeaker from "../../images/icon/icon_speaker_white.svg";

const ModalBase = styled.div`
  .btns-wrap {
    .btn {
      /* 28px */
      font-size: 1.4vw;
    }
  }
`;


const LayoutModalVoca = () => {
  return (
    // 설명 - active가 되면 보임
    <ModalBase className="modal voca-modal">
      <div className="modal-bg"></div>
      <div className="modal-container base-modal">
        <div className="base-wrapper">
          {/* 제목영역 */}
          <div className="base-ttl">
            <div className="profile-img-wrap">
              <img src={ImgVoca} alt="" className="img" />
            </div>
            <div className="txt-wrap">
              <h2 className="ttl">새로운 단어</h2>
            </div>
          </div>
          {/* 내용영역 */}
          <div className="base-conts">
            <div className="voca-wrap">
              <p className="chinese">{'游泳'}</p>
              <p className="pinyin">{'yóuyǒng'}</p>
              <p className="mean">{'수영하다'}</p>
            </div>
            <button className="btn-icon">
              <div className="icon-wrap">
                <img src={IconSpeaker} alt="스피커모양" className="icon" />
              </div>
            </button>
          </div>

          <div className="btns-wrap">
            <ComponentButtonFillBlack text="확인" />
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default LayoutModalVoca;
