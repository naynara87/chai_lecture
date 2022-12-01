import React from "react";
import AudioContentAdapter from "../components/contents/AudioContentAdapter";
import AudioRecorderAdapter from "../components/contents/AudioRecorderAdapter";
import ChooseMediaTextAdapter from "../components/contents/ChooseMediaTextAdapter";
import ChooseText from "../components/contents/ChooseText";
import HtmlContentAdapter from "../components/contents/HtmlContentAdapter";
import IconTextAdapter from "../components/contents/IconTextAdapter";
import ImageContentAdapter from "../components/contents/ImageContentAdapter";
import TextBoxesAdapter from "../components/contents/TextBoxesAdapter";
import VideoContentAdapter from "../components/contents/VideoContentAdapter";
import { ApproveContent, ApproveContentType } from "../types/appData";
import {
  AudioContent,
  HtmlContent,
  ImagesContent,
  VideoContent,
  AudioRecordContent,
  ChooseTextContent,
  TextBoxesContent,
  IconTextContent,
  ChooseMediaTextContent,
} from "../types/templateContents";

const useContentMapper = () => {
  const getContentComponent = (content: ApproveContent) => {
    const contentMapper: Record<ApproveContentType, JSX.Element | JSX.Element[]> = {
      chooseText: <ChooseText contentData={content as ChooseTextContent} />,
      iconText: <IconTextAdapter content={content as IconTextContent} />,
      textBoxes: <TextBoxesAdapter content={content as TextBoxesContent} />,
      html: <HtmlContentAdapter content={content as HtmlContent} />,
      images: <ImageContentAdapter content={content as ImagesContent} />,
      video: <VideoContentAdapter content={content as VideoContent} />,
      audio: <AudioContentAdapter content={content as AudioContent} />,
      audioRecord: <AudioRecorderAdapter content={content as AudioRecordContent} />,
      chooseMediaText: <ChooseMediaTextAdapter content={content as ChooseMediaTextContent} />,
    };

    return contentMapper[content.type];
  };

  return { getContentComponent };
};

export default useContentMapper;
