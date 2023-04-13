import React, { useCallback, useMemo, useState } from "react";
import { CharacterCardListContentData, Content } from "../../core";
import { ModalLearningPoint } from "../modal";
import CharacterCardComponent from "../molecules/ChracterCardComponent";

export interface CharacterCardListComponentProps {
  contents: CharacterCardListContentData;
}

const CharacterCardListComponent = ({
  contents,
}: CharacterCardListComponentProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContents, setIsModalContents] = useState<Content[]>();

  const handleClickSummaryBtn = useCallback((modalContents?: Content[]) => {
    setIsModalOpen(true);
    setIsModalContents(modalContents);
  }, []);

  const characterCards = useMemo(() => {
    return contents.data.map((characterCard, characterCardIndex) => {
      return (
        <CharacterCardComponent
          characterCard={characterCard}
          key={characterCardIndex}
          handleClickSummaryBtn={handleClickSummaryBtn}
        />
      );
    });
  }, [contents.data, handleClickSummaryBtn]);

  const hasSummaryModal = useMemo(() => {
    return contents.data.some((characterCard) => {
      return (
        characterCard.modalContents && characterCard.modalContents.length > 0
      );
    });
  }, [contents.data]);

  return (
    <div className="training-wrapper">
      <ul
        className={`training-list-wrap ${
          hasSummaryModal ? "training-end" : ""
        }`}
      >
        {characterCards}
      </ul>
      <ModalLearningPoint
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        wideModal={true}
        modalContents={modalContents}
      />
    </div>
  );
};

export default CharacterCardListComponent;
