import React from "react";
import ChaProfile01 from "../../assets/images/img/cha_profile01.png";
import ChaProfile02 from "../../assets/images/img/cha_profile02.png";
import ChaProfile03 from "../../assets/images/img/cha_profile03.png";
import ChaProfile04 from "../../assets/images/img/cha_profile04.png";
import { ComponentButtonRadiFillMain } from "../atoms";

const ComponentTraining = () => {
  return (
    <div className="training-wrapper">
      {/* TODO: key설명 - 학습 정리에서는 training-end 클래스 추가 */}
      <ul className="training-list-wrap training-end">
        {/* 반복영역 */}
        {/* TODO: key설명 - 학습 요약을 확인하지 않으면 off 클래스가 붙음 */}
        <li className="training-list">
          <div className="gradi-wrap">
            <div className="gradi-conts-wrap">
              <div className="img-wrap">
                <img src={ChaProfile01} alt="" className="img" />
              </div>
              <p className="title">{"패턴 중국어"}</p>
            </div>
          </div>
          <div className="white-wrap">
            <p className="text">{"好 hǎo 인사하기"}</p>
            <ComponentButtonRadiFillMain text="학습 요약" />
          </div>
        </li>
        {/* end 반복영역 */}
        {/* TODO: key설명 - 학습 요약을 확인하지 않으면 off 클래스가 붙음 */}
        <li className="training-list off">
          <div className="gradi-wrap">
            <div className="gradi-conts-wrap">
              <div className="img-wrap">
                <img src={ChaProfile02} alt="" className="img" />
              </div>
              <p className="title">{"회화"}</p>
            </div>
          </div>
          <div className="white-wrap">
            <p className="text">{"만남의 인사하기"}</p>
            <p className="text">{"이름 묻고 답하기"}</p>
            <ComponentButtonRadiFillMain text="학습 요약" />
          </div>
        </li>
        {/* TODO: key설명 - 학습 요약을 확인하지 않으면 off 클래스가 붙음 */}
        <li className="training-list off">
          <div className="gradi-wrap">
            <div className="gradi-conts-wrap">
              <div className="img-wrap">
                <img src={ChaProfile03} alt="" className="img" />
              </div>
              <p className="title">{"문법"}</p>
            </div>
          </div>
          <div className="white-wrap">
            <p className="text">{"제3성의 성조 변화"}</p>
            <p className="text">{"이름 묻고 답하기"}</p>
            <p className="text">{"정도부사 很"}</p>
            <ComponentButtonRadiFillMain text="학습 요약" />
          </div>
        </li>
        {/* TODO: key설명 - 학습 요약을 확인하지 않으면 off 클래스가 붙음 */}
        <li className="training-list off">
          <div className="gradi-wrap">
            <div className="gradi-conts-wrap">
              <div className="img-wrap">
                <img src={ChaProfile04} alt="" className="img" />
              </div>
              <p className="title">{"문화"}</p>
            </div>
          </div>
          <div className="white-wrap">
            <p className="text">{"중국인의 성씨와 호칭"}</p>
            <ComponentButtonRadiFillMain text="학습 요약" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ComponentTraining;
