import {
  ComponentButtonRadiBorderMain,
  ComponentButtonRadiFillMain,
  ModalBase,
  QuizPopupModalContentData,
} from "chai-ui-v2";
import React, { useEffect, useMemo, useState } from "react";
import { MODAL_CONTENT_EDITOR_HEIGHT } from "../../../constants/style";
import { quizPopupData } from "../../../data/appData";
import {
  ContentEditorCss,
  DescriptionWrapper,
  ImageThumb,
  ModalInner,
  ModalIntroductionContainer,
  SubTitleCss,
  TextEditorViewerWrapper,
  TitleCss,
  TitleWrap,
} from "../../../styles/modal";
import TextEditorViewer from "../TextEditorViewer";
import UrlInputWrapper from "../UrlInputWrapper";
import ImageIcon from "../../../assets/images/icon/icon_image_with_bg.svg";

export interface ModalSolutionProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  quizPopupModalData?: QuizPopupModalContentData;
  saveSolutionModalData: (data: QuizPopupModalContentData) => void;
  closeOnBackgroundClick?: boolean;
  solutionType?: "correct" | "incorrect";
}

const pageIntroductionDefaultData: QuizPopupModalContentData = quizPopupData;

type EditorType = "title" | "subTitle" | "contents";

const ModalSolution = ({
  isModalOpen,
  setIsModalOpen,
  quizPopupModalData,
  saveSolutionModalData,
  closeOnBackgroundClick,
  solutionType,
}: ModalSolutionProps) => {
  const [focusedEditor, setFocusedEditor] = useState<EditorType>();
  const [tempPageIntroductionData, setTempPageIntroductionData] =
    useState<QuizPopupModalContentData>(
      quizPopupModalData ?? pageIntroductionDefaultData,
    );

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    if (tempPageIntroductionData) {
      saveSolutionModalData(tempPageIntroductionData);
    } else {
      alert("데이터를 입력해주세요."); // FIXME: alert 대신 토스트 메시지로 변경
      return;
    }
    setIsModalOpen(false);
  };

  const handleCharacterUrlInput = (url: string) => {
    if (!solutionType) return;
    setTempPageIntroductionData({
      ...tempPageIntroductionData,
      data: {
        ...tempPageIntroductionData.data,
        [solutionType]: {
          ...tempPageIntroductionData.data[solutionType],
          character: {
            src: url,
          },
        },
      },
    });
  };

  const handleSoundEffectUrlInput = (src: string) => {
    if (!solutionType) return;
    setTempPageIntroductionData({
      ...tempPageIntroductionData,
      data: {
        ...tempPageIntroductionData.data,
        [solutionType]: {
          ...tempPageIntroductionData.data[solutionType],
          soundEffect: {
            src,
          },
        },
      },
    });
  };

  const handleVideoUrlInput = (src: string) => {
    if (!solutionType) return;
    setTempPageIntroductionData({
      ...tempPageIntroductionData,
      data: {
        ...tempPageIntroductionData.data,
        [solutionType]: {
          ...tempPageIntroductionData.data[solutionType],
          video: {
            src,
          },
        },
      },
    });
  };

  const profileUrl = useMemo(() => {
    if (!solutionType) return;
    return tempPageIntroductionData.data[solutionType].character?.src;
  }, [tempPageIntroductionData.data, solutionType]);

  const soundEffectUrl = useMemo(() => {
    if (!solutionType) return;
    return tempPageIntroductionData.data[solutionType].soundEffect?.src;
  }, [tempPageIntroductionData.data, solutionType]);

  const videoUrl = useMemo(() => {
    if (!solutionType) return;
    return tempPageIntroductionData.data[solutionType].video?.src;
  }, [tempPageIntroductionData.data, solutionType]);

  const title = useMemo(() => {
    if (!solutionType) return;
    return tempPageIntroductionData.data[solutionType].title;
  }, [tempPageIntroductionData.data, solutionType]);

  const setTitle = (title: string) => {
    if (!solutionType) return;
    setTempPageIntroductionData({
      ...tempPageIntroductionData,
      data: {
        ...tempPageIntroductionData.data,
        [solutionType]: {
          ...tempPageIntroductionData.data[solutionType],
          title,
        },
      },
    });
  };

  const subTitle = useMemo(() => {
    if (!solutionType) return;
    return tempPageIntroductionData.data[solutionType].sub;
  }, [tempPageIntroductionData.data, solutionType]);

  const setSubTitle = (subTitle: string) => {
    if (!solutionType) return;
    setTempPageIntroductionData({
      ...tempPageIntroductionData,
      data: {
        ...tempPageIntroductionData.data,
        [solutionType]: {
          ...tempPageIntroductionData.data[solutionType],
          sub: subTitle,
        },
      },
    });
  };

  const contents = useMemo(() => {
    if (!solutionType) return;
    return tempPageIntroductionData.data[solutionType].description;
  }, [tempPageIntroductionData.data, solutionType]);

  const setContents = (contents: string) => {
    if (!solutionType) return;
    setTempPageIntroductionData({
      ...tempPageIntroductionData,
      data: {
        ...tempPageIntroductionData.data,
        [solutionType]: {
          ...tempPageIntroductionData.data[solutionType],
          description: contents,
        },
      },
    });
  };

  useEffect(() => {
    const resetFocusedEditor = () => {
      setFocusedEditor(undefined);
    };
    window.addEventListener("click", resetFocusedEditor);
    return () => {
      window.removeEventListener("click", resetFocusedEditor);
    };
  }, []);

  const focusThisEditor = (editor: EditorType) => (e: React.MouseEvent) => {
    e.stopPropagation();
    setFocusedEditor(editor);
  };

  return (
    <ModalBase
      open={isModalOpen}
      onClose={handleClose}
      closeOnBackgroundClick={closeOnBackgroundClick}
    >
      <ModalInner>
        <ModalIntroductionContainer>
          <div className="flex-start-wrap">
            <ImageThumb>
              {/* 이미지를 넣으면 src가 해당 이미지의 src로 변경됨 */}
              <img
                src={profileUrl ? profileUrl : ImageIcon}
                alt="캐릭터 프로필"
              />
            </ImageThumb>
            <TitleWrap>
              <TextEditorViewerWrapper onClick={focusThisEditor("title")}>
                <TextEditorViewer
                  text={title ?? ""}
                  setText={setTitle}
                  isFocused={focusedEditor === "title"}
                  textViewerCss={TitleCss}
                />
              </TextEditorViewerWrapper>
              <TextEditorViewerWrapper onClick={focusThisEditor("subTitle")}>
                <TextEditorViewer
                  text={subTitle ?? ""}
                  setText={setSubTitle}
                  isFocused={focusedEditor === "subTitle"}
                  textViewerCss={SubTitleCss}
                />
              </TextEditorViewerWrapper>
            </TitleWrap>
          </div>
          <UrlInputWrapper
            typeText="이미지"
            onSubmit={handleCharacterUrlInput}
            defaultText={profileUrl}
          />
          <DescriptionWrapper onClick={focusThisEditor("contents")}>
            <TextEditorViewer
              text={contents ?? ""}
              setText={setContents}
              isFocused={focusedEditor === "contents"}
              editorCss={ContentEditorCss}
              editorMinHeight={MODAL_CONTENT_EDITOR_HEIGHT}
            />
          </DescriptionWrapper>
          <UrlInputWrapper
            typeText="효과음"
            onSubmit={handleSoundEffectUrlInput}
            defaultText={soundEffectUrl}
          />
          <UrlInputWrapper
            typeText="동영상"
            onSubmit={handleVideoUrlInput}
            defaultText={videoUrl}
          />
          <div className="btns-wrap">
            <ComponentButtonRadiBorderMain
              text="닫기"
              onClickBtn={handleClose}
            />
            <ComponentButtonRadiFillMain text="저장" onClickBtn={handleSave} />
          </div>
        </ModalIntroductionContainer>
      </ModalInner>
    </ModalBase>
  );
};

export default ModalSolution;
