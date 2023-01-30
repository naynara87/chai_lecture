import styled from "@emotion/styled";
import React from "react";
import { ImagesContent } from "../../types/templateContents";
import ImageContentComponent from "./ImageContentComponent";

interface ImagesWrapperProps {
  isHorizontal?: boolean;
}

export const ImagesWrapper = styled.div<ImagesWrapperProps>`
  display: flex;
  flex-direction: ${(props) => (props.isHorizontal ? "column" : "row")};
  align-items: center;
  justify-content: center;
`;
interface ImageContentAdapterProps {
  content: ImagesContent;
}

const ImageContentAdapter = ({ content }: ImageContentAdapterProps) => {
  const { data } = content;

  return (
    <ImagesWrapper isHorizontal={content.options?.isHorizontal}>
      {data.map((imageData, index) => {
        return (
          <ImageContentComponent
            key={index}
            imageSrc={imageData.src}
            imageAlt={imageData.src}
            filter="none"
          />
        );
      })}
    </ImagesWrapper>
  );
};

export default ImageContentAdapter;
