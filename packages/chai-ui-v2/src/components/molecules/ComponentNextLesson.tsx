import React from "react";
import profile01 from "../../assets/images/img/cha_profile01.png";
import profile03 from "../../assets/images/img/cha_profile02.png";
import profile02 from "../../assets/images/img/temp_profile01.png";
// import profile04 from "../../assets/images/img/temp_profile02.png";

const ComponentNextLesson = () => {
  return (
    <ul className="next-lesson-wrapper">
      <li className="lesson-list">
        <div className="text-bubble-wrap">{`동사 是를 활용한
표현을 할 수 있다.`}</div>
        <div className="img-wrap">
          <img src={profile01} alt="" />
        </div>
      </li>
      <li className="lesson-list">
        <div className="text-bubble-wrap">{`국적을 묻고
답할 수 있다.`}</div>
        <div className="img-wrap">
          <img src={profile02} alt="" />
        </div>
      </li>
      <li className="lesson-list">
        <div className="text-bubble-wrap">{`중국의 인사 문화에 대해
이해할 수 있다.`}</div>
        <div className="img-wrap">
          <img src={profile03} alt="" />
        </div>
      </li>
    </ul>
  );
};

export default ComponentNextLesson;
