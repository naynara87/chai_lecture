import React, { useState } from "react";
import ChaProfile01 from "../../assets/images/img/cha_profile01.png";
import { Content } from "../../core";
import { ComponentButtonRadiFillMain } from "../atoms";

interface CharacterCardComponentProps {
  characterCard: {
    title: string;
    description: string;
    modalContents?: Content[] | undefined;
    character: {
      src: string;
    };
  };
  handleClickSummaryBtn: (modalContents?: Content[]) => void;
}

const CharacterCardComponent = ({
  characterCard,
  handleClickSummaryBtn,
}: CharacterCardComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={`training-list ${isOpen ? "" : "off"}`}>
      <div className="gradi-wrap">
        <div className="gradi-conts-wrap">
          <div className="img-wrap">
            {/* TODO kjw cpm 이미지 데이터 받으면 아래 주석친 img태그로 변경 */}
            <img src={ChaProfile01} alt="" className="img" />
            {/* <img src={characterCard.character.src} alt="" className="img" /> */}
          </div>
          <p className="title">{characterCard.title}</p>
        </div>
      </div>
      <div className="white-wrap">
        <p className="text">{characterCard.description}</p>
        {characterCard.modalContents && (
          <ComponentButtonRadiFillMain
            text="학습 요약"
            onClickBtn={() => {
              handleClickSummaryBtn(characterCard.modalContents);
              setIsOpen(true);
            }}
          />
        )}
      </div>
    </li>
  );
};

export default CharacterCardComponent;
