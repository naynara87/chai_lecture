import { CornerNameType } from "../types/cornerName";
import reviseIcon from "../assets/icon/reviseIcon.png";
import eduIconOne from "../assets/icon/eduIconOne.png";
import eduIconTwo from "../assets/icon/eduIconTwo.png";
import eduIconThree from "../assets/icon/eduIconThree.png";
import conversationIcon from "../assets/icon/conversationIcon.png";
import cultureIcon from "../assets/icon/cultureIcon.png";
import practiceIcon from "../assets/icon/practiceIcon.png";
import grammarIcon from "../assets/icon/grammarIcon.png";
import wordIcon from "../assets/icon/wordIcon.png";
import patternIcon from "../assets/icon/patternIcon.png";
import metaIcon from "../assets/icon/metaIcon.png";

const useCornerIconMapper = () => {
  const cornerIconMapper: Record<CornerNameType, string> = {
    복습: reviseIcon,
    "학습 1": eduIconOne,
    "학습 2": eduIconTwo,
    "학습 3": eduIconThree,
    회화: conversationIcon,
    문화: cultureIcon,
    연습문제: practiceIcon,
    문법: grammarIcon,
    단어: wordIcon,
    패턴중국어: patternIcon,
    "주제별 표현(메타인지테스트)": metaIcon,
  };

  const getCornerIcon = (cornerName: CornerNameType) => {
    return cornerIconMapper[cornerName];
  };

  return {
    getCornerIcon,
  };
};

export default useCornerIconMapper;
