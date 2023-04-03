import React, { useCallback, useEffect, useMemo } from "react";
import { getCookie, ID, InitialAppData } from "chai-ui-v2";
import { getPageUrl } from "../../util/url";
import { useNavigate } from "react-router-dom";
import useLesson from "../../hooks/useLesson";
import useCorner from "../../hooks/useCorner";
import styled from "@emotion/styled";
import { usePromiseConfirmModal } from "chai-ui-v2";

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
  const { modalContent, showOpenModal: showContinueOpenModal } =
    usePromiseConfirmModal({
      title: "학습 이어하기",
      description:
        " 아직 학습을 하지 않은 내용이 있어요.<br />지난 학습에 이어서 진행 하시겠어요?",
      leftButtonText: "처음부터 하기",
      rightButtonText: "이어서 하기",
    });
  const learningLogCookieData = getCookie<InitialAppData>("bubble-player");

  const lessonIdMemo: ID | undefined = useMemo(() => {
    return learningLogCookieData?.lessonId ?? 1;
  }, [learningLogCookieData?.lessonId]);

  const { lessonMetaData, corners } = useLesson(lessonIdMemo);

  const { cornerMetaData, pages } = useCorner(
    learningLogCookieData?.cornerId ?? corners[0]?.id,
  );

  // TODO ready상태 만들어서 xapi initialize 전송
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

  const setInitialData = useCallback(async () => {
    if (!lessonMetaData) return;
    if (corners.length < 1) return;
    if (pages.length < 1) return;
    const currentCornerIndex = corners.findIndex(
      (corner) =>
        corner.id.toString() === learningLogCookieData?.cornerId?.toString(),
    );
    const currentPageIndex = pages.findIndex(
      (page) =>
        page.id.toString() === learningLogCookieData?.pageId?.toString(),
    );
    if (
      lessonMetaData.lessonTpCd.toString() === "10" &&
      corners[currentCornerIndex] &&
      pages[currentPageIndex]
    ) {
      const confirmResult = await showContinueOpenModal();
      if (confirmResult) {
        getUrl(corners[currentCornerIndex].id, pages[currentPageIndex].id);
        return;
      }
    }
    getUrl(corners[0].id, pages[0].id);
    return;
  }, [
    corners,
    learningLogCookieData,
    getUrl,
    pages,
    showContinueOpenModal,
    lessonMetaData,
  ]);

  useEffect(() => {
    setInitialData();
  }, [setInitialData]);

  return (
    <>
      <Loader />
      {modalContent}
    </>
  );
};

export default Home;
