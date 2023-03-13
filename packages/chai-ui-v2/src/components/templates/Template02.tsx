import React from "react";
import ImageWithCaptionListComponent from "../contents/ImageWithCaptionListComponent";

const Template02 = () => {
  return (
    <div className="layout-panel-wrap grid-h-5-5">
      <div className="layout-panel side-panel"></div>
      <div className="layout-panel wide-panel">
        <ImageWithCaptionListComponent
          contents={{
            id: "2",
            type: "imageWithCaptionList",
            data: [
              {
                src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
                caption: "1번 이미지 Caption",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Template02;
