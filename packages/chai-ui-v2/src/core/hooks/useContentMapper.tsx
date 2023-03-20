import React from "react";
import {
  ComponentVideo,
  ActivityGuideCharacterComponent,
  FinalSpeakingComponent,
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
  MultilevelActionCardContentData,
  CardTabContentData,
  ConversationWordListContentData,
  ImageWithDescriptionListContentData,
  ConversationContentData,
  ImageWithCaptionListContentData,
  ConversationQuizContentData,
  QuizWordsInOrderContentData,
  MultiChoiceContentData,
  FinalSpeakingContentData,
  AudioContentData,
  CornerGuideCharacterContentData,
  NotiCharacterListContentData,
  ActivityGuideCharacterContentData,
  WordsCarouselContentData,
  AudioAndWordsCarouselContentData,
  ToggleSentenceListContentData,
  MultilevelActionSentenceCardContentData,
  ContentsCardListContentData,
} from "../types";
import CharacterCardListComponent from "../../components/contents/CharacterCardListComponent";
import SpeakingComponent from "../../components/contents/SpeakingComponent";
import MultilevelActionCardComponent from "../../components/contents/MultilevelActionCardComponent";
import CardTabComponent from "../../components/contents/CardTabComponent";
import ConversationWordListComponent from "../../components/contents/ConversationWordListComponent";
import ConversationComponent from "../../components/contents/ConversationComponent";
import ImageWithCaptionListComponent from "../../components/contents/ImageWithCaptionListComponent";
import ConversationQuizComponent from "../../components/contents/ConversationQuizComponent";
import WordsInOrderComponent from "../../components/contents/WordsInOrderComponent";
import MultiChoiceComponent from "../../components/contents/MultiChoiceComponent";
import AudioComponent from "../../components/contents/AudioComponent";
import CornerGuideCharacterComponent from "../../components/contents/CornerGuideCharacterComponent";
import NotiCharacterListComponent from "../../components/contents/NotiCharacterListComponent";
import ContentsCardListComponent from "../../components/contents/ContentsCardListComponent";
import WordsCarouselComponent from "../../components/contents/WordsCarouselComponent";
import AudioAndWordsCarouselComponent from "../../components/contents/AudioAndWordsCarouselComponent";
import ToggleSentenceListComponent from "../../components/contents/ToggleSentenceListComponent";
import MultilevelActionSentenceCardComponent from "../../components/contents/MultilevelActionSentenceCardComponent";
import FullAudioComponent from "../../components/contents/FullAudioComponent";

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
      multiLevelActionCard: (
        <MultilevelActionCardComponent
          contents={content as MultilevelActionCardContentData}
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
      activityGuideCharacter: (
        <ActivityGuideCharacterComponent
          contents={content as ActivityGuideCharacterContentData}
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
      finalSpeaking: (
        <FinalSpeakingComponent
          contents={content as FinalSpeakingContentData}
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
      notiCharacterList: (
        <NotiCharacterListComponent
          contents={content as NotiCharacterListContentData}
          key={contentIndex}
        />
      ),
      contentsCardList: (
        <ContentsCardListComponent
          contents={content as ContentsCardListContentData}
          key={contentIndex}
        />
      ),
      wordsCarousel: (
        <WordsCarouselComponent
          contents={content as WordsCarouselContentData}
          key={contentIndex}
        />
      ),
      audioAndWordsCarousel: (
        <AudioAndWordsCarouselComponent
          contents={content as AudioAndWordsCarouselContentData}
          key={contentIndex}
        />
      ),
      toggleSentenceList: (
        <ToggleSentenceListComponent
          contents={content as ToggleSentenceListContentData}
          key={contentIndex}
        />
      ),
      multiLevelActionSentenceCard: (
        <MultilevelActionSentenceCardComponent
          contents={content as MultilevelActionSentenceCardContentData}
          key={contentIndex}
        />
      ),
      fullAudio: <FullAudioComponent key={contentIndex} />,
    };

    return contentMapper[content.type];
  };

  return {
    getContentComponent,
  };
};

export default useContentMapper;
