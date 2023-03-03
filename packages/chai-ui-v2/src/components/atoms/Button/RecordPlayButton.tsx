import React from "react";
import IconPlayButton from "./IconPlayButton";
import IconReturnButton from "./IconReturnButton";

const RecordPlayButton = () => {
  return (
    <>
      <div className="record-btn-flex-wrap">
        <IconPlayButton active={false} />
        {/* <ComponentProgress progressDuration={3} /> */}
        <p className="txt">{"0:44"}</p>
      </div>
      <IconReturnButton />
    </>
  );
};

export default RecordPlayButton;
