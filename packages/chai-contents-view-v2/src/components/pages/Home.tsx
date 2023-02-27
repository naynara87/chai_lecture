import React, { useEffect } from "react";
import { ExampleButton } from "chai-ui-v2";
import { getPageUrl } from "../../util/url";
import { useNavigate } from "react-router-dom";
import useInitialData from "../../hooks/useInitialData";

const Home = () => {
  const navigate = useNavigate();
  const { lessonMetaData, cornerMetaData } = useInitialData();

  useEffect(() => {
    if (!lessonMetaData) return;
    if (!cornerMetaData) return;

    // TODO: 진도체크 API 호출 결과 반영하여 이어하기 기능 추가하기 -> useEffect로 코너 간지 거치지 않고 바로 시작
    const url = getPageUrl(
      lessonMetaData?.courseId,
      cornerMetaData?.lessonId,
      cornerMetaData.id,
      1,
    );
    navigate(url);
  }, [cornerMetaData, lessonMetaData, navigate]);

  return (
    <div>
      <h1>플레이어 Home</h1>
      <ExampleButton child={<div>버튼</div>} />
    </div>
  );
};

export default Home;
