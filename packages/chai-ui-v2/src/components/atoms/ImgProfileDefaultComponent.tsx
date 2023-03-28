import React from "react";
import ImgProfileDefault from "../../assets/images/img/img_profile_default.png";

interface ImgProfileDefaultComponentProps {
  imageSrc?: string;
}
const ImgProfileDefaultComponent = ({
  imageSrc,
}: ImgProfileDefaultComponentProps) => {
  return <img src={imageSrc || ImgProfileDefault} alt="" className="profile" />;
};

export default ImgProfileDefaultComponent;
