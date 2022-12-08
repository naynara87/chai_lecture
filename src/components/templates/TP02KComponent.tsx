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
import { changePXtoVH } from "../../utils/styles";

const DialogHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: ${changePXtoVH(12)};
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
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

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

  useEffect(() => {
    if (!DialogContentData?.data[currentContentIndex]) {
      return;
    }
    if (audioRef.current && audioState) {
      setAudioSrc(DialogContentData?.data[currentContentIndex].audio!.src ?? "");
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play();
      layoutRef.current?.scrollTo({
        top: currentHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [currentContentIndex, DialogContentData?.data, currentHeight, audioState]);

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

  const onEndTotalAudio = useCallback(() => {
    addThrottle(500, () => {
      if (DialogContentData?.data?.[currentContentIndex].hasQuestion) {
        setAudioState(false);
        return;
      }

      if (
        !DialogContentData?.data?.[currentContentIndex].hasQuestion &&
        DialogContentData?.data?.[currentContentIndex + 1]
      ) {
        setCurrentContentIndex((prev) => prev + 1);
        setAudioState(false);
      }
    });
  }, [DialogContentData?.data, currentContentIndex, addThrottle]);

  const handleEndDialogAudio = useCallback(() => {
    dialogAudioRef.current?.addEventListener("ended", () => {
      addThrottle(500, () => {
        setDialogAudioState(false);
      });
    });
  }, [addThrottle, setDialogAudioState]);

  useEffect(() => {
    audioRef.current?.addEventListener("ended", onEndTotalAudio);
    handleEndDialogAudio();

    return () => {
      // NOTE kjw currentContentIndex가 ended 이벤트에서 반영이 되지않아 useEffect 상에서 클린업함수를 이용하였음.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      audioRef.current?.removeEventListener("ended", onEndTotalAudio);
    };
  }, [handleEndDialogAudio, onEndTotalAudio]);

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
          tpType={thisPage.template.type}
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
