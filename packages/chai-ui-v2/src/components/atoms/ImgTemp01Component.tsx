import React from "react";
import ImgTemp01 from "../../assets/images/img/temp_profile01.png";

interface ImgTemp01ComponentProps {
  imageSrc?: string;
  imageAlt?: string;
}

const ImgTemp01Component = ({
  imageSrc,
  imageAlt,
}: ImgTemp01ComponentProps) => {
  return <img src={imageSrc || ImgTemp01} alt={imageAlt} className="profile" />;
};

export default ImgTemp01Component;
