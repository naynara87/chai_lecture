import React from "react";
import { characterType } from "../../core";
import useCharacterMapper from "../../core/hooks/useCharacterMapper";

interface ImgCharacterComponentProps {
  characterType: characterType;
  characterAlt: string;
  imgSrc?: string;
}

const ImgCharacterComponent = ({
  characterType,
  characterAlt,
  imgSrc,
}: ImgCharacterComponentProps) => {
  const { getCharacterSrc } = useCharacterMapper();

  return (
    <img
      src={imgSrc ? imgSrc : getCharacterSrc(characterType)}
      alt={characterAlt}
      className="img"
    ></img>
  );
};

export default ImgCharacterComponent;
