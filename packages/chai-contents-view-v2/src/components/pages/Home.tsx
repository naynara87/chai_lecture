import React, { useEffect } from "react";
import { ExampleButton } from "chai-ui-v2";
import { getPageUrl } from "../../util/url";
import { useNavigate } from "react-router-dom";
import useInitialData from "../../hooks/useInitialData";
import { useRecoilState } from "recoil";
import { currentCornerIdState } from "../../state/currentCornerId";

const Home = () => {
  const navigate = useNavigate();
  const { lessonMetaData, cornerMetaData, corners } = useInitialData();
  const [currentCornerId] = useRecoilState(currentCornerIdState);

  useEffect(() => {
    if (!lessonMetaData) return;
    if (!cornerMetaData) return;
    const currentCornerIndex = corners.findIndex(
      (corner) => corner.id.toString() === currentCornerId?.toString(),
    );
    const nextCorner = corners[currentCornerIndex + 1];
    if (!nextCorner) return;
    const url = getPageUrl(
      lessonMetaData?.courseId,
      cornerMetaData?.lessonId,
      nextCorner.id,
      1,
    );
    navigate(url);
  }, [cornerMetaData, lessonMetaData, navigate, currentCornerId, corners]);

  return (
    <div>
      <h1>플레이어 Home</h1>
      <ExampleButton child={<div>버튼</div>} />
    </div>
  );
};

export default Home;
