import styled from "@emotion/styled";
import React from "react";

const ImageComponent = styled.div`
  max-width: 60vmin;
  max-height: 34vmin;
  margin: 0 auto;
  border-radius: 1vmin;
  text-align: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

interface ComponentImageProps {
  imageUrl: string;
}

const ComponentImage = ({ imageUrl }: ComponentImageProps) => {
  return (
    <ImageComponent>
      <img src={imageUrl} alt="예시이미지" />
    </ImageComponent>
  );
};

export default ComponentImage;
