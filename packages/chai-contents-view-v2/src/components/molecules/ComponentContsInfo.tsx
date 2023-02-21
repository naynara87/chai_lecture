import styled from "@emotion/styled";
import React from "react";
import ImgCharacter from "../../images/img/cha_didi_glasses.png";

interface ComponentContsInfoProps {
  text: String,
}

// const ModalBase = styled.div`
// `;

const ComponentContsInfo = ({text}: ComponentContsInfoProps) => {
  return (
    <div className="cont-info-wrap">
      <div className="character-wrapper">
        <div className="text-wrap">{ text }</div>
        <div className="character-wrap">
          <img src={ImgCharacter} alt="" className="img" />
        </div>
      </div>
    </div>
  );
};

export default ComponentContsInfo;
