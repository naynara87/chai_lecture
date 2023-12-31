import React, { useMemo, useState } from "react";
import ChaProfile01 from "../../assets/images/img/cha_profile01.png";
import { Content } from "../../core";
import { ComponentButtonRadiFillMain, HtmlContentComponent } from "../atoms";

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

  const characterCardOff = useMemo(() => {
    if (!characterCard.modalContents || characterCard.modalContents.length < 1)
      return;
    if (isOpen) return;
    return "off";
  }, [characterCard.modalContents, isOpen]);

  return (
    <li className={`training-list ${characterCardOff}`}>
      <div className="gradi-wrap">
        <div className="gradi-conts-wrap">
          <div className="img-wrap overflow-hidden">
            <img
              src={
                characterCard.character.src
                  ? characterCard.character.src
                  : ChaProfile01
              }
              alt=""
              className="img"
            />
          </div>
          <p className="title">
            <HtmlContentComponent html={characterCard.title} />
          </p>
        </div>
      </div>
      <div className="white-wrap">
        <div className="text-wrap">
          <HtmlContentComponent html={characterCard.description} />
        </div>
        {characterCard.modalContents &&
          characterCard.modalContents.length > 0 && (
            <div className="btns-wrap">
              <ComponentButtonRadiFillMain
                text="학습 요약"
                onClickBtn={() => {
                  handleClickSummaryBtn(characterCard.modalContents);
                  setIsOpen(true);
                }}
              />
            </div>
          )}
      </div>
    </li>
  );
};

export default CharacterCardComponent;
