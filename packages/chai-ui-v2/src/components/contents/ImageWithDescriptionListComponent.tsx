import styled from "@emotion/styled";
import React, { useMemo, useState } from "react";
import { ImageWithDescriptionListContentData } from "../../core";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import { ModalImage } from "../modal";

export interface ImageWithDescriptionListProps {
  contents: ImageWithDescriptionListContentData;
}

const ImageWithDescriptionWrapper = styled.div`
  display: flex;

  & > div {
    font-size: 2.4vmin;
    font-weight: 400;
    overflow-x: auto;
  }
`;

const ImageWithDescriptionListComponent = ({
  contents,
}: ImageWithDescriptionListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const handleClickModalOpen = (url: string) => {
    setIsModalOpen(true);
    setImageSrc(url);
  };

  const imageWithDescriptionList = useMemo(() => {
    return contents.data.map(
      (imageWithDescription, imageWithDescriptionIndex) => {
        return (
          <div className="mb-5" key={imageWithDescriptionIndex}>
            <ImageWithDescriptionWrapper className="image-with-description-wrapper">
              <img
                className="list-image"
                src={imageWithDescription.src}
                alt=""
                onClick={() => {
                  handleClickModalOpen(imageWithDescription.src);
                }}
              />
              <HtmlContentComponent html={imageWithDescription.description} />
            </ImageWithDescriptionWrapper>
          </div>
        );
      },
    );
  }, [contents.data]);

  return (
    <div className="d-flex flex-direction-column">
      {imageWithDescriptionList}
      <ModalImage
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        imageSrc={imageSrc}
        isImageModal={true}
      />
    </div>
  );
};

export default ImageWithDescriptionListComponent;
