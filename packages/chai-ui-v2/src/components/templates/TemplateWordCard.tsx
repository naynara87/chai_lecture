import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  TemplateProps,
  TemplateWordCardData,
  useContentMapper,
  useGlobalAudio,
} from "../../core";
import { ComponentButtonPlay } from "../atoms";
import IconPauseFillButton from "../atoms/Button/IconPauseFillButton";
import { v4 as uuidv4 } from "uuid";
import ContentsCardListComponent from "../contents/ContentsCardListComponent";

interface TemplateWordCardProps extends TemplateProps {}

const TemplateWordCard = ({
  template,
  setPageCompleted,
}: TemplateWordCardProps) => {
  const thisPage = template as TemplateWordCardData;

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
    if (!thisPage.rightContents) return;
    thisPage.rightContents.forEach((content) => {
      if (content.type === "contentsCardList") {
        const audioList: string[] = [];
        content.data.forEach((components) => {
          components.contents.forEach((component) => {
            if (component.type === "audio") {
              audioList.push(component.data.src ?? "");
            }
          });
        });
        setFullAudioList(audioList);
      }
    });
  }, [thisPage.rightContents, setFullAudioList]);

  useEffect(() => {
    setFullAudio();
  }, [setFullAudio]);

  const leftContents = useMemo(() => {
    if (!thisPage.leftContents) return;
    return thisPage.leftContents.map((leftContent, contentIndex) => {
      return getContentComponent(leftContent, contentIndex);
    });
  }, [getContentComponent, thisPage]);

  const rightContents = useMemo(() => {
    if (!thisPage.rightContents) return;
    return thisPage.rightContents.map((rightContent, contentIndex) => {
      if (rightContent.type !== "contentsCardList") {
        return getContentComponent(rightContent, contentIndex);
      } else {
        return (
          <ContentsCardListComponent
            contents={rightContent}
            key={contentIndex}
            fullAudioId={`fullAudio_${fullAudioUuidRef.current}`}
          />
        );
      }
    });
  }, [getContentComponent, thisPage]);

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

  return (
    <div className="layout-panel-wrap grid-h-3-7">
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
          {leftContents}
        </div>
      </div>
      <div className="layout-panel wide-panel">{rightContents}</div>
    </div>
  );
};

export default TemplateWordCard;
