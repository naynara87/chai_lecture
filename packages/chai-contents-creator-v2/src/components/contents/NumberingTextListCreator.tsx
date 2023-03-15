import styled from "@emotion/styled";
import AddButton from "../atoms/AddButton";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";
import { ContentCommonProps } from "../../types/page";
import { NumberingTextListContentData } from "chai-ui-v2";
import React from "react";
import { numberingTextDefaultData } from "../../data/appData";
import TextEditorViewer from "../molecules/TextEditorViewer";

const NumberingTextCreatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const NumberingListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
`;

const NumberingList = styled.li`
  align-items: flex-start;
  width: 100%;
  display: flex;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  .number {
    position: relative;
    top: unset;
    left: unset;
    margin-right: 16px;
  }
`;

const TextWrap = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  .text1 {
    width: 50%;
  }

  .text2 {
    width: 50%;
  }
`;

/**
 * 번호 매기기
 * CH-01-03
 * NOTE : 만약 컴포넌트 안에서 각 영역별로 focus를 주고 싶다면
 * - 현재 컴포넌트에 focusArea라는 state를 만들고
 * - 각 영역에 onClick을 주고
 * - onClick시 focusArea를 해당 영역으로 변경해서 특정 영역만 에디터가 활성화되게 할 수 있음
 */
const NumberingTextListCreator = ({
  content,
  setFocusedId,
  isFocused,
  updateContent,
  currentSlide,
  position,
}: ContentCommonProps) => {
  const thisContent = content as NumberingTextListContentData;

  const updateNumberingTextData = (
    numberingTextData: NumberingTextListContentData["data"],
  ) => {
    updateContent(
      currentSlide.id,
      content.id,
      position,
      getCurrentContent(numberingTextData),
    ); // total content 업데이트
  };

  const getCurrentContent = (
    numberingTextData: NumberingTextListContentData["data"],
  ): NumberingTextListContentData => {
    return {
      ...thisContent,
      data: numberingTextData,
    };
  };

  /**
   * 번호 추가
   */
  const addNumberingTextItem = () => {
    const addedNewData = [...thisContent.data, { ...numberingTextDefaultData }];
    updateNumberingTextData(addedNewData);
  };

  /**
   * 현재 선택 영역 텍스트 가져오기
   */
  const getText = (
    rowIndex: number,
    columnIndex: "firstText" | "secondText",
  ) => {
    return thisContent.data[rowIndex][columnIndex] ?? "";
  };

  /**
   * 현재 선택 영역 텍스트 업데이트
   */
  const setText = (
    rowIndex: number,
    columnIndex: "firstText" | "secondText",
    text: string,
  ) => {
    const updatedData = thisContent.data.map((item, index) => {
      if (index === rowIndex) {
        return {
          ...item,
          [columnIndex]: text,
        };
      }
      return item;
    });
    updateNumberingTextData(updatedData);
  };

  const deleteCurrentNumberingTextItem = (index: number) => {
    const updatedData = thisContent.data.filter((_, i) => i !== index);
    updateNumberingTextData(updatedData);
  };

  return (
    <ContentCreatorLayout>
      <NumberingTextCreatorWrapper>
        <AddButton onClick={addNumberingTextItem}>
          번호 추가
        </AddButton>
        <NumberingListWrapper onClick={(e) => setFocusedId(e, content.id)}>
          {thisContent.data.map((item, index) => {
            return (
              <NumberingList key={index} className="numbering-list">
                <span className="number">{index + 1}</span>
                <TextWrap>
                  <div className="text1">
                    <TextEditorViewer
                      isFocused={isFocused}
                      setText={(text) => setText(index, "firstText", text)}
                      text={getText(index, "firstText")}
                    />
                  </div>
                  <div className="text2">
                    <TextEditorViewer
                      isFocused={isFocused}
                      setText={(text) => setText(index, "secondText", text)}
                      text={getText(index, "secondText")}
                    />
                  </div>
                </TextWrap>
                <ObjectDeleteButton
                  onClick={() => deleteCurrentNumberingTextItem(index)}
                />
              </NumberingList>
            );
          })}
        </NumberingListWrapper>
      </NumberingTextCreatorWrapper>
    </ContentCreatorLayout>
  );
};

export default NumberingTextListCreator;
