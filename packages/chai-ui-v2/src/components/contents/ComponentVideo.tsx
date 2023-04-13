import React, { useCallback, useEffect, useRef } from "react";
import {
  usePageCompleted,
  useXapi,
  VideoContentData,
} from "../../core/index.js";
interface ComponentVideoProps {
  content: VideoContentData;
  isModal?: boolean;
}

const ComponentVideo = ({ content, isModal }: ComponentVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const { setPushCompletedPageComponents, setComponentCompleted } =
    usePageCompleted();

  const { xapiPlayed } = useXapi();

  useEffect(() => {
    if (isModal) return;
    setPushCompletedPageComponents("video", content.id);
  }, [setPushCompletedPageComponents, content.id, isModal]);

  const playedVideo = useCallback(() => {
    xapiPlayed("video", content.id, content.data.src);
    setComponentCompleted(content.id);
  }, [setComponentCompleted, content, xapiPlayed]);

  useEffect(() => {
    let videoRefValue: HTMLVideoElement | null = null;
    if (videoRef.current) {
      videoRefValue = videoRef.current;
      videoRefValue?.addEventListener("play", playedVideo);
    }
    return () => {
      videoRefValue?.removeEventListener("play", playedVideo);
    };
  }, [playedVideo]);

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
        ref={videoRef}
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
