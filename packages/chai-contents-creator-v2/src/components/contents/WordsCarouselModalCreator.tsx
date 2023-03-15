import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import { DraggableContentCommonProps } from "../../types/page";
import IconDictionary from "chai-ui-v2/dist/assets/images/icon/icon_dictionary.svg";
import AddButton from "../atoms/AddButton";
import styled from "@emotion/styled";

const WordsCarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    margin-bottom: 8px;
    box-shadow: 0px 4px 0px rgba(88, 88, 88, 0.2);
    border-radius: 8px;
    width: 40px;
    height: 40px;
  }
`;

const WordsCarouselModalCreator = ({
  content,
  setFocusedId,
  isFocused,
  updateContent,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
}: DraggableContentCommonProps) => {
  return (
    <ContentCreatorLayout
      isDraggable={isDraggable}
      draggableProvided={draggableProvided}
      align="center"
    >
      <WordsCarouselWrapper>
        <img src={IconDictionary} alt="" />
        {/* TODO: 단어장 수정 클릭 시  ModalWordsCarousel 오픈*/}
        <AddButton>단어장 수정</AddButton>
      </WordsCarouselWrapper>
    </ContentCreatorLayout>
  );
};

export default WordsCarouselModalCreator;
