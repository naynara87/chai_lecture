import styled from "@emotion/styled";
import AudioWrapper from "../molecules/AudioWrapper";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import WordsCarousel from "../molecules/WordsCarousel";

const AudioAndWordsCarouselWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const AudioAndWordsCarouselModalCreator = () => {
  return (
    <ContentCreatorLayout>
      <AudioAndWordsCarouselWrapper>
        <AudioWrapper />
        <WordsCarousel />
      </AudioAndWordsCarouselWrapper>
    </ContentCreatorLayout>
  );
};

export default AudioAndWordsCarouselModalCreator;
