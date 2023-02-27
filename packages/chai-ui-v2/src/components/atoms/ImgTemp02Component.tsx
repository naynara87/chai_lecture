import React from "react";
import ImgTemp01 from "../../images/img/temp_profile01.png";

interface ImgTemp02ComponentProps {
  imageAlt?: string;
}

const ImgTemp02Component = ({ imageAlt }: ImgTemp02ComponentProps) => {
  return <img src={ImgTemp01} alt={imageAlt} className="profile" />;
};

export default ImgTemp02Component;
