import React, { useCallback, useEffect, useMemo } from "react";
import { getCookie, ID, InitialAppData } from "chai-ui-v2";
import { getPageUrl } from "../../util/url";
import { useNavigate } from "react-router-dom";
import useLesson from "../../hooks/useLesson";
import useCorner from "../../hooks/useCorner";
import styled from "@emotion/styled";

const Loader = styled.div`
  width: 20px;
  height: 20px;
  border: 5px solid #eeeeee;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const learningLogCookieData = getCookie<InitialAppData>("bubble-player");

  const lessonIdMemo: ID | undefined = useMemo(() => {
    return learningLogCookieData?.lessonId ?? 1;
  }, [learningLogCookieData?.lessonId]);

  const { lessonMetaData, corners } = useLesson(lessonIdMemo);

  const { cornerMetaData, pages } = useCorner(
    learningLogCookieData?.turnId ?? corners[0]?.id,
  );

  const getUrl = useCallback(
    (nextCornerId: ID, nextPageId: ID) => {
      if (!lessonMetaData) return;
      if (!cornerMetaData) return;
      const url = getPageUrl(
        lessonMetaData?.courseId,
        cornerMetaData?.lessonId,
        nextCornerId,
        nextPageId,
      );
      navigate(url);
    },
    [cornerMetaData, lessonMetaData, navigate],
  );

  const setInitialData = useCallback(() => {
    if (corners.length < 1) return;
    if (pages.length < 1) return;
    const currentCornerIndex = corners.findIndex(
      (corner) =>
        corner.id.toString() === learningLogCookieData?.turnId?.toString(),
    );
    const currentPageIndex = pages.findIndex(
      (page) =>
        page.id.toString() === learningLogCookieData?.pageId?.toString(),
    );
    const nextCorner = corners[currentCornerIndex] ?? corners[0];
    const nextPage = pages[currentPageIndex] ?? pages[0];

    getUrl(nextCorner.id, nextPage.id);
  }, [corners, learningLogCookieData, getUrl, pages]);

  useEffect(() => {
    setInitialData();
  }, [setInitialData]);

  return <Loader />;
};

export default Home;
