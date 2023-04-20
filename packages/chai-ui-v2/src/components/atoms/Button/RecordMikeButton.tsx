import React from "react";
import IconMikeButton from "./IconMikeButton";

interface RecordMikeButtonProps {
  onClickBtn?: () => void;
}

const RecordMikeButton = ({ onClickBtn }: RecordMikeButtonProps) => {
  return (
    <>
      <IconMikeButton onClickBtn={onClickBtn} />
      <p className="txt">녹음을 시작해 보세요</p>
    </>
  );
};

export default RecordMikeButton;
