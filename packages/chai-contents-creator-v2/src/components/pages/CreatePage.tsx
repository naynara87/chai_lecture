import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import useTemplate from "../../hooks/useTemplate";
import { CreateAddBtn, CreateTemplateWrap } from "../../styles/template";
import TemplateMainLoading from "./TemplateLoading";
import Button from "../atoms/Button";
import usePage from "../../hooks/usePage";

const CommonButtonContainer = styled.div`
  padding-bottom: 16px;
  position: absolute;
  right: 0;
  top: 0;
  text-align: right;
`;

const CreatePage = () => {
  const { getTemplate } = useTemplate();

  const { slides, addSlide, deleteSlide, handleChangeLayout } = usePage();

  const handleClickPreview = useCallback(() => {
    // TODO : 미리보기 모달창 띄우기 - 미리보기 모달은 페이지 내 모든 슬라이드를 미리보기 할 수 있도록 한다
    console.log("미리보기");
  }, []);

  const handleClickAddIntroductionModal = useCallback(() => {
    // TODO : 학습 변경 간지 추가 모달창 띄우기
    // 간지 페이지당 한개
    console.log("학습 변경 간지 추가 모달창 띄우기");
  }, []);

  const [isLoading] = useState(false); // setIsLoading

  // TODO : 템플릿 타입에 따라서 레이아웃을 변경해야함
  /**
   * TODO 모달창
   * - 컴포넌트 선택 시 나오는 모달
   * - 레이아웃 변경 시 나오는 모달
   *   - 경고 모달, 레이아웃 선택 모달
   * - 미리보기 시 나오는 모달
   * - 학습 변경 간지 추가 시 나오는 모달
   */

  return (
    <CreateTemplateWrap>
      <CommonButtonContainer>
        <Button type="button">테스트 저장 버튼</Button>
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
        slides.map((slide) => {
          return getTemplate({
            templateType: slide.templateType,
            slideIndex: slide.slideIndex,
            handleChangeLayout,
            deleteSlide,
            slides,
          });
        })
      )}
      <CreateAddBtn onClick={addSlide}>
        +&nbsp;&nbsp; 슬라이드 추가
      </CreateAddBtn>
    </CreateTemplateWrap>
  );
};

export default CreatePage;
