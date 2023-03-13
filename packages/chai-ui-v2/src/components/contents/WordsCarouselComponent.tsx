import React, { useState } from "react";
import { WordsCarouselContentData } from "../../core";
import IconDictionaryButton from "../atoms/Button/IconDictionaryButton";
import { LayoutModalVoca } from "../modal";

interface WordsCarouselComponentProps {
  contents: WordsCarouselContentData;
}

const WordsCarouselComponent = ({ contents }: WordsCarouselComponentProps) => {
  const [isVocaModalOpen, setIsVocaModalOpen] = useState(false);

  return (
    <>
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
    </>
  );
};

export default WordsCarouselComponent;
