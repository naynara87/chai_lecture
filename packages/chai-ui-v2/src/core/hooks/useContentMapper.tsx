import React from "react";
import { ComponentVideo } from "../../components";
import AudioRecorder from "../../components/molecules/AudioRecorder";
import { Content, ContentType, VideoContentData } from "../types";

const useContentMapper = () => {
  const getContentComponent = (content: Content, contentIndex: number) => {
    const contentMapper: Record<ContentType, JSX.Element> = {
      video: (
        <ComponentVideo
          content={content as VideoContentData}
          key={contentIndex}
        />
      ),
      recorder: <AudioRecorder />,
    };

    return contentMapper[content.type];
  };

  return {
    getContentComponent,
  };
};

export default useContentMapper;
