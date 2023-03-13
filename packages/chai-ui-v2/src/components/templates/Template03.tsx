import React from "react";
import ComponentContsInfo from "../molecules/ComponentContsInfo";
import ImageWithCaptionListComponent from "../contents/ImageWithCaptionListComponent";

const Template03 = () => {
  return (
    <div className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">
        <ComponentContsInfo text="지난 시간엔 성조의 변화에 대해 학습했어요. 내용이 맞으면 O, 틀리면 X를 선택하세요." />
      </div>
      <div className="layout-panel wide-panel">
        <ImageWithCaptionListComponent
          contents={{
            id: "imgWithCaptionList",
            type: "imageWithCaptionList",
            data: [
              {
                src: "https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTFfNjEg/MDAxNTcwNzg1ODM3Nzc0.zxDXm20VlPdQv8GQi9LWOdPwkqoBdiEmf8aBTWTsPF8g.FqMQTiF6ufydkQxrLBgET3kNYAyyKGJTWTyi1qd1-_Ag.PNG.kkson50/sample_images_01.png?type=w800",
                caption: "1번 이미지 Caption",
              },
              {
                src: "https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTFfNjEg/MDAxNTcwNzg1ODM3Nzc0.zxDXm20VlPdQv8GQi9LWOdPwkqoBdiEmf8aBTWTsPF8g.FqMQTiF6ufydkQxrLBgET3kNYAyyKGJTWTyi1qd1-_Ag.PNG.kkson50/sample_images_01.png?type=w800",
                caption: "2번 이미지 Caption",
              },
              {
                src: "https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTFfNjEg/MDAxNTcwNzg1ODM3Nzc0.zxDXm20VlPdQv8GQi9LWOdPwkqoBdiEmf8aBTWTsPF8g.FqMQTiF6ufydkQxrLBgET3kNYAyyKGJTWTyi1qd1-_Ag.PNG.kkson50/sample_images_01.png?type=w800",
                caption: "2번 이미지 Caption",
              },
              {
                src: "https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTFfNjEg/MDAxNTcwNzg1ODM3Nzc0.zxDXm20VlPdQv8GQi9LWOdPwkqoBdiEmf8aBTWTsPF8g.FqMQTiF6ufydkQxrLBgET3kNYAyyKGJTWTyi1qd1-_Ag.PNG.kkson50/sample_images_01.png?type=w800",
                caption: "2번 이미지 Caption",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Template03;
