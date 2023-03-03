import React from "react";
import { ComponentVideo } from "../../components";
import BorderTextBoxComponent from "../../components/contents/BorderTextBoxComponent";
import IconTextComponent from "../../components/contents/IconTextComponent";
import ImageWithDescriptionListComponent from "../../components/contents/ImageWithDescriptionListComponent";
import NumberingTextListComponent from "../../components/contents/NumberingTextListComponent";
import TextContentComponent from "../../components/contents/TextContentComponent";
import AudioRecorder from "../../components/molecules/AudioRecorder";
import {
  Content,
  ContentType,
  NumberingTextListContentData,
  TextContentData,
  VideoContentData,
  IconTextContentData,
  BorderTextBoxContentData,
  ImageWithDescriptionListContentData,
} from "../types";

const useContentMapper = () => {
  const getContentComponent = (content: Content, contentIndex: number) => {
    const contentMapper: Record<ContentType, JSX.Element> = {
      video: (
        <ComponentVideo
          content={content as VideoContentData}
          key={contentIndex}
        />
      ),
      recorder: <AudioRecorder key={contentIndex} />,
      numberingTextList: (
        <NumberingTextListComponent
          contents={content as NumberingTextListContentData}
          key={contentIndex}
        />
      ),
      text: (
        <TextContentComponent
          contents={content as TextContentData}
          key={contentIndex}
        />
      ),
      iconText: (
        <IconTextComponent
          contents={content as IconTextContentData}
          key={contentIndex}
        />
      ),
      borderTextBox: (
        <BorderTextBoxComponent
          contents={content as BorderTextBoxContentData}
          key={contentIndex}
        />
      ),
      imageWithDescriptionList: (
        <ImageWithDescriptionListComponent
          contents={content as ImageWithDescriptionListContentData}
          key={contentIndex}
        />
      ),
    };

    return contentMapper[content.type];
  };

  return {
    getContentComponent,
  };
};

export default useContentMapper;
