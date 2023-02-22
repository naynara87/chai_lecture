import styled from "@emotion/styled";
import React from "react";
import ImgVoca from "../../images/img/img_voca.png";
import IconSpeaker from "../../images/icon/icon_speaker_white.svg";
import { ModalCommon } from "chai-ui-v2";
import ComponentButtonFillBlack from "../molecules/ComponentButtonFillBlack";
import ComponentButtonPlay from "../molecules/ComponentButtonPlay";

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
    <ModalCommon open={isModalOpen} onClose={handleClose}>
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
          <p className="chinese">{"游泳"}</p>
          <p className="pinyin">{"yóuyǒng"}</p>
          <p className="mean">{"수영하다"}</p>
        </div>
        <ComponentButtonPlay />
      </div>

      <BtnWrapper className="btns-wrap">
        <ComponentButtonFillBlack text="확인" />
      </BtnWrapper>
    </ModalCommon>
  );
};

export default LayoutModalVoca;
