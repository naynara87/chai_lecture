import React from "react";
import { ImagesContent } from "../../types/templateContents";
import ImageContentComponent from "./ImageContentComponent";

interface ImageContentAdapterProps {
  content: ImagesContent;
}

const ImageContentAdapter = ({ content }: ImageContentAdapterProps) => {
  const { data } = content;

  return (
    <>
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
    </>
  );
};

export default ImageContentAdapter;
