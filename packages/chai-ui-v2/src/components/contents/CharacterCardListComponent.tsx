import React, { useMemo } from "react";
import { CharacterCardListContentData } from "../../core";
import ChaProfile01 from "../../assets/images/img/cha_profile01.png";

interface CharacterCardListComponentProps {
  contents: CharacterCardListContentData;
}

const CharacterCardListComponent = ({
  contents,
}: CharacterCardListComponentProps) => {
  const characterCards = useMemo(() => {
    return contents.data.map((characterCard, characterCardIndex) => {
      return (
        <li className="training-list" key={characterCardIndex}>
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
            <p className="dot-text">{characterCard.description}</p>
          </div>
          {/* TODO kjw 학습 요약 characterCard.modalContents 있을시 모달 콘텐츠 띄우기 */}
        </li>
      );
    });
  }, [contents.data]);

  return (
    <div className="training-wrapper">
      <ul className="training-list-wrap">{characterCards}</ul>
    </div>
  );
};

export default CharacterCardListComponent;
