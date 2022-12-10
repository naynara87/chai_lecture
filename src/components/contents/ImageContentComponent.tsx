import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { changePXtoVW } from "../../utils/styles";
import ModalImage from "../modal/ModalImage";

interface ImageComponentProps {
  customCss?: SerializedStyles;
}
const ImageComponent = styled.img<ImageComponentProps>`
  cursor: pointer;
  width: 100%;
  max-width: ${changePXtoVW(500)};
  height: 100%;
  object-fit: contain;
  ${(props) => props.customCss}
`;

interface ImageContentComponentProps {
  imageSrc: string;
  imageAlt: string;
  filter: string;
  customCss?: SerializedStyles;
  isZoom?: boolean;
}
const ImageContentComponent = ({
  imageSrc,
  imageAlt,
  filter,
  customCss,
  isZoom = true,
}: ImageContentComponentProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickModalOpen = () => {
    if (!isZoom) {
      return;
    }
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
        draggable={false}
      />
    </>
  );
};

export default ImageContentComponent;
