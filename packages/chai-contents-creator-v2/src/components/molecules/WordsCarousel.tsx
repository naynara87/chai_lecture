import IconDictionary from "chai-ui-v2/dist/assets/images/icon/icon_dictionary.svg";
import AddButton from "../atoms/AddButton";
import styled from "@emotion/styled";

const WordsCarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: auto;
  & > img {
    margin-bottom: 8px;
    box-shadow: 0px 4px 0px rgba(88, 88, 88, 0.2);
    border-radius: 8px;
    width: 40px;
    height: 40px;
  }
  .btn-text {
    width: 80px;
    border-radius: 50px;
    font-size: 10px;
    font-weight: 500;
    white-space: nowrap;
    padding: 4px 16px;
    height: unset;
    color: #7686d4;
    border: 1px solid #dbe1ff;
  }
`;

const WordsCarousel = () => {
  return (
    <WordsCarouselWrapper>
      <img src={IconDictionary} alt="" />
      {/* TODO: 단어장 수정 클릭 시  ModalWordsCarousel 오픈*/}
      <AddButton>단어장 수정</AddButton>
    </WordsCarouselWrapper>
  );
};

export default WordsCarousel;