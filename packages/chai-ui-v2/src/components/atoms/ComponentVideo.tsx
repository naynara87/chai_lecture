// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect } from "react";
import { VideoContentData } from "../../core/index.js";
import "../../core/lib/video/lx-player.js";

interface ComponentVideoProps {
  content: VideoContentData;
}

const ComponentVideo = ({ content }: ComponentVideoProps) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    lxPlayer.playerInit({
      url: content.data.src,
    });
  }, [content.data.src]);

  return (
    <div className="container player-wrap">
      <video
        id="lx-player"
        className="video-js bubble vjs-16-9"
        controls
        preload="auto"
        playsInline
        data-setup='{ "controlBar": {"pictureInPictureToggle": true} }'
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
