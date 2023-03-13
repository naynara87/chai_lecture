import styled from "@emotion/styled";
import React, { useState } from "react";
import { WordsCarouselContentData } from "../../core";
import IconDictionaryButton from "../atoms/Button/IconDictionaryButton";
import { LayoutModalVoca } from "../modal";

const WordsCarouselWrap = styled.div`
  display: flex;
  justify-content: center;
`;
interface WordsCarouselComponentProps {
  contents: WordsCarouselContentData;
}

const WordsCarouselComponent = ({ contents }: WordsCarouselComponentProps) => {
  const [isVocaModalOpen, setIsVocaModalOpen] = useState(false);

  return (
    <WordsCarouselWrap>
      <IconDictionaryButton
        onClickBtn={() => {
          setIsVocaModalOpen(true);
        }}
      />
      <LayoutModalVoca
        isModalOpen={isVocaModalOpen}
        setIsModalOpen={setIsVocaModalOpen}
        contentsData={contents.data}
      />
    </WordsCarouselWrap>
  );
};

export default WordsCarouselComponent;
