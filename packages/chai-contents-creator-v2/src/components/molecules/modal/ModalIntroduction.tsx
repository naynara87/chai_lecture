import {
  ComponentButtonRadiBorderMain,
  ComponentButtonRadiFillMain,
  PageIntroduction,
  ModalBase,
  useToast,
} from "chai-ui-v2";
import React, { useEffect, useMemo, useState } from "react";
import ImageIcon from "../../../assets/images/icon/icon_image_with_bg.svg";
import UrlInputWrapper from "../UrlInputWrapper";
import TextEditorViewer from "../TextEditorViewer";
import { MODAL_CONTENT_EDITOR_HEIGHT } from "../../../constants/style";
import {
  ContentEditorCss,
  SubTitleCss,
  TitleCss,
} from "../../../styles/modal";

const pageIntroductionDefaultData: PageIntroduction = {
  title: "",
  subTitle: "",
  contents: "",
  character: {
    url: "",
  },
};

type EditorType = "title" | "subTitle" | "contents";

export interface ModalIntroductionProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  introductionModalData?: PageIntroduction;
  saveIntroductionModalData: (data: PageIntroduction) => void;
  closeOnBackgroundClick?: boolean;
}
const ModalIntroduction = ({
  isModalOpen,
  setIsModalOpen,
  introductionModalData,
  saveIntroductionModalData,
  closeOnBackgroundClick = true,
}: ModalIntroductionProps) => {
  const [focusedEditor, setFocusedEditor] = useState<EditorType>();
  const { addToast } = useToast();

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const [tempPageIntroductionData, setTempPageIntroductionData] =
    useState<PageIntroduction>(
      introductionModalData ?? pageIntroductionDefaultData,
    );

  useEffect(() => {
    setTempPageIntroductionData(
      introductionModalData ?? pageIntroductionDefaultData,
    );
  }, [introductionModalData]);

  const handleSave = () => {
    if (tempPageIntroductionData) {
      saveIntroductionModalData(tempPageIntroductionData);
    } else {
      addToast("데이터를 입력해주세요.", "info");
      return;
    }
    setIsModalOpen(false);
  };

  const handleCharacterUrlInput = (url: string) => {
    setTempPageIntroductionData({
      ...tempPageIntroductionData,
      character: {
        url,
      },
    });
  };

  const handleSoundEffectUrlInput = (src: string) => {
    setTempPageIntroductionData({
      ...tempPageIntroductionData,
      soundEffect: {
        src,
      },
    });
  };

  const profileUrl = useMemo(() => {
    return tempPageIntroductionData.character?.url;
  }, [tempPageIntroductionData.character?.url]);

  const soundEffectUrl = useMemo(() => {
    return tempPageIntroductionData.soundEffect?.src;
  }, [tempPageIntroductionData.soundEffect?.src]);

  const title = useMemo(() => {
    return tempPageIntroductionData.title;
  }, [tempPageIntroductionData.title]);

  const setTitle = (title: string) => {
    setTempPageIntroductionData({
      ...tempPageIntroductionData,
      title,
    });
  };

  const subTitle = useMemo(() => {
    return tempPageIntroductionData.subTitle;
  }, [tempPageIntroductionData.subTitle]);

  const setSubTitle = (subTitle: string) => {
    setTempPageIntroductionData({
      ...tempPageIntroductionData,
      subTitle,
    });
  };

  const contents = useMemo(() => {
    return tempPageIntroductionData.contents;
  }, [tempPageIntroductionData.contents]);

  const setContents = (contents: string) => {
    setTempPageIntroductionData({
      ...tempPageIntroductionData,
      contents,
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
      <div className="modal-inner">
        <div className="modal-introduction-container">
          <div className="flex-start-wrap">
            <div className="image-thumb">
              {/* 이미지를 넣으면 src가 해당 이미지의 src로 변경됨 */}
              <img
                src={profileUrl ? profileUrl : ImageIcon}
                alt="캐릭터 프로필"
              />
            </div>
            <div className="title-wrap">
              <div onClick={focusThisEditor("title")}>
                <TextEditorViewer
                  text={title}
                  setText={setTitle}
                  isFocused={focusedEditor === "title"}
                  textViewerCss={TitleCss}
                  hasFontSize={false}
                />
              </div>
              <div onClick={focusThisEditor("subTitle")}>
                <TextEditorViewer
                  text={subTitle}
                  setText={setSubTitle}
                  isFocused={focusedEditor === "subTitle"}
                  textViewerCss={SubTitleCss}
                  hasFontSize={false}
                />
              </div>
            </div>
          </div>
          <UrlInputWrapper
            typeText="이미지"
            onSubmit={handleCharacterUrlInput}
            defaultText={profileUrl}
          />
          {/* 본문 */}
          <div className="description-wrapper" onClick={focusThisEditor("contents")}>
            <TextEditorViewer
              text={contents}
              setText={setContents}
              isFocused={focusedEditor === "contents"}
              editorCss={ContentEditorCss}
              editorMinHeight={MODAL_CONTENT_EDITOR_HEIGHT}
              hasFontSize={false}
            />
          </div>
          <UrlInputWrapper
            typeText="효과음"
            onSubmit={handleSoundEffectUrlInput}
            defaultText={soundEffectUrl}
          />
          <div className="btns-wrap">
            <ComponentButtonRadiBorderMain
              text="닫기"
              onClickBtn={handleClose}
            />
            <ComponentButtonRadiFillMain text="저장" onClickBtn={handleSave} />
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default ModalIntroduction;
