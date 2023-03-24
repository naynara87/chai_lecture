import styled from "@emotion/styled";

const CharacterSentenceAnswerListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CharacterSentenceAnswer = styled.p`
  padding: 16px 24px;
  border: 1px solid #c9c9c9;
  border-radius: 8px;
  box-shadow: 0px 4px 0px rgba(88, 88, 88, 0.2);
  color: #666666;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
`;

const CharacterSentenceAnswerListCreator = () => {
  return (
    <CharacterSentenceAnswerListWrapper>
      <CharacterSentenceAnswer>
        중국어 중국어 중국어 중국어
      </CharacterSentenceAnswer>
      <CharacterSentenceAnswer>
        중국어 중국어 중국어 중국어
      </CharacterSentenceAnswer>
      <CharacterSentenceAnswer>
        중국어 중국어 중국어 중국어
      </CharacterSentenceAnswer>
    </CharacterSentenceAnswerListWrapper>
  );
};

export default CharacterSentenceAnswerListCreator;
