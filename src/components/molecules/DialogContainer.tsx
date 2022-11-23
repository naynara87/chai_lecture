import React, { useCallback, useEffect, useRef } from "react";
import { ID } from "../../types/appData";
import { DialogData } from "../../types/templateContents";
import Dialog from "../contents/Dialog";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";

interface DialogContainerStylesProps {
  customCss?: SerializedStyles;
}

const DialogContainerStyles = styled.div<DialogContainerStylesProps>`
  ${(props) => props.customCss}
`;
interface DialogContainerProps {
  datas: DialogData[];
  audioIndex?: number;
  dialogAudioState?: boolean;
  layoutRef: React.RefObject<HTMLDivElement>;
  audioRef?: React.RefObject<HTMLAudioElement>;
  audioState?: boolean;
  currentContentIndex: number;
  currentHeight: number;
  pinyinOption?: boolean;
  translateOption?: boolean;
  setAudioState?: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentContentIndex: React.Dispatch<React.SetStateAction<number>>;
  setCurrentHeight: React.Dispatch<React.SetStateAction<number>>;
  handleClickDialogAudioButton?: (src: string, index: number) => void;
  customCss?: SerializedStyles;
}

const DialogContainer = ({
  datas,
  audioIndex,
  dialogAudioState,
  layoutRef,
  audioRef,
  audioState,
  currentHeight,
  currentContentIndex,
  pinyinOption,
  translateOption,
  setAudioState,
  setCurrentContentIndex,
  setCurrentHeight,
  handleClickDialogAudioButton,
  customCss,
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
      if (datas[index + 1]) {
        setCurrentContentIndex(index + 1);
        if (setAudioState) {
          setAudioState(true);
        }
        layoutRef.current?.scrollTo({
          top: currentHeight,
          left: 0,
          behavior: "smooth",
        });
      }
    },
    [datas, currentHeight, layoutRef, setAudioState, setCurrentContentIndex],
  );

  const getCurrentShowDialog = useCallback(
    (dialogs: HTMLCollectionOf<Element>) => {
      setCurrentHeight(Math.round(dialogs[dialogs.length - 1].scrollHeight) * dialogs.length);
    },
    [setCurrentHeight],
  );

  useEffect(() => {
    const dialogs = document.getElementsByClassName("dialog");
    getCurrentShowDialog(dialogs);
  }, [getCurrentShowDialog, currentContentIndex]);

  const mainContents = useCallback(
    (datas: DialogData[]) => {
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
          />
        );
      });
    },
    [
      audioIndex,
      audioState,
      currentContentIndex,
      dialogAudioState,
      handleChangeContent,
      handleClickDialogAudio,
      pinyinOption,
      translateOption,
    ],
  );

  return <DialogContainerStyles customCss={customCss}>{mainContents(datas)}</DialogContainerStyles>;
};

export default DialogContainer;
