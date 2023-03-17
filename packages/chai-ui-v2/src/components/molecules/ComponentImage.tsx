import styled from "@emotion/styled";
import React from "react";
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

interface ComponentImageProps {
  imageUrl: string;
}

const ComponentImage = ({imageUrl}:ComponentImageProps) => {
  return (
    <ImageComponent>
      <img src={imageUrl} alt="예시이미지" />
    </ImageComponent>
  );
};

export default ComponentImage;
