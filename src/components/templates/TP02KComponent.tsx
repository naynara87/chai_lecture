import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useAudio from "../../hooks/useAudio";
import { ID } from "../../types/appData";
import { TP02K } from "../../types/pageTemplate";
import { DialogContent } from "../../types/templateContents";
import { TemplateProps } from "../../types/templates";
import DialogAudio from "../atoms/DialogAudio";
import DialogOptionButton from "../atoms/DialogOptionButton";
import Dialog from "../contents/Dialog";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP02Layout from "../Layouts/TP02Layout";
import TitleContent from "../molecules/TitleContent";

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
  const dialogIdRef = useRef<ID>("");
  const {
    audioIndex,
    audioSrc: dialogAudioSrc,
    handleClickAudioButton: handleClickDialogAudioButton,
    audioState: dialogAudioState,
    setAudioState: setDialogAudioState,
  } = useAudio(dialogAudioRef);

  const layout02 = document.getElementById("layout_02");

  const thisPage = page as TP02K;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const DialogContentData = useMemo(() => {
    return thisPage.template.contents.find((content) => content.type === "dialog") as
      | DialogContent
      | undefined;
  }, [thisPage.template.contents]);

  useEffect(() => {
    if (audioRef.current && audioState) {
      setAudioSrc(DialogContentData?.data[currentContentIndex].audio.src ?? "");
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentContentIndex, DialogContentData?.data, audioState]);

  const handleChangeContent = useCallback(
    (index: number) => {
      if (DialogContentData?.data[index + 1]) {
        setCurrentContentIndex(index + 1);
        setAudioState(true);
        layout02?.scrollTo({
          top: currentHeight,
          left: 0,
          behavior: "smooth",
        });
      }
    },
    [DialogContentData?.data, currentHeight, layout02],
  );

  const getCurrentShowDialog = useCallback((dialogs: HTMLCollectionOf<Element>) => {
    setCurrentHeight(Math.round(dialogs[dialogs.length - 1].scrollHeight) * dialogs.length);
  }, []);

  const handleClickDialogAudio = useCallback(
    (src: string, index: number) => {
      handleClickDialogAudioButton(src, index);
      if (!dialogAudioState && audioRef.current) {
        audioRef.current.pause();
        setAudioState(false);
      }
    },
    [handleClickDialogAudioButton, dialogAudioState],
  );

  const mainContents = useMemo(() => {
    if (!DialogContentData?.data) {
      return <></>;
    }

    return DialogContentData?.data.map((content, index) => {
      const { id, icon, text, pronunciation, meaning, audio, hasQuestion, question } = content;
      const isSameId = id !== dialogIdRef.current;
      dialogIdRef.current = id;
      return (
        <Dialog
          key={index}
          icon={icon.src}
          index={index}
          text={text}
          renderProfile={index === 0 ? true : isSameId}
          pronunciation={pronunciation}
          meaning={meaning}
          audioUrl={audio.src}
          audioHandler={handleClickDialogAudio}
          currentAudioIndex={audioIndex}
          totalAudioPlayed={audioState}
          audioState={dialogAudioState}
          hasQuestion={hasQuestion}
          choices={question?.choices ?? []}
          answerIndex={question?.answerIndex ?? 100}
          isHide={currentContentIndex >= index ? false : true}
          handleChangeContent={handleChangeContent}
          getCurrentShowDialog={getCurrentShowDialog}
          showPinyin={pinyinOption}
          showTranslate={translateOption}
        />
      );
    });
  }, [
    DialogContentData?.data,
    pinyinOption,
    translateOption,
    audioIndex,
    audioState,
    currentContentIndex,
    handleChangeContent,
    getCurrentShowDialog,
    handleClickDialogAudio,
    dialogAudioState,
  ]);

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

  audioRef.current?.addEventListener("ended", () => {
    if (
      DialogContentData?.data?.[currentContentIndex + 1] &&
      !DialogContentData?.data?.[currentContentIndex].hasQuestion
    ) {
      setTimeout(() => {
        setCurrentContentIndex(currentContentIndex + 1);
        setAudioState(true);
        layout02?.scrollTo({
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
    if (
      DialogContentData?.data?.[currentContentIndex + 1] &&
      !DialogContentData?.data?.[currentContentIndex].hasQuestion
    ) {
      setTimeout(() => {
        setCurrentContentIndex(currentContentIndex + 1);
        setDialogAudioState(false);
        setAudioState(true);
        layout02?.scrollTo({
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
      <TP02Layout customCss={layoutCss} id="layout_02">
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
        {mainContents}
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
