import React from "react";
import TempImage1 from "../../assets/images/img/temp_profile05.png";
import TempImage2 from "../../assets/images/img/temp_profile04.png";

const ComponentImageMultiCaption = () => {
  return (
    <div className="image-container flex-align-center flex-justify-start flex-wrap gap-3">
      <div className="image-component-multi-caption">
        <img src={TempImage1} alt="예시이미지" />
        <p className="text">{"베이징 오리구이"}</p>
      </div>
      <div className="image-component-multi-caption">
        <img src={TempImage2} alt="예시이미지" />
        <p className="text">{"갈고리에 걸려 있는 베이징 오리구이"}</p>
      </div>
      <div className="image-component-multi-caption">
        <img src={TempImage2} alt="예시이미지" />
        <p className="text">{"갈고리에 걸려 있는 베이징 오리구이"}</p>
      </div>
    </div>
  );
};

export default ComponentImageMultiCaption;
