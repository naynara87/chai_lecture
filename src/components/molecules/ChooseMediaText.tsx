import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import useAudio from "../../hooks/useAudio";
import { ChooseMediaTextAudio, ChooseMediaTextData } from "../../types/templateContents";
import AudioButton from "../atoms/AudioButton";
import QuizAnswer from "../atoms/QuizAnswer";
import Explanation from "./Explanation";

const MediaTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0 20px 20px;
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

  const { audioSrc, audioIndex, handleClickAudioButton, audioState } = useAudio(audioRef);

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
      {sortList.map((content, index) => {
        return (
          <MediaTextContainer>
            <QuizAnswer
              key={index}
              answerText={content.text}
              isCorrect={sortList[answerIndex] === choices[index]}
              index={index}
              checked={selectedIndex === index ? true : false}
              onClickAnswer={() => {
                if (selectedIndex !== undefined) {
                  return;
                }
                handleClickAnswer(index);
              }}
            />
            <AudioButton
              isAudio={false}
              audioUrl={content.audio?.src}
              audioHandler={handleClickAudioButton}
              currentAudioIndex={audioIndex}
              audioIndex={index}
              audioState={audioState}
            />
          </MediaTextContainer>
        );
      })}
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
