import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ConversationQuizContentData,
  TemplateProps,
  TemplateQuizConversationData,
  useContentMapper,
  useGlobalAudio,
} from "../../core";
import ConversationQuizComponent from "../contents/ConversationQuizComponent";
import { v4 as uuidv4 } from "uuid";
import FullAudioComponent from "../contents/FullAudioComponent";

interface TemplateQuizDialogueWordBlank extends TemplateProps {}

/**
 * 대화형 퀴즈 뷰어
 */
const TemplateQuizDialogueWordBlank = ({
  template,
  setPageCompleted,
}: TemplateQuizDialogueWordBlank) => {
  const thisPage = template as TemplateQuizConversationData;

  const [fullAudioList, setFullAudioList] = useState<string[]>([]);

  const fullAudioUuidRef = useRef(uuidv4());
  const fullAudioIndexRef = useRef(0);

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

  const dialogueQuizContent = useMemo(() => {
    if (!thisPage.rightContents) return;
    return thisPage.rightContents.find(
      (content) => content.type === "conversationQuiz",
    ) as ConversationQuizContentData;
  }, [thisPage.rightContents]);

  const setFullAudio = useCallback(() => {
    if (!thisPage.rightContents) return;
    return thisPage.rightContents.forEach((content) => {
      if (content.type === "conversationQuiz") {
        const audioList: string[] = [];
        content.data.forEach((cont) => {
          audioList.push(cont.audio?.src ?? "");
        });
        setFullAudioList(audioList);
      }
    });
  }, [thisPage.rightContents]);

  useEffect(() => {
    setFullAudio();
  }, [setFullAudio]);

  const currentFullAudioUrlCheck = useCallback(() => {
    fullAudioIndexRef.current += 1;
    if (
      fullAudioIndexRef.current > fullAudioList.length ||
      fullAudioList[fullAudioIndexRef.current]
    ) {
      return;
    }
    currentFullAudioUrlCheck();
  }, [fullAudioList]);

  const audioEnded = useCallback(() => {
    if (
      globalAudioId.toString().includes(`fullAudio_${fullAudioUuidRef.current}`)
    ) {
      currentFullAudioUrlCheck();
      if (fullAudioIndexRef.current > fullAudioList.length) {
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
  }, [
    handleAudioReset,
    globalAudioId,
    fullAudioList,
    handleClickAudioButton,
    currentFullAudioUrlCheck,
  ]);

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

  const listenFullAudio = useCallback(() => {
    fullAudioIndexRef.current = 0;
    handleClickAudioButton(
      "fullAudio",
      fullAudioUuidRef.current,
      fullAudioIndexRef.current,
      fullAudioList[fullAudioIndexRef.current] ?? "",
    );
  }, [handleClickAudioButton, fullAudioList]);

  const handleStopFullAudio = useCallback(() => {
    handleAudioReset();
  }, [handleAudioReset]);

  const leftContentsContainerRef = useRef<HTMLDivElement>(null);
  const contInfoWrap = useRef<HTMLDivElement>(null);

  const leftContentsRef = useRef<HTMLDivElement>(null);
  const fullAudioContentsRef = useRef<HTMLDivElement>(null);

  const leftContentsHeight = leftContentsRef.current?.offsetHeight;
  const fullAudioContentsHeight = fullAudioContentsRef.current?.offsetHeight;

  useEffect(() => {
    const leftContentsContainerHeight =
      leftContentsContainerRef.current?.offsetHeight;
    if (
      !leftContentsContainerHeight ||
      !leftContentsHeight ||
      !fullAudioContentsHeight ||
      !contInfoWrap.current
    ) {
      return;
    }
    if (
      fullAudioContentsHeight + leftContentsHeight >=
      leftContentsContainerHeight
    ) {
      contInfoWrap.current.style.justifyContent = "flex-start";
    }
  }, [leftContentsHeight, fullAudioContentsHeight]);

  return (
    <div className="layout-panel-wrap grid-h-3-7 dialogue-container dialogue-container-word-blank">
      <div className="layout-panel side-panel" ref={leftContentsContainerRef}>
        <div className="cont-info-wrap" ref={contInfoWrap}>
          <>
            {/* 전체 음성 듣기 */}
            <div ref={fullAudioContentsRef}>
              {thisPage.leftContents &&
                thisPage.leftContents.map((leftContent, contentIndex) => {
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
                })}
            </div>
            {/* 말풍선 캐릭터 */}
            <div ref={leftContentsRef}>
              {thisPage.leftContents &&
                thisPage.leftContents.map((leftContent, contentIndex) => {
                  if (leftContent.type !== "fullAudio") {
                    return getContentComponent(leftContent, contentIndex);
                  }
                })}
            </div>
          </>
        </div>
      </div>
      {/* 230217 회화는 단일 컴포넌트여서 스타일을 위해 conversation-panel-wrap 클래스 추가함 */}
      <div className="layout-panel wide-panel conversation-panel-wrap">
        {/* 230217 회화영역 */}
        {/* speech bubble */}
        {/* end speech bubble */}
        {dialogueQuizContent && (
          <ConversationQuizComponent
            contents={dialogueQuizContent}
            fullAudioId={`fullAudio_${fullAudioUuidRef.current}`}
          />
        )}
        {/* TODO: key설명 - input이 checked가 되는 순간 blank에 선택한 글자가 들어감 */}
      </div>
    </div>
  );
};

export default TemplateQuizDialogueWordBlank;
