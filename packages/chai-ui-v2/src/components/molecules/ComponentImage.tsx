import styled from "@emotion/styled";
import React from "react";
import TempImage from "../../assets/images/img/temp_profile05.png";
import { vh, vw } from "../../assets";

const ImageComponent = styled.div`
  max-width: ${vw(600)};
  max-height: ${vh(337)};
  margin: 0 auto;
  border-radius: ${vw(10)};
  text-align: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ComponentImage = () => {
  return (
    <ImageComponent>
      <img src={TempImage} alt="예시이미지" />
    </ImageComponent>
  );
};

export default ComponentImage;
