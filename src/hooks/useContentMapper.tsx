import { SerializedStyles } from "@emotion/react";
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
import { ApproveContent, ApproveContentType, ID } from "../types/appData";
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
  const getContentComponent = (
    content: ApproveContent,
    id: ID,
    htmlCss?: SerializedStyles,
    audioCss?: SerializedStyles,
  ) => {
    const contentMapper: Record<ApproveContentType, JSX.Element | JSX.Element[]> = {
      chooseText: <ChooseText contentData={content as ChooseTextContent} />,
      iconText: <IconTextAdapter content={content as IconTextContent} />,
      textBoxes: <TextBoxesAdapter content={content as TextBoxesContent} />,
      html: <HtmlContentAdapter content={content as HtmlContent} htmlCss={htmlCss} />,
      images: <ImageContentAdapter content={content as ImagesContent} />,
      video: <VideoContentAdapter content={content as VideoContent} videoId={id} />,
      audio: <AudioContentAdapter content={content as AudioContent} audioCss={audioCss} />,
      audioRecord: <AudioRecorderAdapter content={content as AudioRecordContent} />,
      chooseMediaText: <ChooseMediaTextAdapter content={content as ChooseMediaTextContent} />,
    };

    return contentMapper[content.type];
  };

  return { getContentComponent };
};

export default useContentMapper;
