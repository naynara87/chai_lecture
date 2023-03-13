import React from "react";

interface IconDictionaryButtonProps {
  onClickBtn?: () => void;
}

const IconDictionaryButton = ({ onClickBtn }: IconDictionaryButtonProps) => {
  return (
    <button className="btn-icon btn-dictionary" onClick={onClickBtn}>
      단어장켜기
    </button>
  );
};

export default IconDictionaryButton;
