import styled from "@emotion/styled";
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
import { vw } from "../../assets";
import { v4 as uuidv4 } from "uuid";
import FullAudioComponent from "../contents/FullAudioComponent";

const DialogueContainer = styled.div`
  .hori-answer-wrap {
    justify-content: flex-start;
    margin-top: ${vw(40)};

    .inp-grp {
      flex-basis: auto;
    }
  }

  .answer-right {
    .quiz-answer-wrap {
      position: relative;
      display: inline-flex;

      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: auto;
        right: ${vw(-40)};
        width: ${vw(52)};
        height: ${vw(52)};
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 30C0 46.5375 13.4625 60 30 60C46.5375 60 60 46.5375 60 30C60 13.4625 46.5375 0 30 0C13.4625 0 0 13.4625 0 30ZM9.99995 30.0004C9.99995 41.0254 18.975 50.0004 30 50.0004C41.025 50.0004 50 41.0254 50 30.0004C50 18.9754 41.025 10.0004 30 10.0004C18.975 10.0004 9.99995 18.9754 9.99995 30.0004Z' fill='%235FC996'/%3E%3C/svg%3E%0A");
        transform: translate(100%, -50%);
      }
    }
  }

  .answer-wrong {
    .quiz-answer-wrap {
      position: relative;
      display: inline-flex;

      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: auto;
        right: ${vw(-40)};
        width: ${vw(52)};
        height: ${vw(52)};
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        background-image: url("data:image/svg+xml,%3Csvg width='58' height='58' viewBox='0 0 58 58' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.08447 55.3384L29 34.4229L49.9155 55.3384C50.6474 56.0703 51.5685 56.5 52.627 56.5C53.6855 56.5 54.6065 56.0703 55.3384 55.3384C56.0703 54.6065 56.5 53.6855 56.5 52.627C56.5 51.5685 56.0703 50.6474 55.3384 49.9155L34.4229 29L55.3384 8.08447C56.0703 7.35257 56.5 6.43154 56.5 5.37302C56.5 4.3145 56.0703 3.39346 55.3384 2.66156C54.6065 1.92967 53.6855 1.5 52.627 1.5C51.5685 1.5 50.6474 1.92967 49.9155 2.66156L29 23.5771L8.08447 2.66156C7.35257 1.92967 6.43154 1.5 5.37302 1.5C4.31449 1.5 3.39346 1.92967 2.66156 2.66156C1.92967 3.39346 1.5 4.31449 1.5 5.37302C1.5 6.43154 1.92967 7.35257 2.66156 8.08447L23.5771 29L2.66156 49.9155C1.92967 50.6474 1.5 51.5685 1.5 52.627C1.5 53.6855 1.92967 54.6065 2.66156 55.3384C3.39346 56.0703 4.3145 56.5 5.37302 56.5C6.43154 56.5 7.35257 56.0703 8.08447 55.3384Z' fill='%23ED8914' stroke='%23ED8914' stroke-width='3'/%3E%3C/svg%3E%0A");
        transform: translate(100%, -50%);
      }
    }
  }

  .wide-panel {
    .btns-wrap {
      max-width: 310px;
      margin: 5vh auto 0;
    }
  }
`;

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
    <DialogueContainer className="layout-panel-wrap grid-h-3-7">
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
    </DialogueContainer>
  );
};

export default TemplateQuizDialogueWordBlank;
