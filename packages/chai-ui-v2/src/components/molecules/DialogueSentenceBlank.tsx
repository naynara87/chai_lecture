import React from "react";
import { ImgProfileDefaultComponent, ImgTemp01Component } from "../atoms";

const DialogueSentenceBlank = () => {
  return (
    <>
      {/* TODO: key설명 - 음성이 재생될 때 active 가 추가됨(화자표시 애니메이션) */}
      <li className="conversation-wrap active">
        <div className="img-wrap">
          {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
          <div className="img-round">
            <button className="btn-profile">
              <ImgProfileDefaultComponent />
            </button>
          </div>
        </div>
        <div className="txt-wrap">
          <p className="chinese">{"今天刮风，下雪，很冷。"}</p>
        </div>
      </li>
      {/* end speech bubble */}
      <li className="conversation-wrap">
        <div className="img-wrap">
          {/* TODO: key설명 - 누르면 단일 음성이 재생됨 */}
          <div className="img-round">
            <button className="btn-profile">
              <ImgTemp01Component />
            </button>
          </div>
        </div>
        <div className="txt-wrap">
          <p className="blank-gray">&nbsp;</p>
        </div>
      </li>
    </>
  );
};

export default DialogueSentenceBlank;
