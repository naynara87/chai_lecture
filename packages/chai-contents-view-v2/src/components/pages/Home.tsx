import React, { useEffect } from "react";
import { ExampleButton } from "chai-ui-v2";
import { getPageUrl } from "../../util/url";
import { useNavigate } from "react-router-dom";
import useInitialData from "../../hooks/useInitialData";
import { useRecoilState } from "recoil";
import { cornersState } from "../../state/corners";

const Home = () => {
  const navigate = useNavigate();
  const { lessonMetaData, cornerMetaData } = useInitialData();
  const [completedCorners] = useRecoilState(cornersState);

  useEffect(() => {
    if (!lessonMetaData) return;
    if (!cornerMetaData) return;
    const currentCorner = completedCorners.find((corner) => {
      return corner.isCompleted === false;
    });
    if (!currentCorner) return;
    const url = getPageUrl(
      lessonMetaData?.courseId,
      cornerMetaData?.lessonId,
      currentCorner.id,
      1,
    );
    navigate(url);
  }, [cornerMetaData, lessonMetaData, navigate, completedCorners]);

  return (
    <div>
      <h1>플레이어 Home</h1>
      <ExampleButton child={<div>버튼</div>} />
    </div>
  );
};

export default Home;
