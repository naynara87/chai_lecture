import styled from "@emotion/styled";
import React from "react";
import TempImage1 from "../../assets/images/img/temp_profile05.png";
import TempImage2 from "../../assets/images/img/temp_profile04.png";
import { colorPalette } from "../../assets";

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 3vmin;
`;

const ImageComponent = styled.div`
  width: calc(50% - 1.5vmin);

  > img {
    width: 100%;
    border-radius: 1vmin;
  }

  .text {
    margin-top: 1.3vmin;
    font-size: 2.4vmin;
    color: ${colorPalette.gray800};
    text-align: center;
  }
`;

const ComponentImageMultiCaption = () => {
  return (
    <ImageContainer>
      <ImageComponent>
        <img src={TempImage1} alt="예시이미지" />
        <p className="text">{"베이징 오리구이"}</p>
      </ImageComponent>
      <ImageComponent>
        <img src={TempImage2} alt="예시이미지" />
        <p className="text">{"갈고리에 걸려 있는 베이징 오리구이"}</p>
      </ImageComponent>
      <ImageComponent>
        <img src={TempImage2} alt="예시이미지" />
        <p className="text">{"갈고리에 걸려 있는 베이징 오리구이"}</p>
      </ImageComponent>
    </ImageContainer>
  );
};

export default ComponentImageMultiCaption;
