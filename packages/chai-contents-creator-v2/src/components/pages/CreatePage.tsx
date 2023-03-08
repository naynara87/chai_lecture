import { TemplateType } from "chai-ui-v2";
import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import useTemplate from "../../hooks/useTemplate";
import { CreateAddBtn, CreateTemplateWrap } from "../../styles/template";
import TemplateMainLoading from "./TemplateLoading";
import Button from "../atoms/Button";

const TestButtonContainer = styled.div`
  padding-bottom: 16px;
  position: absolute;
  right: 0;
  top: 0;
  text-align: right;
`;

type TestSlideType = {
  slideIndex: number;
  templateType: TemplateType;
};

const CreatePage = () => {
  const { getTemplate } = useTemplate();

  // slides
  // TODO gth 나중에 서버로 전송할 땐 slides가 2개 이상이면 MultiPage 타입으로 만들어서 전송해야한다
  // const [slides, setSlides] = useState<AllTemplateData[]>([]);
  const [slides, setSlides] = useState<TestSlideType[]>([
    {
      slideIndex: 0,
      templateType: "Template01",
    },
  ]);

  const handleChangeLayout = useCallback(
    (slideIndex: number, templateType: TemplateType) => {
      const newSlides = slides.map((slide) => {
        if (slide.slideIndex === slideIndex) {
          return {
            ...slide,
            templateType,
          };
        }
        return slide;
      });
      setSlides(newSlides);
    },
    [slides],
  );

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
      <TestButtonContainer>
        <Button type="button">테스트 저장 버튼</Button>
        <Button type="button" onClick={handleClickPreview}>
          미리보기
        </Button>
        <Button type="button" onClick={handleClickAddIntroductionModal}>
          학습 변경 간지 추가
        </Button>
      </TestButtonContainer>
      {isLoading ? (
        <TemplateMainLoading />
      ) : (
        // TODO : slides 맵 돌리기
        slides.map((slide) => {
          return getTemplate({
            templateType: slide.templateType,
            slideIndex: slide.slideIndex,
            handleChangeLayout,
          });
        })
      )}
      {/* TODO: lsh 슬라이드 추가 버튼 클릭 시 레이아웃 선택화면으로 이동 */}
      <CreateAddBtn>+&nbsp;&nbsp; 슬라이드 추가</CreateAddBtn>
    </CreateTemplateWrap>
  );
};

export default CreatePage;
