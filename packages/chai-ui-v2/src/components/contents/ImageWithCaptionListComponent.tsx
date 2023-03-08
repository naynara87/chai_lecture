import styled from "@emotion/styled";
import React, { useMemo, useState } from "react";
import { ImageWithCaptionListContentData } from "../../core";
import { vw, vh, colorPalette } from "../../assets";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import { ModalImage } from "../modal";

interface ImageWithCaptionListProps {
  contents: ImageWithCaptionListContentData;
}

const ImageWithCaptionListWrapper = styled.div`
  display: flex;
  gap: ${vw(30)};
  justify-content: center;
`;

const ListImage = styled.img`
  border-radius: ${vw(10)};
  -webkit-user-drag: none;
  cursor: pointer;
  width: calc((${vh(380)} * 4) / 3);
  height: ${vh(380)};
`;

const ImageWithCaptionList = styled.div`
  margin-bottom: ${vh(40)};
`;

const ImageWithCaptionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    margin-top: ${vh(13)};
    font-size: ${vw(24)};
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    color: ${colorPalette.gray800};
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
        <ImageWithCaptionList key={imageWithCaptionIndex}>
          <ImageWithCaptionWrapper className="image-with-caption-wrapper">
            <ListImage
              src={imageWithCaption.src}
              alt=""
              onClick={() => {
                handleClickModalOpen(imageWithCaption.src);
              }}
            />
            {imageWithCaption.caption && (
              <HtmlContentComponent html={imageWithCaption.caption} />
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
