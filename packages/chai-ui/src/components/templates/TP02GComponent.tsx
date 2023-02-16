import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import useAudio from "../../hooks/useAudio";
import { TP02G } from "../../types/pageTemplate";
import { TemplateProps } from "../../types/templates";
import DialogAudio from "../atoms/DialogAudio";
import OptionButton from "../atoms/OptionButton";
import TemplateCommonLayout from "../Layouts/TemplateCommonLayout";
import TP02Layout from "../Layouts/TP02Layout";
import TitleContent from "../molecules/TitleContent";
import DialogContainer from "../molecules/DialogContainer";
import useThrottle from "../../hooks/useThrottle";
import { changePXtoVH, changePXtoVW } from "../../utils/styles";
import { titleHeight } from "../../constants/layout";

const DialogHeader = styled.div`
  z-index: 1;
  position: fixed;
  top: calc(${changePXtoVH(titleHeight)} + ${changePXtoVW(80)});
  right: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: ${changePXtoVH(12)};
`;

const layoutCss = css`
  position: relative;
  display: block;
`;

interface TP02GComponentProps extends TemplateProps {}

const TP02GComponent = ({
  setPageCompleted,
  page,
  showHeader = true,
}: TP02GComponentProps) => {
  const [pinyinOption, setPinyinOption] = useState(true);
  const [audioSrc, setAudioSrc] = useState("");
  const [audioState, setAudioState] = useState(false);
  const [translateOption, setTranslateOption] = useState(true);
  const [currentHeight, setCurrentHeight] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const dialogAudioRef = useRef<HTMLAudioElement>(null);
  const layoutRef = useRef<HTMLDivElement>(null);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [endDialog, setEndDialog] = useState(false);

  const { addThrottle } = useThrottle();

  const {
    audioIndex,
    audioSrc: dialogAudioSrc,
    handleClickAudioButton: handleClickDialogAudioButton,
    audioState: dialogAudioState,
    setAudioState: setDialogAudioState,
  } = useAudio(dialogAudioRef);

  const thisPage = page as TP02G;

  useEffect(() => {
    setPageCompleted();
  }, [setPageCompleted]);

  const DialogContentData = useMemo(() => {
    return thisPage.template.contents.find(
      (content) => content.type === "dialog",
    );
  }, [thisPage.template.contents]);

  useEffect(() => {
    if (!DialogContentData?.data[currentContentIndex]) {
      return;
    }
    if (audioRef.current && audioState) {
      setAudioSrc(
        DialogContentData?.data[currentContentIndex].audio!.src ?? "",
      );
      audioRef.current.pause();
      audioRef.current.load();
      void audioRef.current.play();
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

    if (endDialog) {
      setCurrentContentIndex(0);
      setEndDialog(false);
      layoutRef.current?.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }

    if (audioState) {
      setAudioState(false);
      audioRef.current.pause();
    } else {
      setAudioState(true);
      void audioRef.current.play();
      if (dialogAudioRef.current) {
        dialogAudioRef.current.pause();
        setDialogAudioState(false);
      }
    }
  };

  const onEndTotalAudio = useCallback(() => {
    addThrottle(500, () => {
      if (
        DialogContentData?.data?.[currentContentIndex].hasQuestion ||
        !DialogContentData?.data?.[currentContentIndex + 1]
      ) {
        setEndDialog(true);
        setAudioState(false);
        return;
      }

      if (
        !DialogContentData?.data?.[currentContentIndex].hasQuestion &&
        DialogContentData?.data?.[currentContentIndex + 1]
      ) {
        layoutRef.current?.scrollTo({
          top: currentHeight,
          left: 0,
          behavior: "smooth",
        });
        setCurrentContentIndex((prev) => prev + 1);
        // NOTE kjw 다이얼로그 콘텐츠 인덱스가 바뀌며 전체오디오의 상태를 변경해줌 -> 다음 오디오가 재생이됨.
        setAudioState(true);
      }
    });
  }, [
    DialogContentData?.data,
    currentContentIndex,
    addThrottle,
    currentHeight,
  ]);

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
    <TemplateCommonLayout layoutRef={layoutRef}>
      {showHeader ? (
        <TitleContent
          title={thisPage.title}
          description={thisPage.description}
        />
      ) : (
        <></>
      )}
      <TP02Layout customCss={layoutCss}>
        <DialogHeader>
          <DialogAudio
            audioHandler={handleClickAudioButton}
            audioState={audioState}
          />
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
          setEndDialog={setEndDialog}
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

export default TP02GComponent;
