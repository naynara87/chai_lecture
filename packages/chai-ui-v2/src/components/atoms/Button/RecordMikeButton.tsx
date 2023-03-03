import React from "react";
import IconMikeButton from "./IconMikeButton";

const RecordMikeButton = () => {
  return (
    <div className="record-btn-flex-wrap">
      <IconMikeButton />
      <p className="txt">녹음을 시작해보세요</p>
    </div>
  );
};

export default RecordMikeButton;
