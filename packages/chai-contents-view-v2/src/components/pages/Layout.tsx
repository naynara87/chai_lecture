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
    if (cornerMetaData.lessonTpCd === "30") {
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
