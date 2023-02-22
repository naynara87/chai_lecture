import React from "react";
import { ImgCharacterComponent } from "../atoms";

interface ComponentContsInfoProps {
  text: string;
}

// const ModalBase = styled.div`
// `;

const ComponentContsInfo = ({ text }: ComponentContsInfoProps) => {
  return (
    <div className="cont-info-wrap">
      <div className="character-wrapper">
        <div className="text-wrap">{text}</div>
        <div className="character-wrap">
          <ImgCharacterComponent />
        </div>
      </div>
    </div>
  );
};

export default ComponentContsInfo;
