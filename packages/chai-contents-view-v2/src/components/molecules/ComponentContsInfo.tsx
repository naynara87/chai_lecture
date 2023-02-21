import styled from "@emotion/styled";
import React from "react";
import ImgCharacter from "../../images/img/cha_didi_glasses.png";

// const ModalBase = styled.div`
// `;

const ComponentContsInfo = () => {
  return (
    <div className="cont-info-wrap">
      <div className="text-wrap">{ '지난 시간엔 성조의 변화에 대해 학습했어요. 내용이 맞으면 O, 틀리면 X를 선택하세요.' }</div>
      <div className="character-wrap">
        <img src={ImgCharacter} alt="" className="img" />
      </div>
    </div>
  );
};

export default ComponentContsInfo;
