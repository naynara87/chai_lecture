import React from "react";
import TempImage1 from "../../assets/images/img/temp_profile05.png";

const ComponentCultureList = () => {
  return (
    <div className="culture-list-wrapper">
      <ul className="culture-list-wrap">
        {/* 반복영역 */}
        <li className="culture-list">
          <div className="img-wrap">
            <img src={TempImage1} alt="" />
          </div>
          <p className="text">{`베이징 오리구이는 원래 ‘난징(南京) 오리구이’였다고 합니다. 14세기 주원장(朱元璋)은 명(明)나라를 세우면서 난징을 첫 수도로 정했습니다.`}</p>
        </li>
        {/* end 반복영역 */}
        <li className="culture-list">
          <div className="img-wrap">
            <img src={TempImage1} alt="" />
          </div>
          <p className="text">{`대롱을 꽂아 입으로 바람을 불어넣고 소스를 바른 후, 갈고리에 걸어 약 3~4시간 동안 훈제한 요리입니다.`}</p>
        </li>
      </ul>
    </div>
  );
};

export default ComponentCultureList;
