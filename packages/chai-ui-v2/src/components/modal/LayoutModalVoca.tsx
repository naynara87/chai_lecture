import styled from "@emotion/styled";
import React from "react";
import { ModalCommon } from "chai-ui-v2";
import ImgVocaComponent from "../atoms/ImgVocaComponent";
import IconSpeakerComponent from "../atoms/IconSpeakerComponent";
import { ComponentButtonFillBlack } from "../atoms";

const BtnWrapper = styled.div`
  .btn {
    /* 28px */
    font-size: 1.4vw;
  }
`;

interface LayoutModalVocaProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LayoutModalVoca = ({
  isModalOpen,
  setIsModalOpen,
}: LayoutModalVocaProps) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    // NOTE: 설명 - active가 되면 보임
    <ModalCommon open={isModalOpen} onClose={handleClose}>
      {/* 제목영역 */}
      <div className="base-ttl">
        <div className="profile-img-wrap">
          <ImgVocaComponent />
        </div>
        <div className="txt-wrap">
          <h2 className="ttl">새로운 단어</h2>
        </div>
      </div>
      {/* 내용영역 */}
      <div className="base-conts">
        <div className="voca-wrap">
          <p className="chinese">{"游泳"}</p>
          <p className="pinyin">{"yóuyǒng"}</p>
          <p className="mean">{"수영하다"}</p>
        </div>
        <button className="btn-icon">
          <div className="icon-wrap">
            <IconSpeakerComponent />
          </div>
        </button>
      </div>

      <BtnWrapper className="btns-wrap">
        <ComponentButtonFillBlack text="확인" />
      </BtnWrapper>
    </ModalCommon>
  );
};

export default LayoutModalVoca;
