import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import useCorner from "../../hooks/useCorner";
import useLesson from "../../hooks/useLesson";
import { currentCornerIdState } from "../../state/currentCornerId";
import ContentsLayout from "./ContentsLayout";
import QuestionLayout from "./QuestionLayout";

const Layout = () => {
  const { cornerId } = useParams();
  const { lessonMetaData, corners } = useLesson(1);
  const { pages, cornerMetaData } = useCorner(cornerId);

  const [, setCurrentCornerId] = useRecoilState(currentCornerIdState);

  useEffect(() => {
    setCurrentCornerId(cornerId);
  }, [cornerId, setCurrentCornerId]);

  const layout = useMemo(() => {
    if (!lessonMetaData) return;
    if (!cornerMetaData) return;
    // NOTE ms 문제 템플릿일 경우 레이아웃 호출
    if (cornerMetaData.lessonTpCd === "30") {
      // todo ms lcms에서 데이터 받아와서 데이터 구성 필요
      const dummyData = [
        {
          id: 1,
          state: ''
        },
        {
          id: 2,
          state: ''
        }, {
          id: 3,
          state: ''
        }, {
          id: 4,
          state: ''
        }, {
          id: 5,
          state: 'end'
        }
      ];
      localStorage.setItem('pageData', JSON.stringify(dummyData));
      return <QuestionLayout pages={pages} />;
    } else {
      return (
        <ContentsLayout
          corners={corners}
          lessonMetaData={lessonMetaData}
          cornerMetaData={cornerMetaData}
          pages={pages}
        />
      );
    }
  }, [cornerMetaData, lessonMetaData, corners, pages]);

  return <>{layout}</>;
};

export default Layout;
