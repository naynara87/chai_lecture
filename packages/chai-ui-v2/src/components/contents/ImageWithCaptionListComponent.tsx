import styled from "@emotion/styled";
import React, { useMemo, useState } from "react";
import { ImageWithCaptionListContentData } from "../../core";
import { colorPalette } from "../../assets";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import { ModalImage } from "../modal";

export interface ImageWithCaptionListProps {
  contents: ImageWithCaptionListContentData;
}

const ImageWithCaptionListWrapper = styled.div`
  display: flex;
  gap: 3vmin;
  justify-content: center;
`;

export const CaptionListImage = styled.img`
  border-radius: 1vmin;
  -webkit-user-drag: none;
  cursor: pointer;
  width: calc((20vh * 4) / 3);
  height: 20vh;
  object-fit: cover;
`;

const ImageWithCaptionList = styled.div``;

const ImageWithCaptionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-top: 1vmin;
    font-size: 2vmin;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    color: ${colorPalette.gray800};
  }

  .caption-wrap {
    width: calc((20vh * 4) / 3);
  }
`;

const ImageWithCaptionListComponent = ({
  contents,
}: ImageWithCaptionListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  // const [isOneElement, setIsOneElement] = useState(false);
  const handleClickModalOpen = (url: string) => {
    setIsModalOpen(true);
    setImageSrc(url);
  };

  const imageWithDescriptionList = useMemo(() => {
    return contents.data.map((imageWithCaption, imageWithCaptionIndex) => {
      return (
        <ImageWithCaptionList
          key={imageWithCaptionIndex}
          className="image-with-caption-list"
        >
          <ImageWithCaptionWrapper className="image-with-caption-wrapper">
            <CaptionListImage
              src={imageWithCaption.src}
              alt=""
              onClick={() => {
                handleClickModalOpen(imageWithCaption.src);
              }}
            />
            {imageWithCaption.caption && (
              <div className="caption-wrap">
                <HtmlContentComponent html={imageWithCaption.caption} />
              </div>
            )}
          </ImageWithCaptionWrapper>
        </ImageWithCaptionList>
      );
    });
  }, [contents.data]);

  return (
    <ImageWithCaptionListWrapper>
      {imageWithDescriptionList}
      <ModalImage
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        imageSrc={imageSrc}
        isImageModal={true}
      />
    </ImageWithCaptionListWrapper>
  );
};

export default ImageWithCaptionListComponent;
