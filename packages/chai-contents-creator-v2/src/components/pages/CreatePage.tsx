import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import useTemplate from "../../hooks/useTemplate";
import {
  CreateAddBtn,
  CreateTemplateInner,
  CreateTemplateWrap,
} from "../../styles/template";
import TemplateMainLoading from "../templates/TemplateLoading";
import Button from "../atoms/Button";
import usePage from "../../hooks/usePage";
import useComponent from "../../hooks/useComponent";
import { DragDropContext } from "react-beautiful-dnd";
import { PREVIEW_URL } from "../../constants/url";

const CommonButtonContainer = styled.div`
  padding-bottom: 16px;
  position: absolute;
  right: 0;
  top: 0;
  text-align: right;
`;

const CreatePage = () => {
  const { getTemplate } = useTemplate();

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
  } = usePage();

  useEffect(() => {
    removePageDataFromLocalStorage();
    return () => {
      removePageDataFromLocalStorage();
    };
  }, [removePageDataFromLocalStorage]);

  const returnUseComponent = useComponent();

  const handleClickPreview = useCallback(() => {
    savePageDataToLocalStorage();
    window.open(PREVIEW_URL, "_blank");
  }, [savePageDataToLocalStorage]);

  const handleClickAddIntroductionModal = useCallback(() => {
    // TODO : 학습 변경 간지 추가 모달창 띄우기
    // 간지 페이지당 한개
    console.log("학습 변경 간지 추가 모달창 띄우기");
  }, []);

  const [isLoading] = useState(false); // setIsLoading

  return (
    <CreateTemplateWrap>
      <CreateTemplateInner>
        <CommonButtonContainer>
          <Button
            type="button"
            onClick={() => {
              console.log("저장");
            }}
          >
            테스트 저장 버튼
          </Button>
          <Button type="button" onClick={handleClickPreview}>
            미리보기
          </Button>
          <Button type="button" onClick={handleClickAddIntroductionModal}>
            학습 변경 간지 추가
          </Button>
        </CommonButtonContainer>
        {isLoading ? (
          <TemplateMainLoading />
        ) : (
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
              });
            })}
          </DragDropContext>
        )}
        <CreateAddBtn onClick={addSlide}>+ 슬라이드 추가</CreateAddBtn>
      </CreateTemplateInner>
    </CreateTemplateWrap>
  );
};

export default CreatePage;
