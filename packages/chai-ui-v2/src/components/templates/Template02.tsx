import React, { useState } from "react";
import LayoutModalVoca from "../modal/LayoutModalVoca";
import ImageWithCaptionListComponent from "../contents/ImageWithCaptionListComponent";

const Template02 = () => {
  const [isModalVocaOpen, setIsModalVocaOpen] = useState(false);

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

      <LayoutModalVoca
        isModalOpen={isModalVocaOpen}
        setIsModalOpen={setIsModalVocaOpen}
      />
    </div>
  );
};

export default Template02;
