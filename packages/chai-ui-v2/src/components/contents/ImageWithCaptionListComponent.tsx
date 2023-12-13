import styled from "@emotion/styled";
import React, { useMemo, useState } from "react";
import { ImageWithCaptionListContentData } from "../../core";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import { ModalImage } from "../modal";

export interface ImageWithCaptionListProps {
  contents: ImageWithCaptionListContentData;
}

export const CaptionListImage = styled.img`
  border-radius: 1vmin;
  -webkit-user-drag: none;
  cursor: pointer;
  width: calc((20vh * 4) / 3);
  height: 20vh;
  object-fit: cover;
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
        <div key={imageWithCaptionIndex} className="image-with-caption-list">
          <div className="image-with-caption-wrapper d-flex flex-direction-column">
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
          </div>
        </div>
      );
    });
  }, [contents.data]);

  return (
    <div className="flex-justify-center gap-3">
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

export default ImageWithCaptionListComponent;
