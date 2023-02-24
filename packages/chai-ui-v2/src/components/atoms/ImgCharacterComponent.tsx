import React from "react";
import { characterType } from "../../core";
import useCharacterMapper from "../../core/hooks/useCharacterMapper";

interface ImgCharacterComponentProps {
  characterType: characterType;
  characterAlt: string;
}

const ImgCharacterComponent = ({
  characterType,
  characterAlt,
}: ImgCharacterComponentProps) => {
  const { getCharacterSrc } = useCharacterMapper();

  return (
    <img
      src={getCharacterSrc(characterType)}
      alt={characterAlt}
      className="img"
    ></img>
  );
};

export default ImgCharacterComponent;
