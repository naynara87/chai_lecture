import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import useTemplate from "../../hooks/useTemplate";
import {
  CreateAddBtn,
  CreateTemplateInner,
  CreateTemplateWrap,
} from "../../styles/template";
import Button from "../atoms/Button";
import useComponent from "../../hooks/useComponent";
import { DragDropContext } from "react-beautiful-dnd";
import { PREVIEW_URL } from "../../constants/url";
import ModalIntroduction from "../molecules/modal/ModalIntroduction";
import useCreatePage from "../../hooks/useCreatePage";
import { css } from "@emotion/react";
import { LoadingSpinner } from "chai-ui-v2";

const CommonButtonContainer = styled.div`
  padding-bottom: 16px;
  position: absolute;
  right: 0;
  top: 0;
  text-align: right;
`;

const LoadingScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

const saveButtonCss = css``;

const CreatePage = () => {
  const [isModalIntroductionOpen, setIsModalIntroductionOpen] = useState(false);

  const { getTemplate } = useTemplate();

  const { returnUsePage, handleSavePageData, initialPageData, isPageReady } =
    useCreatePage();

  const {
    slides,
    addSlide,
    deleteSlide,
    handleChangeLayout,
    addComponentMap,
    updateContent,
    handleOnDragEnd,
    savePageDataToLocalStorage,
    removePageDataFromLocalStorage,
    deleteContent,
    copyContent,
    pasteContent,
    pageData,
    saveIntroductionModalData,
    updateContentToMultiChoiceTemplate,
    updateContentToWordsInOrderTemplate,
    updateContentToSentenceInOrderTemplate,
    updateContentToFinalSpeakingTemplate,
  } = returnUsePage;

  useEffect(() => {
    // preview를 위한 localStorage 데이터 초기화
    removePageDataFromLocalStorage();
    return () => {
      removePageDataFromLocalStorage();
    };
  }, [removePageDataFromLocalStorage]);

  const returnUseComponent = useComponent();

  const handleClickPreview = useCallback(() => {
    savePageDataToLocalStorage();
    window.open(`#${PREVIEW_URL}`, "preview", "width=2000, height=1200");
  }, [savePageDataToLocalStorage]);

  const handleClickAddIntroductionModal = useCallback(() => {
    setIsModalIntroductionOpen(true);
  }, []);

  return (
    <CreateTemplateWrap>
      {isPageReady ? (
        <CreateTemplateInner>
          <CommonButtonContainer>
            <Button
              id="btn_save"
              type="button"
              onClick={handleSavePageData}
              customCSS={saveButtonCss}
            >
              저장
            </Button>
            <Button type="button" onClick={handleClickPreview}>
              미리보기
            </Button>
            <Button type="button" onClick={handleClickAddIntroductionModal}>
              학습 변경 간지 추가
            </Button>
          </CommonButtonContainer>
          {!initialPageData ? null : (
            <DragDropContext onDragEnd={handleOnDragEnd}>
              {slides.map((slide, index) => {
                return getTemplate({
                  key: index,
                  templateType: slide.type,
                  slideId: slide.id,
                  handleChangeLayout,
                  deleteSlide,
                  slides,
                  addComponentMap,
                  updateContent,
                  returnUseComponent,
                  deleteContent,
                  copyContent,
                  pasteContent,
                  updateContentToMultiChoiceTemplate,
                  updateContentToWordsInOrderTemplate,
                  updateContentToSentenceInOrderTemplate,
                  updateContentToFinalSpeakingTemplate,
                });
              })}
            </DragDropContext>
          )}
          {!initialPageData ? null : (
            <CreateAddBtn onClick={addSlide}>+ 슬라이드 추가</CreateAddBtn>
          )}
        </CreateTemplateInner>
      ) : (
        <LoadingScreen>
          <LoadingSpinner />
        </LoadingScreen>
      )}

      <ModalIntroduction
        isModalOpen={isModalIntroductionOpen}
        setIsModalOpen={setIsModalIntroductionOpen}
        closeOnBackgroundClick={false}
        saveIntroductionModalData={saveIntroductionModalData}
        introductionModalData={pageData.introduction}
      />
    </CreateTemplateWrap>
  );
};

export default CreatePage;
