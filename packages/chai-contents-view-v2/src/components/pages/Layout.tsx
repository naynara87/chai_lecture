import { LocalStorage, QuizData } from "chai-ui-v2";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import useCorner from "../../hooks/useCorner";
import useLesson from "../../hooks/useLesson";
import { currentCornerIdState } from "../../state/currentCornerId";
import ContentsLayout from "./ContentsLayout";
import QuestionLayout from "./QuestionLayout";

const Layout = () => {
  const { lessonId, cornerId } = useParams(); // 이게 나중 실행됨
  const { lessonMetaData, corners, totalPages } = useLesson(lessonId);
  const { pages, cornerMetaData } = useCorner(cornerId); // 이게 먼저 실행되고

  const [, setCurrentCornerId] = useRecoilState(currentCornerIdState);

  useEffect(() => {
    setCurrentCornerId(cornerId);
  }, [cornerId, setCurrentCornerId]);

  const layout = useMemo(() => {
    if (!lessonMetaData) return;
    if (!cornerMetaData) return;
    // NOTE ms 문제 템플릿일 경우 레이아웃 호출
    if (lessonMetaData.lessonTpCd.toString() !== "10") {
      // todo ms lcms에서 데이터 받아와서 데이터 구성 필요
      const quizData: QuizData[] = pages.map((page, pageIndex) => {
        return {
          id: pageIndex + 1,
          state: "",
          isCorrect: false,
        };
      });

      LocalStorage.setItem("pageData", quizData);
      return (
        <QuestionLayout
          pages={pages}
          lessonMetaData={lessonMetaData}
          cornerMetaData={cornerMetaData}
          totalPages={totalPages}
        />
      );
    } else {
      return (
        <ContentsLayout
          corners={corners}
          lessonMetaData={lessonMetaData}
          cornerMetaData={cornerMetaData}
          pages={pages}
          totalPages={totalPages}
        />
      );
    }
  }, [cornerMetaData, lessonMetaData, corners, pages, totalPages]);

  return <>{layout}</>;
};

export default Layout;
