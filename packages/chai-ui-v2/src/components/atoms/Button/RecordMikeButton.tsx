import React from "react";
import IconMikeButton from "./IconMikeButton";

interface RecordMikeButtonProps {
  onClickBtn?: () => void;
}

const RecordMikeButton = ({ onClickBtn }: RecordMikeButtonProps) => {
  return (
    <div className="record-btn-flex-wrap">
      <IconMikeButton onClickBtn={onClickBtn} />
      <p className="txt">녹음을 시작해보세요</p>
    </div>
  );
};

export default RecordMikeButton;
