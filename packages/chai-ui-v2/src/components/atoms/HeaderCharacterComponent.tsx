import React, { useEffect, useState } from "react";
// import kkungiHeaderGif from "../../assets/images/img/cha_kkungi_header.gif";
import kkungiHeaderPng from "../../assets/images/img/cha_kkungi_header.png";
import { ID, viewAssets } from "../../core";

interface HeaderCharacterComponentProps {
  cornerId: ID;
}

const HeaderCharacterComponent = ({
  cornerId,
}: HeaderCharacterComponentProps) => {
  const [gifSrc, setGifSrc] = useState(kkungiHeaderPng);

  useEffect(() => {
    setGifSrc(kkungiHeaderPng);
    setTimeout(() => {
      setGifSrc(viewAssets.kkungiHeader);
    }, 0);
  }, [cornerId]);

  return <img src={gifSrc} alt="꿍이" className="img"></img>;
};

export default HeaderCharacterComponent;
