import React from "react";
import ImgTemp01 from "../../images/img/temp_profile01.png";

interface ImgTemp01ComponentProps {
  imageAlt?: string;
}

const ImgTemp01Component = ({ imageAlt }: ImgTemp01ComponentProps) => {
  return <img src={ImgTemp01} alt={imageAlt} className="profile" />;
};

export default ImgTemp01Component;
