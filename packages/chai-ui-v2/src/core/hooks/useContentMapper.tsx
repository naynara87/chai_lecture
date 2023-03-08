import React from "react";
import {
  ComponentVideo,
  ActivityGuideCharactorComponent,
} from "../../components";
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
  ConversationWordListContentData,
  ImageWithDescriptionListContentData,
  ConversationContentData,
  ImageWithCaptionListContentData,
  ActivityGuideCharactorContentData,
  ConversationQuizContentData,
  QuizWordsInOrderContentData,
  MultiChoiceContentData,
  AudioContentData,
  CornerGuideCharacterContentData,
} from "../types";
import CharacterCardListComponent from "../../components/contents/CharacterCardListComponent";
import SpeakingComponent from "../../components/contents/SpeakingComponent";
import MultilevelActionCardListComponent from "../../components/contents/MultilevelActionCardListComponent";
import CardTabComponent from "../../components/contents/CardTabComponent";
import ConversationWordListComponent from "../../components/contents/ConversationWordListComponent";
import ConversationComponent from "../../components/contents/ConversationComponent";
import ImageWithCaptionListComponent from "../../components/contents/ImageWithCaptionListComponent";
import ConversationQuizComponent from "../../components/contents/ConversationQuizComponent";
import WordsInOrderComponent from "../../components/contents/WordsInOrderComponent";
import MultiChoiceComponent from "../../components/contents/MultiChoiceComponent";
import AudioComponent from "../../components/contents/AudioComponent";
import CornerGuideCharacterComponent from "../../components/contents/CornerGuideCharacterComponent";

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
      conversationWordList: (
        <ConversationWordListComponent
          contents={content as ConversationWordListContentData}
        />
      ),
      imageWithDescriptionList: (
        <ImageWithDescriptionListComponent
          contents={content as ImageWithDescriptionListContentData}
          key={contentIndex}
        />
      ),
      conversation: (
        <ConversationComponent
          contents={content as ConversationContentData}
          key={contentIndex}
        />
      ),
      imageWithCaptionList: (
        <ImageWithCaptionListComponent
          contents={content as ImageWithCaptionListContentData}
          key={contentIndex}
        />
      ),
      ActivityGuideCharactor: (
        <ActivityGuideCharactorComponent
          contents={content as ActivityGuideCharactorContentData}
          key={contentIndex}
        />
      ),
      conversationQuiz: (
        <ConversationQuizComponent
          contents={content as ConversationQuizContentData}
          key={contentIndex}
        />
      ),
      quizWordsInOrder: (
        <WordsInOrderComponent
          contents={content as QuizWordsInOrderContentData}
          key={contentIndex}
        />
      ),
      multiChoice: (
        <MultiChoiceComponent
          contents={content as MultiChoiceContentData}
          key={contentIndex}
        />
      ),
      audio: (
        <AudioComponent
          contents={content as AudioContentData}
          key={contentIndex}
        />
      ),
      cornerGuideCharacter: (
        <CornerGuideCharacterComponent
          contents={content as CornerGuideCharacterContentData}
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
