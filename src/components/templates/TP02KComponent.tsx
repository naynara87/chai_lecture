import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  const [currentContentIndex, setCurrentContentIndex] = useState(1);
  const [currentHeight, setCurrentHeight] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
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
    if (!audioRef.current) {
      return;
    }
    setAudioSrc(DialogContentData?.data[currentContentIndex].audio.src ?? "");
    audioRef.current.pause();
    audioRef.current.load();
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 2000);
  }, [currentContentIndex, DialogContentData?.data]);

  const handleChangeContent = useCallback(
    (index: number) => {
      if (DialogContentData?.data[index + 1]) {
        setTimeout(() => {
          setCurrentContentIndex(index + 1);
          setAudioState(true);
          layout02?.scrollTo({
            top: currentHeight,
            left: 0,
            behavior: "smooth",
          });
        }, 2000);
      }
    },
    [DialogContentData?.data, currentHeight, layout02],
  );

  const getCurrentShowDialog = (dialogs: HTMLCollectionOf<Element>) => {
    setCurrentHeight(Math.round(dialogs[dialogs.length - 1].scrollHeight) * dialogs.length);
  };

  const mainContents = useMemo(() => {
    if (!DialogContentData?.data) {
      return <></>;
    }

    return DialogContentData?.data.map((content, index) => {
      return (
        <Dialog
          key={index}
          index={index}
          text={content.text}
          pronunciation={content.pronunciation}
          meaning={content.meaning}
          hasQuestion={content.hasQuestion}
          choices={content.question?.choices ?? []}
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
    currentContentIndex,
    handleChangeContent,
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
      return;
    } else {
      setAudioState(true);
      audioRef.current.play();
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
        <audio ref={audioRef}>
          <source src={audioSrc} />
        </audio>
      </TP02Layout>
    </TemplateCommonLayout>
  );
};

export default TP02KComponent;
