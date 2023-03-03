import styled from "@emotion/styled";
import React, { useMemo, useState } from "react";
import { ImageWithDescriptionListContentData } from "../../core";
import { vw, vh } from "../../styles";
import HtmlContentComponent from "../atoms/HtmlContentComponent";
import { ModalImage } from "../modal";

interface ImageWithDescriptionListProps {
  contents: ImageWithDescriptionListContentData;
}

const ImageWithDescriptionListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${vh(22)} ${vw(23)};
`;

const ImageWithDescriptionList = styled.div`
  margin-bottom: ${vh(40)};
`;

const ListImage = styled.img`
  max-width: ${vw(360)};
  margin-right: ${vw(43)};
  border-radius: ${vw(10)};
  -webkit-user-drag: none;
  cursor: pointer;
  height: fit-content;
`;

const ImageWithDescriptionWrapper = styled.div`
  display: flex;

  & > div {
    font-size: 28px;
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
            <ImageWithDescriptionWrapper>
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
