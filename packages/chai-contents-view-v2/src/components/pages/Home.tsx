import React, { useCallback, useEffect } from "react";
import { ExampleButton, ID } from "chai-ui-v2";
import { getPageUrl } from "../../util/url";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { currentCornerIdState } from "../../state/currentCornerId";
import useLesson from "../../hooks/useLesson";
import useCorner from "../../hooks/useCorner";

const Home = () => {
  const navigate = useNavigate();
  const { lessonMetaData, corners } = useLesson(1);
  const [currentCornerId] = useRecoilState(currentCornerIdState);
  const { cornerMetaData } = useCorner(currentCornerId ?? corners[0]?.id);

  const getUrl = useCallback(
    (nextCornerId: ID) => {
      if (!lessonMetaData) return;
      if (!cornerMetaData) return;
      const url = getPageUrl(
        lessonMetaData?.courseId,
        cornerMetaData?.lessonId,
        nextCornerId,
        1,
      );
      navigate(url);
    },
    [cornerMetaData, lessonMetaData, navigate],
  );

  const setCurrentCorner = useCallback(() => {
    if (corners.length < 1) return;
    const currentCornerIndex = corners.findIndex(
      (corner) => corner.id.toString() === currentCornerId?.toString(),
    );
    const nextCorner = corners[currentCornerIndex + 1];
    getUrl(nextCorner.id);
  }, [corners, currentCornerId, getUrl]);

  useEffect(() => {
    setCurrentCorner();
  }, [setCurrentCorner]);

  return (
    <div>
      <h1>플레이어 Home</h1>
      <ExampleButton child={<div>버튼</div>} />
    </div>
  );
};

export default Home;
