import styled from "@emotion/styled";
import React from "react";
import { ImagesContent } from "../../types/templateContents";
import ChaiSkeleton from "../atoms/ChaiSkeleton";

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
        <ChaiSkeleton width={"100%"} height={275} />
      )}
    </ImageContainer>
  );
};

export default ImagesContentComponent;
