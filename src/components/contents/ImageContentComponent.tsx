import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import ModalImage from "../modal/ModalImage";

interface ImageComponentProps {
  customCss?: SerializedStyles;
}
const ImageComponent = styled.img<ImageComponentProps>`
  cursor: pointer;
  -webkit-user-drag: none;
  width: 100%;
  max-width: 500px;
  height: 100%;
  object-fit: contain;
  ${(props) => props.customCss}
`;

interface ImageContentComponentProps {
  imageSrc: string;
  imageAlt: string;
  filter: string;
  customCss?: SerializedStyles;
}
const ImageContentComponent = ({
  imageSrc,
  imageAlt,
  filter,
  customCss,
}: ImageContentComponentProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <ModalImage isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} imageSrc={imageSrc} />
      <ImageComponent
        onClick={handleClickModalOpen}
        src={imageSrc}
        alt={imageAlt}
        style={{ filter: filter }}
        customCss={customCss}
      />
    </>
  );
};

export default ImageContentComponent;
