import styled from "@emotion/styled";
import React from "react";
import TempImage1 from "../../images/img/didi_all.png";
import TempImage2 from "../../images/img/wini_all.png";
import { colorPalette, vw } from "../../assets";

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: ${vw(30)};
`;

const ImageComponent = styled.div`
  width: calc(50% - ${vw(15)});

  > img {
    width: 100%;
    border-radius: ${vw(10)};
  }

  .text {
    margin-top: ${vw(13)};
    font-size: ${vw(24)};
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
