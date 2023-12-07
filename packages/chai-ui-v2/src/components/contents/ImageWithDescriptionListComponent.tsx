import styled from "@emotion/styled";
import React, { useMemo, useState } from "react";
import { ImageWithDescriptionListContentData } from "../../core";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import { ModalImage } from "../modal";

export interface ImageWithDescriptionListProps {
  contents: ImageWithDescriptionListContentData;
}

const ImageWithDescriptionListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageWithDescriptionList = styled.div`
  margin-bottom: 5vmin;
`;

const ListImage = styled.img`
  flex-shrink: 0;
  width: calc((20vh * 4) / 3);
  height: 20vh;
  margin-right: 4vmin;
  border-radius: 1vmin;
  -webkit-user-drag: none;
  cursor: pointer;
  object-fit: cover;
`;

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
          <ImageWithDescriptionList key={imageWithDescriptionIndex}>
            <ImageWithDescriptionWrapper className="image-with-description-wrapper">
              <ListImage
                src={imageWithDescription.src}
                alt=""
                onClick={() => {
                  handleClickModalOpen(imageWithDescription.src);
                }}
              />
              <HtmlContentComponent html={imageWithDescription.description} />
            </ImageWithDescriptionWrapper>
          </ImageWithDescriptionList>
        );
      },
    );
  }, [contents.data]);

  return (
    <ImageWithDescriptionListWrapper>
      {imageWithDescriptionList}
      <ModalImage
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        imageSrc={imageSrc}
        isImageModal={true}
      />
    </ImageWithDescriptionListWrapper>
  );
};

export default ImageWithDescriptionListComponent;
