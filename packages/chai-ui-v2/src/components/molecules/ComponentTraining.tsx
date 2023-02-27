import React from "react";
import ChaProfile01 from "../../images/img/cha_profile01.png";
import ChaProfile02 from "../../images/img/cha_profile02.png";
import ChaProfile03 from "../../images/img/cha_profile03.png";
import ChaProfile04 from "../../images/img/cha_profile04.png";

const ComponentTraining = () => {
  return (
    <div className="training-wrapper">
      <ul className="training-list-wrap">
        {/* 반복영역 */}
        <li className="training-list">
          <div className="gradi-wrap">
            <div className="gradi-conts-wrap">
              <div className="img-wrap">
                <img src={ChaProfile01} alt="" className="img" />
              </div>
              <p className="title">{'패턴 중국어'}</p>
            </div>
          </div>
          <div className="white-wrap">
            <p className="dot-text">{'好 hǎo 인사하기'}</p>
          </div>
        </li>
        {/* end 반복영역 */}
        <li className="training-list">
          <div className="gradi-wrap">
            <div className="gradi-conts-wrap">
              <div className="img-wrap">
                <img src={ChaProfile02} alt="" className="img" />
              </div>
              <p className="title">{'회화'}</p>
            </div>
          </div>
          <div className="white-wrap">
            <p className="dot-text">{'만남의 인사하기'}</p>
            <p className="dot-text">{'이름 묻고 답하기'}</p>
          </div>
        </li>
        <li className="training-list">
          <div className="gradi-wrap">
            <div className="gradi-conts-wrap">
              <div className="img-wrap">
                <img src={ChaProfile03} alt="" className="img" />
              </div>
              <p className="title">{'문법'}</p>
            </div>
          </div>
          <div className="white-wrap">
            <p className="dot-text">{'제3성의 성조 변화'}</p>
            <p className="dot-text">{'이름 묻고 답하기'}</p>
            <p className="dot-text">{'정도부사 很'}</p>
          </div>
        </li>
        <li className="training-list">
          <div className="gradi-wrap">
            <div className="gradi-conts-wrap">
              <div className="img-wrap">
                <img src={ChaProfile04} alt="" className="img" />
              </div>
              <p className="title">{'문화'}</p>
            </div>
          </div>
          <div className="white-wrap">
            <p className="dot-text">{'중국인의 성씨와 호칭'}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ComponentTraining;
