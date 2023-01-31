import reviseIcon from "../assets/cornerIcon/reviseIcon.png";
import eduIconOne from "../assets/cornerIcon/eduIconOne.png";
import eduIconTwo from "../assets/cornerIcon/eduIconTwo.png";
import eduIconThree from "../assets/cornerIcon/eduIconThree.png";
import conversationIcon from "../assets/cornerIcon/conversationIcon.png";
import cultureIcon from "../assets/cornerIcon/cultureIcon.png";
import practiceIcon from "../assets/cornerIcon/practiceIcon.png";
import grammarIcon from "../assets/cornerIcon/grammarIcon.png";
import wordIcon from "../assets/cornerIcon/wordIcon.png";
import patternIcon from "../assets/cornerIcon/patternIcon.png";
import metaIcon from "../assets/cornerIcon/metaIcon.png";
import review_test_icon from "../assets/cornerIcon/review_test_icon.png";
import word_test_icon from "../assets/cornerIcon/word_test_icon.png";

const useCornerIconMapper = () => {
  const cornerIconMapper: Record<string, string> = {
    복습: reviseIcon,
    학습: eduIconOne,
    학습1: eduIconOne,
    학습2: eduIconTwo,
    학습3: eduIconThree,
    회화: conversationIcon,
    문화: cultureIcon,
    연습문제: practiceIcon,
    문법: grammarIcon,
    단어: wordIcon,
    패턴중국어: patternIcon,
    "주제별 표현(메타인지테스트)": metaIcon,
    "종합 테스트": practiceIcon,
    오답테스트: review_test_icon,
    단어테스트: word_test_icon,
  };

  const getCornerIcon = (cornerName: string) => {
    return cornerIconMapper[cornerName];
  };

  return {
    getCornerIcon,
  };
};

export default useCornerIconMapper;
