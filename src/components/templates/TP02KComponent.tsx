import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useAudio from "../../hooks/useAudio";
import { TP02K } from "../../types/pageTemplate";
import { DialogContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import DialogAudio from "../atoms/DialogAudio";
import OptionButton from "../atoms/OptionButton";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP02Layout from "../Layouts/TP02Layout";
import TitleContent from "../molecules/TitleContent";
import DialogContainer from "../molecules/DialogContainer";
import useThrottle from "../../hooks/useThrottle";

const DialogHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const layoutCss = css`
  display: block;
`;

interface TP02KComponentProps extends TemplateProps {}

const TP02KComponent = ({ setPageCompleted, page, showHeader = true }: TP02KComponentProps) => {
  const [pinyinOption, setPinyinOption] = useState(true);
  const [audioSrc, setAudioSrc] = useState("");
  const [audioState, setAudioState] = useState(false);
  const [translateOption, setTranslateOption] = useState(true);
  const [currentHeight, setCurrentHeight] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const dialogAudioRef = useRef<HTMLAudioElement>(null);
  const layoutRef = useRef<HTMLDivElement>(null);
  const currentContentIndex = useRef(0);

  const { addThrottle } = useThrottle();

  const {
    audioIndex,
    audioSrc: dialogAudioSrc,
    handleClickAudioButton: handleClickDialogAudioButton,
    audioState: dialogAudioState,
    setAudioState: setDialogAudioState,
  } = useAudio(dialogAudioRef);

  const thisPage = page as TP02K;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const DialogContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "dialog") as
      | DialogContent
      | undefined;
  }, [thisPage.template.contents]);

  const isNextContent = useMemo(() => {
    return (
      audioRef.current && audioState && DialogContentData?.data[currentContentIndex.current + 1]
    );
  }, [DialogContentData?.data, audioState, currentContentIndex]);

  useEffect(() => {
    if (isNextContent && audioRef.current) {
      setAudioSrc(DialogContentData?.data[currentContentIndex.current].audio!.src ?? "");
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentContentIndex, audioState, DialogContentData?.data, isNextContent]);

  const handleClickPinyinOption = () => {
    setPinyinOption(!pinyinOption);
  };
  const handleClickTranslateOption = () => {
    setTranslateOption(!translateOption);
  };

  const handleClickAudioButton = () => {
    if (!audioRef.current) {
      return;
    }

    if (audioState) {
      setAudioState(false);
      audioRef.current.pause();
    } else {
      setAudioState(true);
      audioRef.current.play();
      if (dialogAudioRef.current) {
        dialogAudioRef.current.pause();
        setDialogAudioState(false);
      }
    }
  };

  // end event는 한번먹히기때문에
  const handleEndTotalAudio = useCallback(() => {
    audioRef.current?.addEventListener("ended", () => {
      if (!DialogContentData?.data?.[currentContentIndex.current].hasQuestion) {
        addThrottle(500, () => {
          currentContentIndex.current += 1;
          setAudioState(false);
          layoutRef.current?.scrollTo({
            top: currentHeight,
            left: 0,
            behavior: "smooth",
          });
        });
      } else {
        setAudioState(false);
      }
    });
  }, [addThrottle, currentHeight, DialogContentData?.data]);

  const handleEndDialogAudio = useCallback(() => {
    dialogAudioRef.current?.addEventListener("ended", () => {
      addThrottle(500, () => {
        currentContentIndex.current += 1;
        setDialogAudioState(false);
        setAudioState(false);
        layoutRef.current?.scrollTo({
          top: currentHeight,
          left: 0,
          behavior: "smooth",
        });
      });
    });
  }, [addThrottle, currentHeight, setDialogAudioState]);

  useEffect(() => {
    if (
      !DialogContentData?.data?.[currentContentIndex.current].hasQuestion &&
      DialogContentData?.data?.[currentContentIndex.current + 1]
    ) {
      console.log("Asdfasdfasf");
      handleEndTotalAudio();
      handleEndDialogAudio();
    }
  }, [handleEndTotalAudio, handleEndDialogAudio, DialogContentData?.data, currentContentIndex]);

  return (
    <TemplateCommonLayout>
      {showHeader ? (
        <TitleContent title={thisPage.title} description={thisPage.description} />
      ) : (
        <></>
      )}
      <TP02Layout customCss={layoutCss} layoutRef={layoutRef}>
        <DialogHeader>
          <DialogAudio audioHandler={handleClickAudioButton} audioState={audioState} />
          <OptionButton
            text="병음"
            active={pinyinOption}
            handleClickOption={handleClickPinyinOption}
          />
          <OptionButton
            text="해석"
            active={translateOption}
            handleClickOption={handleClickTranslateOption}
          />
        </DialogHeader>
        <DialogContainer
          datas={DialogContentData?.data ?? []}
          audioIndex={audioIndex}
          currentHeight={currentHeight}
          handleClickDialogAudioButton={handleClickDialogAudioButton}
          currentContentIndex={currentContentIndex}
          layoutRef={layoutRef}
          audioState={audioState}
          pinyinOption={pinyinOption}
          translateOption={translateOption}
          setCurrentHeight={setCurrentHeight}
          setAudioState={setAudioState}
          dialogAudioState={dialogAudioState}
          audioRef={audioRef}
        />
        <div>
          <audio ref={audioRef}>
            <source src={audioSrc} />
          </audio>
          <audio ref={dialogAudioRef}>
            <source src={dialogAudioSrc} />
          </audio>
        </div>
      </TP02Layout>
    </TemplateCommonLayout>
  );
};

export default TP02KComponent;
