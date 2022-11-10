import styled from "@emotion/styled";
import React from "react";
import { ImagesContent } from "../../types/templateContents";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

interface ImagesContentComponentProps {
  imagesContent: ImagesContent | undefined;
}
const ImagesContentComponent = ({ imagesContent }: ImagesContentComponentProps) => {
  return (
    <ImageContainer>
      {imagesContent ? (
        imagesContent.data.map((image, index) => <img key={index} src={image.src} alt={""} />)
      ) : (
        <>이미지 로딩 화면</>
      )}
    </ImageContainer>
  );
};

export default ImagesContentComponent;
