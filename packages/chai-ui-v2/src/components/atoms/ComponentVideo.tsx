import React from "react";
import { VideoContentData } from "../../core/index.js";
interface ComponentVideoProps {
  content: VideoContentData;
}

const ComponentVideo = ({ content }: ComponentVideoProps) => {
  return (
    <div className="container player-wrap">
      <video
        id="lx-player"
        className="video-js bubble vjs-16-9"
        controls
        preload="auto"
        playsInline
        data-setup='{ "controlBar": {"pictureInPictureToggle": false} }'
        src={content.data.src}
        disablePictureInPicture
      >
        <p className="vjs-no-js">
          영상 로드중 문제가 발생하였습니다. 영상을 시청하시려면 자바스크립트를
          활성화해주세요.{" "}
        </p>
      </video>
      <div className="subtitle" id="transcript"></div>
    </div>
  );
};

export default ComponentVideo;
