import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { ID } from "../../types/appData";
import { DialogData } from "../../types/templateContents";
import Dialog from "../contents/Dialog";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";
import CheckButton from "../atoms/CheckButton";
import { footerHeightNormal } from "../../constants/layout";
import { changePXtoVH } from "../../utils/styles";
interface DialogContainerStylesProps {
  customCss?: SerializedStyles;
}

const DialogContainerStyles = styled.div<DialogContainerStylesProps>`
  padding-bottom: calc(${footerHeightNormal} + ${changePXtoVH(50)});
  ${(props) => props.customCss}
`;
interface DialogContainerProps {
  datas: DialogData[];
  tpType?: string;
  audioIndex?: number;
  dialogAudioState?: boolean;
  layoutRef?: React.RefObject<HTMLDivElement>;
  audioRef?: React.RefObject<HTMLAudioElement>;
  audioState?: boolean;
  currentContentIndex: number;
  currentHeight?: number;
  pinyinOption?: boolean;
  translateOption?: boolean;
  setAudioState?: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentHeight?: React.Dispatch<React.SetStateAction<number>>;
  handleClickDialogAudioButton?: (src: string, index: number) => void;
  setCurrentContentIndex?: React.Dispatch<React.SetStateAction<number>>;
  customCss?: SerializedStyles;
  isShowCorrect?: boolean;
  setIsShowCorrect?: React.Dispatch<React.SetStateAction<boolean>>;
}

const DialogContainer = ({
  datas,
  tpType,
  audioIndex,
  dialogAudioState,
  layoutRef,
  audioRef,
  audioState,
  currentHeight,
  currentContentIndex,
  setCurrentContentIndex,
  pinyinOption,
  translateOption,
  setAudioState,
  setCurrentHeight,
  handleClickDialogAudioButton,
  customCss,
  isShowCorrect,
  setIsShowCorrect,
}: DialogContainerProps) => {
  const dialogIdRef = useRef<ID>("");

  const handleClickDialogAudio = useCallback(
    (src: string, index: number) => {
      if (!audioRef?.current || !handleClickDialogAudioButton) {
        return;
      }
      handleClickDialogAudioButton(src, index);
      if (!dialogAudioState && audioRef.current && setAudioState) {
        audioRef.current.pause();
        setAudioState(false);
      }
    },
    [handleClickDialogAudioButton, dialogAudioState, audioRef, setAudioState],
  );

  const handleChangeContent = useCallback(
    (index: number) => {
      if (currentContentIndex === undefined) {
        return;
      }

      if (index >= currentContentIndex && setCurrentContentIndex) {
        setCurrentContentIndex((prev) => prev + 1);
      }

      if (setAudioState) {
        setAudioState(true);
      }

      if (layoutRef) {
        layoutRef.current?.scrollTo({
          top: currentHeight,
          left: 0,
          behavior: "smooth",
        });
      }
    },
    [currentHeight, layoutRef, setAudioState, currentContentIndex, setCurrentContentIndex],
  );

  const getCurrentShowDialog = useCallback(
    (dialogs: HTMLCollectionOf<Element>) => {
      if (!setCurrentHeight) {
        return;
      }
      setCurrentHeight(Math.round(dialogs[dialogs.length - 1].scrollHeight) * dialogs.length);
    },
    [setCurrentHeight],
  );

  useEffect(() => {
    const dialogs = document.getElementsByClassName("dialog");
    getCurrentShowDialog(dialogs);
  }, [getCurrentShowDialog, currentContentIndex]);

  const mainContents = useMemo(() => {
    return datas.map((content, index) => {
      const { id } = content;
      const isSameId = id !== dialogIdRef.current;
      dialogIdRef.current = id;

      return (
        <Dialog
          dialogContent={content}
          key={index}
          index={index}
          renderProfile={index === 0 ? true : isSameId}
          audioHandler={handleClickDialogAudio}
          currentAudioIndex={audioIndex}
          totalAudioPlayed={audioState}
          audioState={dialogAudioState}
          isHide={currentContentIndex >= index ? false : true}
          handleClickAnswer={handleChangeContent}
          showPinyin={pinyinOption}
          showTranslate={translateOption}
          showAudioButton={content.audio ? true : false}
          isShowCorrect={isShowCorrect}
          isBlockedCheck={tpType === "TP02K" && currentContentIndex !== index ? true : undefined}
        />
      );
    });
  }, [
    audioIndex,
    audioState,
    currentContentIndex,
    dialogAudioState,
    handleChangeContent,
    handleClickDialogAudio,
    pinyinOption,
    translateOption,
    isShowCorrect,
    datas,
    tpType,
  ]);

  const handleClickCheckButton = () => {
    if (setIsShowCorrect) {
      setIsShowCorrect(true);
    }
  };

  return (
    <DialogContainerStyles customCss={customCss}>
      {mainContents}
      {setIsShowCorrect && (
        <CheckButton
          text="채점하기"
          handleClickCheckButton={handleClickCheckButton}
          isHide={currentContentIndex === datas.length ? false : true}
        />
      )}
    </DialogContainerStyles>
  );
};

export default DialogContainer;
