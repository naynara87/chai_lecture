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
import { v4 as uuidv4 } from "uuid";

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

interface TemplateQuizDialogueWordBlank extends TemplateProps {}

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
    return thisPage.rightContents.find(
      (content) => content.type === "conversationQuiz",
    ) as ConversationQuizContentData;
  }, [thisPage.rightContents]);

  const setFullAudio = useCallback(() => {
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

  const leftContents = useMemo(() => {
    return thisPage.leftContents.map((leftContent, contentIndex) => {
      return getContentComponent(leftContent, contentIndex);
    });
  }, [getContentComponent, thisPage]);

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

  return (
    <DialogueContainer className="layout-panel-wrap grid-h-3-7">
      <div className="layout-panel side-panel">
        <div className="cont-info-wrap">
          <div className="btns-wrap">
            {globalAudioId
              .toString()
              .includes(`fullAudio_${fullAudioUuidRef.current}`) ? (
              <IconPauseFillButton onClick={handleStopFullAudio} />
            ) : (
              <ComponentButtonPlay onClick={listenFullAudio} />
            )}
            <p className="txt">전체 음성 듣기</p>
          </div>
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
        <ConversationQuizComponent
          contents={dialogueQuizContent}
          fullAudioId={`fullAudio_${fullAudioUuidRef.current}`}
        />
        {/* TODO: key설명 - input이 checked가 되는 순간 blank에 선택한 글자가 들어감 */}
      </div>
    </DialogueContainer>
  );
};

export default TemplateQuizDialogueWordBlank;
