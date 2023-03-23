import { Content, ID } from "chai-ui-v2";
import { useCallback, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import AudioCreator from "../components/contents/AudioCreator";
import BorderTextBoxCreator from "../components/contents/BorderTextBoxCreator";
import CornerGuideCharacterCreator from "../components/contents/CornerGuideCharacterCreator";
import IconTextCreator from "../components/contents/IconTextCreator";
import ImageWithDescriptionListCreator from "../components/contents/ImageWithDescriptionListCreator";
import ImageWithCaptionListCreator from "../components/contents/ImageWithCaptionListCreator";
import NumberingTextListCreator from "../components/contents/NumberingTextListCreator";
import SpeakingCreator from "../components/contents/SpeakingCreator";
import TextCreator from "../components/contents/TextCreator";
import VideoCreator from "../components/contents/VideoCreator";
import DummyComponent from "../components/molecules/temp/DummyComponent";
import { focusedIdState } from "../states/focusedIdState";
import {
  CommonTemplateComponentLocation,
  ContentCommonProps,
  DraggableContentCommonProps,
} from "../types/page";
import AudioRecorderCreator from "../components/contents/AudioRecorderCreator";
import MultilevelActionCardCreator from "../components/contents/MultilevelActionCardCreator";
import ActivityGuideCharacterCreator from "../components/contents/ActivityGuideCharacterCreator";
import ContentsCardList from "../components/contents/ContentsCardList";
import ExplainingCharacterCreator from "../components/contents/ExplainingCharacterCreator";
import CharacterCardListCreator from "../components/contents/CharacterCardListCreator";
import ToggleSentenceListCreator from "../components/contents/ToggleSentenceListCreator";
import CardTabCreator from "../components/contents/CardTabCreator";
import NotiCharacterListCreator from "../components/contents/NotiCharacterListCreator";
import MultilevelActionSentenceCardCreator from "../components/contents/MultilevelActionSentenceCardCreator";
import ConversationWordListCreator from "../components/contents/ConversationWordListCreator";
import WordsCarouselModalCreator from "../components/contents/WordsCarouselModalCreator";
import FullAudioCreator from "../components/contents/FullAudioCreator";
import ConversationCreator from "../components/contents/ConversationCreator";

const useComponent = () => {
  const [focusedId, setFocusedId] = useRecoilState(focusedIdState);

  const getContent = (
    props: DraggableContentCommonProps,
    type: Content["type"],
  ) => {
    const componentMap: Partial<Record<Content["type"], JSX.Element>> = {
      text: <TextCreator {...props} />,
      iconText: <IconTextCreator {...props} />,
      numberingTextList: <NumberingTextListCreator {...props} />,
      borderTextBox: <BorderTextBoxCreator {...props} />,
      video: <VideoCreator {...props} />,
      imageWithCaptionList: <ImageWithCaptionListCreator {...props} />,
      speaking: <SpeakingCreator {...props} />,
      imageWithDescriptionList: <ImageWithDescriptionListCreator {...props} />,
      audio: <AudioCreator {...props} />,
      recorder: <AudioRecorderCreator {...props} />,
      multiLevelActionCard: <MultilevelActionCardCreator {...props} />,
      cornerGuideCharacter: <CornerGuideCharacterCreator {...props} />,
      activityGuideCharacter: <ActivityGuideCharacterCreator {...props} />,
      contentsCardList: <ContentsCardList {...props} />,
      explainingCharacter: <ExplainingCharacterCreator {...props} />,
      characterCardList: <CharacterCardListCreator {...props} />,
      toggleSentenceList: <ToggleSentenceListCreator {...props} />,
      cardTab: <CardTabCreator {...props} />,
      notiCharacterList: <NotiCharacterListCreator {...props} />,
      multiLevelActionSentenceCard: (
        <MultilevelActionSentenceCardCreator {...props} />
      ),
      conversationWordList: <ConversationWordListCreator {...props} />,
      wordsCarousel: <WordsCarouselModalCreator {...props} />,
      fullAudio: <FullAudioCreator {...props} />,
      conversation: <ConversationCreator {...props} />,
    };

    return componentMap[type];
  };

  /**
   * 공통 템플릿이 아닌 경우 isDraggable을 false로 전달하자
   */
  const getComponent = (props: ContentCommonProps) => {
    const {
      content,
      index,
      dndOffsetContainerQuery,
      isDraggable = true,
    } = props;
    return getContent(props, content.type) ? (
      <Draggable
        key={content.id.toString()}
        draggableId={content.id.toString()}
        index={index}
      >
        {(provided, snapshot) => {
          if (snapshot.isDragging && dndOffsetContainerQuery) {
            const offsetContainer = document.querySelector<HTMLDivElement>(
              dndOffsetContainerQuery,
            );
            if (offsetContainer) {
              // @ts-ignore
              provided.draggableProps.style.left =
                // @ts-ignore
                provided.draggableProps.style.left -
                (offsetContainer.offsetLeft - offsetContainer.offsetWidth / 2);

              // @ts-ignore
              provided.draggableProps.style.top =
                // @ts-ignore
                provided.draggableProps.style.top -
                (offsetContainer.offsetTop - offsetContainer.offsetHeight / 2);
            }
          }

          return (
            <div ref={provided.innerRef} {...provided.draggableProps}>
              {getContent(
                {
                  ...props,
                  draggableProvided: provided,
                  isDraggable,
                },
                content.type,
              )}
            </div>
          );
        }}
      </Draggable>
    ) : (
      <DummyComponent />
    );
  };

  const resetFocusedId = useCallback(() => {
    setFocusedId(undefined);
  }, [setFocusedId]);

  useEffect(() => {
    window.addEventListener("click", resetFocusedId);
    return () => {
      window.removeEventListener("click", resetFocusedId);
    };
  }, [resetFocusedId]);

  const _setFocusedId = useCallback(
    (e: React.MouseEvent, id: ID) => {
      e.stopPropagation();
      setFocusedId(id);
    },
    [setFocusedId],
  );

  // dnd 관련함수
  const getDroppableId = useCallback(
    (slideId: ID, position: CommonTemplateComponentLocation) => {
      return `${slideId}_${position}`;
    },
    [],
  );

  return {
    getComponent,
    focusedId,
    setFocusedId: _setFocusedId,
    getDroppableId,
  };
};

export default useComponent;

export type ReturnUseComponent = ReturnType<typeof useComponent>;
