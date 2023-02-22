import styled from "@emotion/styled";
import React from "react";
import ComponentButtonFillBlack from "./ComponentButtonFillBlack";
import ImgVoca from "../../images/img/img_voca.png";
import IconClose from "../../images/icon/icon_close_black.svg";
import ComponentButtonPlay from "./ComponentButtonPlay";

const ModalBase = styled.div`
`;


const LayoutModalVoca = () => {
  return (
    // TODO: key설명 - active가 되면 보임
    <ModalBase className="modal voca-modal">
      <div className="modal-bg"></div>
      <div className="modal-container base-modal">
        {/* TODO: key설명 - 모달 닫기버튼 */}
        <button className="btn-close-modal">
          <img src={IconClose} alt="닫기" />
        </button>
        <div className="base-wrapper">
          {/* 제목영역 */}
          <div className="base-ttl">
            <div className="profile-img-wrap">
              <img src={ImgVoca} alt="" className="img" />
            </div>
            <div className="txt-wrap">
            </div>
          </div>
          {/* 내용영역 */}
          {/* TODO: key설명 - slide의 페이지 */}
          <div className="base-conts">
            <div className="voca-wrap">
              <p className="chinese">{'游泳'}</p>
              <p className="pinyin">{'yóuyǒng'}</p>
              <p className="mean">{'수영하다'}</p>
            </div>
            <ComponentButtonPlay />
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default LayoutModalVoca;
