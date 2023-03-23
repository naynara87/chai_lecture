import styled from "@emotion/styled";
import { useState } from "react";
import { DraggableContentCommonProps } from "../../types/page";
import AudioWrapper from "../molecules/AudioWrapper";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import WordsCarousel from "../molecules/WordsCarousel";

const AudioAndWordsCarouselWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const AudioAndWordsCarouselModalCreator = ({
  content,
  setFocusedId,
  isFocused,
  updateContent,
  deleteContent,
  currentSlide,
  position,
  draggableProvided,
  isDraggable,
}: DraggableContentCommonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <ContentCreatorLayout>
      <AudioAndWordsCarouselWrapper>
        <AudioWrapper />
        {/* <WordsCarousel
          content={content}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        /> */}
      </AudioAndWordsCarouselWrapper>
    </ContentCreatorLayout>
  );
};

export default AudioAndWordsCarouselModalCreator;
