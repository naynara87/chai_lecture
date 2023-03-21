import styled from "@emotion/styled";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  TemplateConversationData,
  TemplateConversationRepeatData,
  TemplateConversationToggleData,
  TemplateProps,
  useContentMapper,
  useGlobalAudio,
} from "../../core";
import { vh } from "../../assets";
import ConversationComponent from "../contents/ConversationComponent";
import IconTextComponent from "../contents/IconTextComponent";
import DialogueToggle from "../molecules/DialogueToggle";
import { v4 as uuidv4 } from "uuid";
import FullAudioComponent from "../contents/FullAudioComponent";

const DialogueContainer = styled.div`
  .repeat-speak-wrapper {
    margin-top: ${vh(20)};
  }
`;

interface TemplateDialogueProps extends TemplateProps {}

const TemplateDialogue = ({
  template,
  setPageCompleted,
}: TemplateDialogueProps) => {
  const thisPage = template as
    | TemplateConversationData
    | TemplateConversationToggleData
    | TemplateConversationRepeatData;

  // Dialogue Toggle 상태
  const [isShowPronunciation, setIsShowPronunciation] = useState(false);
  const [isShowMeaning, setIsShowMeaning] = useState(false);
  const [fullAudioList, setFullAudioList] = useState<string[]>([]);

  const fullAudioIndexRef = useRef(0);
  const fullAudioUuidRef = useRef(uuidv4());

  const { getContentComponent } = useContentMapper();
  const {
    globalAudioRef,
    globalAudioId,
    handleAudioReset,
    handleClickAudioButton,
  } = useGlobalAudio();

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  useEffect(() => {
    return () => {
      handleAudioReset();
    };
  }, [handleAudioReset]);

  const setFullAudio = useCallback(() => {
    thisPage.rightContents.forEach((content) => {
      if (content.type === "conversation") {
        const audioList: string[] = [];
        content.data.forEach((cont) => {
          audioList.push(cont.audio?.src ?? "");
        });
        setFullAudioList(audioList);
      }
    });
  }, [thisPage.rightContents, setFullAudioList]);

  useEffect(() => {
    setFullAudio();
  }, [setFullAudio]);

  const audioEnded = useCallback(() => {
    if (
      globalAudioId.toString().includes(`fullAudio_${fullAudioUuidRef.current}`)
    ) {
      fullAudioIndexRef.current += 1;
      if (!fullAudioList[fullAudioIndexRef.current]) {
        handleAudioReset();
        return;
      }
      handleClickAudioButton(
        "fullAudio",
        fullAudioUuidRef.current,
        fullAudioIndexRef.current,
        fullAudioList[fullAudioIndexRef.current] ?? "",
      );
    }
  }, [handleAudioReset, globalAudioId, fullAudioList, handleClickAudioButton]);

  const listenFullAudio = useCallback(() => {
    fullAudioIndexRef.current = 0;
    handleClickAudioButton(
      "fullAudio",
      fullAudioUuidRef.current,
      fullAudioIndexRef.current,
      fullAudioList[fullAudioIndexRef.current] ?? "",
    );
  }, [handleClickAudioButton, fullAudioList]);

  useEffect(() => {
    let globalAudioRefValue: HTMLAudioElement | null = null;
    if (globalAudioRef?.current) {
      globalAudioRefValue = globalAudioRef.current;
      globalAudioRefValue?.addEventListener("ended", audioEnded);
    }
    return () => {
      if (globalAudioRefValue) {
        globalAudioRefValue.removeEventListener("ended", audioEnded);
      }
    };
  }, [globalAudioRef, audioEnded]);

  const handleStopFullAudio = useCallback(() => {
    handleAudioReset();
  }, [handleAudioReset]);

  const leftContents = useMemo(() => {
    return thisPage.leftContents.map((leftContent, contentIndex) => {
      if (leftContent.type !== "fullAudio") {
        return getContentComponent(leftContent, contentIndex);
      }
    });
  }, [getContentComponent, thisPage]);

  const fullAudioContents = useMemo(() => {
    return thisPage.leftContents.map((leftContent, contentIndex) => {
      if (leftContent.type === "fullAudio") {
        return (
          <FullAudioComponent
            fullAudioUuid={`fullAudio_${fullAudioUuidRef.current}`}
            onClickFullAudio={listenFullAudio}
            onClickStopFullAudio={handleStopFullAudio}
            key={contentIndex}
          />
        );
      }
    });
  }, [thisPage, handleStopFullAudio, listenFullAudio]);

  const rightContentTitle = useMemo(() => {
    return thisPage.rightContents.map((rightContent, contentIndex) => {
      if (rightContent.type === "iconText") {
        return <IconTextComponent contents={rightContent} key={contentIndex} />;
      }
    });
  }, [thisPage]);

  const conversationContents = useMemo(() => {
    return thisPage.rightContents.map((rightContent, contentIndex) => {
      if (rightContent.type === "conversation") {
        return (
          <ConversationComponent
            contents={rightContent}
            key={contentIndex}
            isShowRepeat={thisPage.type === "TemplateConversationRepeat"}
            isShowPronunciation={
              thisPage.type === "TemplateConversationToggle"
                ? isShowPronunciation
                : true
            }
            isShowMeaning={
              thisPage.type === "TemplateConversationToggle"
                ? isShowMeaning
                : true
            }
            fullAudioId={`fullAudio_${fullAudioUuidRef.current}`}
          />
        );
      }
    });
  }, [
    thisPage.rightContents,
    isShowPronunciation,
    isShowMeaning,
    thisPage.type,
  ]);

  const handleClickOptions = useCallback(
    (optionType: "pronunciation" | "meaning") => {
      if (optionType === "pronunciation") {
        setIsShowPronunciation(!isShowPronunciation);
      } else {
        setIsShowMeaning(!isShowMeaning);
      }
    },
    [isShowPronunciation, isShowMeaning],
  );

  return (
    <DialogueContainer className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">
        <div className="cont-info-wrap">
          <>
            {fullAudioContents}
            {leftContents}
          </>
        </div>
      </div>
      {/* NOTE: key230217 회화는 단일 템플릿이어서 스타일을 위해 conversation-panel-wrap 클래스 추가함 */}
      <div className="layout-panel wide-panel conversation-panel-wrap">
        {/* 230216 회화의 제목이 있을 때에만 사용 */}
        {/* ComponentTitle */}
        {rightContentTitle}
        {/* end ComponentTitle */}
        {thisPage.type === "TemplateConversationToggle" && (
          <DialogueToggle handleClickOptions={handleClickOptions} />
        )}
        {/* 230217 회화영역 */}
        {conversationContents}
      </div>
    </DialogueContainer>
  );
};

export default TemplateDialogue;
