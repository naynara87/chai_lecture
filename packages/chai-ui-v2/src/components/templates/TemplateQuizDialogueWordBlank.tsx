import styled from "@emotion/styled";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import IconO from "../../assets/images/icon/icon_o.svg";
import IconX from "../../assets/images/icon/icon_x.svg";
import { LayoutModalVoca } from "../modal";
import { ComponentButtonPlay } from "../atoms";
import {
  ConversationQuizContentData,
  TemplateProps,
  TemplateQuizConversationData,
  useContentMapper,
  useGlobalAudio,
} from "../../core";
import IconPauseFillButton from "../atoms/Button/IconPauseFillButton";
import ConversationQuizComponent from "../contents/ConversationQuizComponent";
import { vw } from "../../assets";

const DialogueContainer = styled.div`
  .hori-answer-wrap {
    justify-content: flex-start;

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
        background-image: url(${IconO});
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
        background-image: url(${IconX});
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

interface TemplateQuizDialogueWordBlank extends TemplateProps { }

const TemplateQuizDialogueWordBlank = ({
  template,
  setPageCompleted,
}: TemplateQuizDialogueWordBlank) => {
  const thisPage = template as TemplateQuizConversationData;

  const [isModalVocaOpen, setIsModalVocaOpen] = useState(false);
  const [speakingDialogueIndex, setSpeakingDialogueIndex] = useState(-1);

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const { getContentComponent } = useContentMapper();
  const {
    globalAudioRef,
    globalAudioState,
    globalAudioId,
    handleAudioReset,
    handleClickAudioButton,
    handleClickAudioStopButton,
  } = useGlobalAudio();

  const fullAudioIndexRef = useRef(0);

  const dialogueQuizContent = useMemo(() => {
    return thisPage.rightContents.find(
      (content) => content.type === "conversationQuiz",
    ) as ConversationQuizContentData;
  }, [thisPage.rightContents]);

  const audioEnded = useCallback(() => {
    if (globalAudioId.toString().includes("dialogue")) {
      setSpeakingDialogueIndex(-1);
      handleAudioReset();
    }
    if (globalAudioId.toString().includes("fullAudio")) {
      fullAudioIndexRef.current += 1;
      if (!dialogueQuizContent.data[fullAudioIndexRef.current]) {
        handleAudioReset();
        return;
      }
      setSpeakingDialogueIndex(fullAudioIndexRef.current);
      handleClickAudioButton(
        `fullAudio${fullAudioIndexRef.current}`,
        dialogueQuizContent.data[fullAudioIndexRef.current].audio?.src ?? "",
      );
    }
  }, [
    handleAudioReset,
    globalAudioId,
    dialogueQuizContent.data,
    handleClickAudioButton,
  ]);

  useEffect(() => {
    let globalAudioRefValue: HTMLAudioElement | null = null;
    if (
      !globalAudioId.toString().includes("dialogue") &&
      !globalAudioId.toString().includes("fullAudio")
    ) {
      setSpeakingDialogueIndex(-1);
    }
    if (globalAudioRef?.current) globalAudioRefValue = globalAudioRef.current;
    globalAudioRef?.current?.addEventListener("ended", audioEnded);
    return () => {
      if (globalAudioRefValue) {
        globalAudioRefValue.removeEventListener("ended", audioEnded);
      }
    };
  }, [globalAudioRef, audioEnded, globalAudioId]);

  const leftContents = useMemo(() => {
    return thisPage.leftContents.map((leftContent, contentIndex) => {
      return getContentComponent(leftContent, contentIndex);
    });
  }, [getContentComponent, thisPage]);

  const listenFullAudio = useCallback(() => {
    if (!dialogueQuizContent) return;
    fullAudioIndexRef.current = 0;
    setSpeakingDialogueIndex(fullAudioIndexRef.current);
    handleClickAudioButton(
      `fullAudio${fullAudioIndexRef.current}`,
      dialogueQuizContent.data[fullAudioIndexRef.current].audio?.src ?? "",
    );
  }, [handleClickAudioButton, dialogueQuizContent]);

  const handleStopFullAudio = useCallback(() => {
    setSpeakingDialogueIndex(-1);
    handleAudioReset();
  }, [handleAudioReset]);

  const handleClickDialogueCharacter = useCallback(
    (dialogueIndex: number, audioSrc?: string) => {
      if (speakingDialogueIndex === dialogueIndex) {
        if (globalAudioState === "playing") {
          handleClickAudioStopButton();
        } else {
          handleClickAudioButton(`dialogue${dialogueIndex}`, audioSrc ?? "");
        }
        return;
      }
      handleClickAudioButton(`dialogue${dialogueIndex}`, audioSrc ?? "");
      setSpeakingDialogueIndex(dialogueIndex);
    },
    [
      handleClickAudioButton,
      speakingDialogueIndex,
      handleClickAudioStopButton,
      globalAudioState,
    ],
  );

  return (
    <DialogueContainer className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">
        <div className="cont-info-wrap">
          {dialogueQuizContent && (
            <div className="btns-wrap">
              {globalAudioId.toString().includes("fullAudio") ? (
                <IconPauseFillButton onClick={handleStopFullAudio} />
              ) : (
                <ComponentButtonPlay onClick={listenFullAudio} />
              )}
              <p className="txt">전체 음성 듣기</p>
            </div>
          )}
          {/* 말풍선 캐릭터 */}
          {leftContents}
          {/* end 말풍선 캐릭터 */}
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
            speakingDialogueIndex={speakingDialogueIndex}
            globalAudioState={globalAudioState}
            handleClickProfileCallback={handleClickDialogueCharacter}
          />
        )}
        {/* TODO: key설명 - input이 checked가 되는 순간 blank에 선택한 글자가 들어감 */}
      </div>
      <LayoutModalVoca
        isModalOpen={isModalVocaOpen}
        setIsModalOpen={setIsModalVocaOpen}
      />
    </DialogueContainer>
  );
};

export default TemplateQuizDialogueWordBlank;
