import styled from "@emotion/styled";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { LayoutModalSolution, LayoutModalVoca } from "../modal";
import ComponentButtonPlay from "../atoms/ComponentButtonPlay";
import {
  ConversationContentData,
  TemplateConversationData,
  TemplateProps,
  useContentMapper,
  useGlobalAudio,
} from "../../core";
import { vh } from "../../assets";
import ConversationComponent from "../contents/ConversationComponent";
import IconTextComponent from "../contents/IconTextComponent";
import IconPauseButton from "../atoms/Button/IconPauseButton";

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
  const thisPage = template as TemplateConversationData;

  const [isModalSolutionOpen, setIsModalSolutionOpen] = useState(false);
  const [isModalVocaOpen, setIsModalVocaOpen] = useState(false);
  const [speakingDialogueIndex, setSpeakingDialogueIndex] = useState(-1);

  const fullAudioIndexRef = useRef(0);

  const { getContentComponent } = useContentMapper();
  const {
    globalAudioRef,
    globalAudioState,
    globalAudioId,
    handleAudioReset,
    handleClickAudioButton,
    handleClickAudioStopButton,
  } = useGlobalAudio();

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  useEffect(() => {
    return () => {
      handleAudioReset();
    };
  }, [handleAudioReset]);

  const dialogueContent = useMemo(() => {
    return thisPage.rightContents.find(
      (content) => content.type === "conversation",
    ) as ConversationContentData;
  }, [thisPage.rightContents]);

  const audioEnded = useCallback(() => {
    if (globalAudioId.toString().includes("dialogue")) {
      setSpeakingDialogueIndex(-1);
      handleAudioReset();
    }
    if (globalAudioId.toString().includes("fullAudio")) {
      fullAudioIndexRef.current += 1;
      if (!dialogueContent.data[fullAudioIndexRef.current]) {
        handleAudioReset();
        return;
      }
      setSpeakingDialogueIndex(fullAudioIndexRef.current);
      handleClickAudioButton(
        `fullAudio${fullAudioIndexRef.current}`,
        dialogueContent.data[fullAudioIndexRef.current].audio?.src ?? "",
      );
    }
  }, [
    handleAudioReset,
    globalAudioId,
    dialogueContent.data,
    handleClickAudioButton,
  ]);

  const listenFullAudio = useCallback(() => {
    if (!dialogueContent) return;
    fullAudioIndexRef.current = 0;
    setSpeakingDialogueIndex(fullAudioIndexRef.current);
    handleClickAudioButton(
      `fullAudio${fullAudioIndexRef.current}`,
      dialogueContent.data[fullAudioIndexRef.current].audio?.src ?? "",
    );
  }, [handleClickAudioButton, dialogueContent]);

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

  const handleStopFullAudio = useCallback(() => {
    setSpeakingDialogueIndex(-1);
    handleAudioReset();
  }, [handleAudioReset]);

  const leftContents = useMemo(() => {
    return thisPage.leftContents.map((leftContent, contentIndex) => {
      return getContentComponent(leftContent, contentIndex);
    });
  }, [getContentComponent, thisPage]);

  const rightContentTitle = useMemo(() => {
    return thisPage.rightContents.map((rightContent, contentIndex) => {
      if (rightContent.type === "iconText") {
        return <IconTextComponent contents={rightContent} key={contentIndex} />;
      }
    });
  }, [thisPage]);

  const conversasionContents = useMemo(() => {
    return thisPage.rightContents.map((rightContent, contentIndex) => {
      if (rightContent.type === "conversation") {
        return (
          <ConversationComponent
            contents={rightContent}
            handleClickProfileCallback={handleClickDialogueCharacter}
            speakingDialogueIndex={speakingDialogueIndex}
            globalAudioState={globalAudioState}
            key={contentIndex}
          />
        );
      }
    });
  }, [
    thisPage.rightContents,
    handleClickDialogueCharacter,
    speakingDialogueIndex,
    globalAudioState,
  ]);

  return (
    <DialogueContainer className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">
        <div className="cont-info-wrap">
          <div className="btns-wrap">
            {globalAudioId.toString().includes("fullAudio") ? (
              <IconPauseButton onClick={handleStopFullAudio} />
            ) : (
              <ComponentButtonPlay onClick={listenFullAudio} />
            )}
            <p className="txt">전체 음성 듣기</p>
          </div>
          {leftContents}
        </div>
      </div>
      {/* NOTE: key230217 회화는 단일 템플릿이어서 스타일을 위해 conversation-panel-wrap 클래스 추가함 */}
      <div className="layout-panel wide-panel conversation-panel-wrap">
        {/* 230216 회화의 제목이 있을 때에만 사용 */}
        {/* ComponentTitle */}
        {rightContentTitle}
        {/* end ComponentTitle */}
        {/* 230217 회화영역 */}
        {conversasionContents}
      </div>
      <LayoutModalSolution
        isModalOpen={isModalSolutionOpen}
        setIsModalOpen={setIsModalSolutionOpen}
      />
      <LayoutModalVoca
        isModalOpen={isModalVocaOpen}
        setIsModalOpen={setIsModalVocaOpen}
      />
    </DialogueContainer>
  );
};

export default TemplateDialogue;
