import React, { useCallback, useEffect, useRef } from "react";
import { ID } from "../../types/appData";
import { DialogData } from "../../types/templateContents";
import Dialog from "../contents/Dialog";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";
import CheckButton from "../atoms/CheckButton";
import { footerHeightNormal } from "../../constants/layout";
interface DialogContainerStylesProps {
  customCss?: SerializedStyles;
}

const DialogContainerStyles = styled.div<DialogContainerStylesProps>`
  padding-bottom: ${footerHeightNormal};
  ${(props) => props.customCss}
`;
interface DialogContainerProps {
  datas: DialogData[];
  audioIndex?: number;
  dialogAudioState?: boolean;
  layoutRef: React.RefObject<HTMLDivElement>;
  audioRef?: React.RefObject<HTMLAudioElement>;
  audioState?: boolean;
  currentContentIndex: React.MutableRefObject<number>;
  currentHeight: number;
  pinyinOption?: boolean;
  translateOption?: boolean;
  setAudioState?: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentHeight: React.Dispatch<React.SetStateAction<number>>;
  handleClickDialogAudioButton?: (src: string, index: number) => void;
  customCss?: SerializedStyles;
  isShowCorrect?: boolean;
  saveCurrentContentIndex?: React.MutableRefObject<number>;
  setIsShowCorrect?: React.Dispatch<React.SetStateAction<boolean>>;
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
  setCurrentHeight,
  handleClickDialogAudioButton,
  customCss,
  isShowCorrect,
  saveCurrentContentIndex,
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
      currentContentIndex.current += 1;
      if (setAudioState) {
        setAudioState(true);
      }
      layoutRef.current?.scrollTo({
        top: currentHeight,
        left: 0,
        behavior: "smooth",
      });
    },
    [currentHeight, layoutRef, setAudioState, currentContentIndex],
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
            isHide={currentContentIndex.current >= index ? false : true}
            handleClickAnswer={handleChangeContent}
            showPinyin={pinyinOption}
            showTranslate={translateOption}
            showAudioButton={content.audio ? true : false}
            isShowCorrect={isShowCorrect}
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
      isShowCorrect,
    ],
  );

  const handleClickCheckButton = () => {
    if (setIsShowCorrect) {
      setIsShowCorrect(true);
    }
  };

  return (
    <DialogContainerStyles customCss={customCss}>
      {mainContents(datas)}
      {setIsShowCorrect && (
        <CheckButton
          text="채점하기"
          handleClickCheckButton={handleClickCheckButton}
          isHide={currentContentIndex.current === datas.length ? false : true}
        />
      )}
    </DialogContainerStyles>
  );
};

export default DialogContainer;
