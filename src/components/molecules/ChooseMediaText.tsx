import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import useAudio from "../../hooks/useAudio";
import { ChooseMediaTextAudio, ChooseMediaTextData } from "../../types/templateContents";
import MediaText from "../atoms/MediaText";
import Explanation from "./Explanation";

const MediaTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`;

interface ChooseMediaTextProps {
  datas: ChooseMediaTextData;
}

const ChooseMediaText = ({ datas }: ChooseMediaTextProps) => {
  const { choices, answerIndex, explanation } = datas;
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);
  const [sortList, setSortList] = useState<ChooseMediaTextAudio[]>([]);

  const audioRef = useRef<HTMLAudioElement>(null);

  const { audioSrc, audioIndex, handleClickAudioButton } = useAudio(audioRef);

  const handleClickCloseExplanation = () => {
    setShowExplanation(false);
  };

  useEffect(() => {
    const choicesCopy = [...choices];
    setSortList(choicesCopy.sort(() => Math.random() - 0.5));
  }, [choices]);

  const handleClickAnswer = (index: number) => {
    if (selectedIndex !== undefined) {
      return;
    }
    setShowExplanation(true);
    setSelectedIndex(index);
    setIsCorrect(sortList[index] === choices[answerIndex]);
  };

  return (
    <div>
      <MediaTextContainer>
        {sortList.map((content, index) => {
          return (
            <MediaText
              key={index}
              index={index}
              text={content.text}
              onClickMediaText={handleClickAnswer}
              audioUrl={content.audio?.src}
              currentAudioIndex={audioIndex}
              onClickAudioButton={handleClickAudioButton}
              check={selectedIndex !== undefined && index === selectedIndex ? isCorrect : undefined}
            />
          );
        })}
      </MediaTextContainer>
      {showExplanation && (
        <Explanation
          explanation={explanation}
          handleClickClose={handleClickCloseExplanation}
          isCorrect={isCorrect}
        />
      )}
      <audio ref={audioRef}>
        <source src={audioSrc} />
      </audio>
    </div>
  );
};

export default ChooseMediaText;
