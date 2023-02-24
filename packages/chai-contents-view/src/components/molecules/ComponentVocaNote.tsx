import React from "react";
import ImgKkyngi from "../../images/img/cha_kkungi_positive.png";
import IconSpeaker from "../../images/icon/icon_speaker_white.svg";

const ComponentVocaNote = () => {

  return (
    <div className="voca-bote-container">
      <h3 className="voca-title">새로운 단어<img src={ImgKkyngi} alt="" className="img" /></h3>
      <ul className="voca-list-wrap">
        {/* 반복영역 */}
        <li className="voca-list">
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
        </li>
        {/* end 반복영역 */}
      </ul>
    </div>
  );
};

export default ComponentVocaNote;