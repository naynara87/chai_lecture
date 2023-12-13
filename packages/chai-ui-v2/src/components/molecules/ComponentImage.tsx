import React from "react";

interface ComponentImageProps {
  imageUrl: string;
}

const ComponentImage = ({ imageUrl }: ComponentImageProps) => {
  return (
    <div className="image-component">
      <img src={imageUrl} alt="예시이미지" />
    </div>
  );
};

export default ComponentImage;
