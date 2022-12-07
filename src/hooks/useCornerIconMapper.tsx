import { CornerNameType } from "../types/cornerName";
const useCornerIconMapper = () => {
  const cornerIconMapper: Record<CornerNameType, string> = {
    복습: `${process.env.REACT_APP_BASE_URL}/images/cornerIcon/reviseIcon.png`,
    "학습 1": `${process.env.REACT_APP_BASE_URL}/images/cornerIcon/eduIconOne.png`,
    "학습 2": `${process.env.REACT_APP_BASE_URL}/images/cornerIcon/eduIconTwo.png`,
    "학습 3": `${process.env.REACT_APP_BASE_URL}/images/cornerIcon/eduIconThree.png`,
    회화: `${process.env.REACT_APP_BASE_URL}/images/cornerIcon/conversationIcon.png`,
    문화: `${process.env.REACT_APP_BASE_URL}/images/cornerIcon/cultureIcon.png`,
    연습문제: `${process.env.REACT_APP_BASE_URL}/images/cornerIcon/practiceIcon.png`,
    문법: `${process.env.REACT_APP_BASE_URL}/images/cornerIcon/grammarIcon.png`,
    단어: `${process.env.REACT_APP_BASE_URL}/images/cornerIcon/wordIcon.png`,
    패턴중국어: `${process.env.REACT_APP_BASE_URL}/images/cornerIcon/patternIcon.png`,
    "주제별 표현(메타인지테스트)": `${process.env.REACT_APP_BASE_URL}/images/cornerIcon/metaIcon.png`,
  };

  const getCornerIcon = (cornerName: CornerNameType) => {
    return cornerIconMapper[cornerName];
  };

  return {
    getCornerIcon,
  };
};

export default useCornerIconMapper;
