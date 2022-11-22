import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

interface ImageComponentProps {
  customCss: SerializedStyles;
}
const ImageComponent = styled.img<ImageComponentProps>`
  ${(props) => props.customCss}
`;

interface ImageContentComponentProps {
  imageSrc: string;
  imageAlt: string;
  filter: string;
  customCss: SerializedStyles;
}
const ImageContentComponent = ({
  imageSrc,
  imageAlt,
  filter,
  customCss,
}: ImageContentComponentProps) => {
  return (
    <ImageComponent
      src={imageSrc}
      alt={imageAlt}
      style={{ filter: filter }}
      customCss={customCss}
    />
  );
};

export default ImageContentComponent;
