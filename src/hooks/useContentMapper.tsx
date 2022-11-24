import React from "react";
import AudioContentAdapter from "../components/contents/AudioContentAdapter";
import AudioRecorderAdapter from "../components/contents/AudioRecorderAdapter";
import ChooseText from "../components/contents/ChooseText";
import HtmlContentAdapter from "../components/contents/HtmlContentAdapter";
import ImageContentAdapter from "../components/contents/ImageContentAdapter";
import VideoContentAdapter from "../components/contents/VideoContentAdapter";
import { BottomContent, BottomContentType } from "../types/appData";
import {
  AudioContent,
  HtmlContent,
  ImagesContent,
  VideoContent,
  AudioRecordContent,
  ChooseTextContent,
} from "../types/templateContents";

const useContentMapper = () => {
  const getContentComponent = (content: BottomContent) => {
    const contentMapper: Record<BottomContentType, JSX.Element | JSX.Element[]> = {
      chooseText: <ChooseText contentData={content as ChooseTextContent} />,
      html: <HtmlContentAdapter content={content as HtmlContent} />,
      images: <ImageContentAdapter content={content as ImagesContent} />,
      video: <VideoContentAdapter content={content as VideoContent} />,
      audio: <AudioContentAdapter content={content as AudioContent} />,
      audioRecord: <AudioRecorderAdapter content={content as AudioRecordContent} />,
    };

    return contentMapper[content.type];
  };

  return { getContentComponent };
};

export default useContentMapper;
