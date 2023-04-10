import React, { useCallback, useEffect, useMemo } from "react";
import { getCookie, ID, InitialAppData } from "chai-ui-v2";
import { getPageUrl } from "../../util/url";
import { useNavigate } from "react-router-dom";
import useLesson from "../../hooks/useLesson";
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

  // TODO ready상태 만들어서 xapi initialize 전송
  const getUrl = useCallback(
    (nextCornerId: ID, nextPageId: ID) => {
      if (!lessonMetaData) return;
      const url = getPageUrl(
        lessonMetaData?.courseId,
        lessonMetaData.id,
        nextCornerId,
        nextPageId,
      );
      navigate(url);
    },
    [lessonMetaData, navigate],
  );

  const setInitialData = useCallback(async () => {
    if (!lessonMetaData) return;
    if (corners.length < 1) return;
    const currentCornerIndex = corners.findIndex(
      (corner) =>
        corner.id.toString() === learningLogCookieData?.cornerId?.toString(),
    );
    const pageId = corners[currentCornerIndex].pages.find(
      (pageId) => pageId.toString() === learningLogCookieData?.pageId,
    );
    if (
      lessonMetaData.lessonTpCd.toString() === "10" &&
      corners[currentCornerIndex] &&
      pageId
    ) {
      const confirmResult = await showContinueOpenModal();
      if (confirmResult) {
        // 이어서 학습
        getUrl(corners[currentCornerIndex].id, pageId);
        return;
      }
    }

    // 처음부터 학습
    getUrl(corners[0].id, corners[0].pages[0]);
    return;
  }, [
    corners,
    getUrl,
    lessonMetaData,
    showContinueOpenModal,
    learningLogCookieData?.cornerId,
    learningLogCookieData?.pageId,
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
