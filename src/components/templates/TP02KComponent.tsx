import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useMemo, useRef, useState } from "react";
import useAudio from "../../hooks/useAudio";
import { TP02K } from "../../types/pageTemplate";
import { DialogContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import DialogAudio from "../atoms/DialogAudio";
import DialogOptionButton from "../atoms/DialogOptionButton";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP02Layout from "../Layouts/TP02Layout";
import TitleContent from "../molecules/TitleContent";
import DialogContainer from "../molecules/DialogContainer";

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

const TP02KComponent = ({ setPageCompleted, page }: TP02KComponentProps) => {
  const [pinyinOption, setPinyinOption] = useState(true);
  const [audioSrc, setAudioSrc] = useState("");
  const [audioState, setAudioState] = useState(false);
  const [translateOption, setTranslateOption] = useState(true);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const dialogAudioRef = useRef<HTMLAudioElement>(null);
  const layoutRef = useRef<HTMLDivElement>(null);

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
    return audioRef.current && audioState && DialogContentData?.data[currentContentIndex + 1];
  }, [DialogContentData?.data, audioState, currentContentIndex]);

  useEffect(() => {
    if (isNextContent && audioRef.current) {
      setAudioSrc(DialogContentData?.data[currentContentIndex].audio!.src ?? "");
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

  const isNextContentAndHasQuestion = useMemo(() => {
    return (
      DialogContentData?.data?.[currentContentIndex + 1] &&
      !DialogContentData?.data?.[currentContentIndex].hasQuestion
    );
  }, [DialogContentData?.data, currentContentIndex]);

  audioRef.current?.addEventListener("ended", () => {
    if (isNextContentAndHasQuestion) {
      setTimeout(() => {
        setCurrentContentIndex(currentContentIndex + 1);
        setAudioState(true);
        layoutRef.current?.scrollTo({
          top: currentHeight,
          left: 0,
          behavior: "smooth",
        });
      }, 2000);
    } else {
      setAudioState(false);
    }
  });

  dialogAudioRef.current?.addEventListener("ended", () => {
    if (isNextContentAndHasQuestion) {
      setTimeout(() => {
        setCurrentContentIndex(currentContentIndex + 1);
        setDialogAudioState(false);
        setAudioState(true);
        layoutRef.current?.scrollTo({
          top: currentHeight,
          left: 0,
          behavior: "smooth",
        });
      }, 2000);
    }
  });

  return (
    <TemplateCommonLayout>
      <TitleContent title={thisPage.title} description={thisPage.description} />
      <TP02Layout customCss={layoutCss} layoutRef={layoutRef}>
        <DialogHeader>
          <DialogAudio audioHandler={handleClickAudioButton} audioState={audioState} />
          <DialogOptionButton
            text="병음"
            active={pinyinOption}
            handleClickOption={handleClickPinyinOption}
          />
          <DialogOptionButton
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
          setCurrentContentIndex={setCurrentContentIndex}
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
