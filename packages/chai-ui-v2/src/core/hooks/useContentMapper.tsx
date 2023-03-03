import React from "react";
import { ComponentVideo } from "../../components";
import ExplainingCharacterComponent from "../../components/contents/ExplainingCharacterComponent";
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
  ExplainingCharacterContentData,
  BorderTextBoxContentData,
  CharacterCardListContentData,
  SpeakingContentData,
  MultilevelActionCardListContentData,
  CardTabContentData,
  ImageWithDescriptionListContentData,
} from "../types";
import CharacterCardListComponent from "../../components/contents/CharacterCardListComponent";
import SpeakingComponent from "../../components/contents/SpeakingComponent";
import MultilevelActionCardListComponent from "../../components/contents/MultilevelActionCardListComponent";
import CardTabComponent from "../../components/contents/CardTabComponent";

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
      explainingCharacter: (
        <ExplainingCharacterComponent
          contents={content as ExplainingCharacterContentData}
        />
      ),
      borderTextBox: (
        <BorderTextBoxComponent
          contents={content as BorderTextBoxContentData}
          key={contentIndex}
        />
      ),
      characterCardList: (
        <CharacterCardListComponent
          contents={content as CharacterCardListContentData}
          key={contentIndex}
        />
      ),
      speaking: (
        <SpeakingComponent
          contents={content as SpeakingContentData}
          key={contentIndex}
        />
      ),
      multiLevelActionList: (
        <MultilevelActionCardListComponent
          contents={content as MultilevelActionCardListContentData}
          key={contentIndex}
        />
      ),
      cardTab: (
        <CardTabComponent
          contents={content as CardTabContentData}
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
