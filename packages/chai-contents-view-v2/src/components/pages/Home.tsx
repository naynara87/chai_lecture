import React, { useCallback, useEffect, useMemo } from "react";
import { ID, useLmsInputValue, xapiElement } from "chai-ui-v2";
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

const playerLoadedEvent = new CustomEvent("playerLoaded");

const Home = () => {
  const navigate = useNavigate();
  const { modalContent, showOpenModal: showContinueOpenModal } =
    usePromiseConfirmModal();
  const { lmsInputValue: initialDataFromPhp } = useLmsInputValue();

  const lessonIdMemo: ID | undefined = useMemo(() => {
    return initialDataFromPhp?.lessonId ?? 1;
  }, [initialDataFromPhp?.lessonId]);

  const { lessonMetaData, corners } = useLesson(lessonIdMemo);

  const getUrl = useCallback(
    (nextCornerId: ID, nextPageId: ID) => {
      if (!lessonMetaData) return;
      const url = getPageUrl(
        lessonMetaData?.courseId,
        lessonMetaData.id,
        nextCornerId,
        nextPageId,
      );
      xapiElement.dispatchEvent(playerLoadedEvent);
      navigate(url);
    },
    [lessonMetaData, navigate],
  );

  const goToFirstPage = useCallback(() => {
    getUrl(corners[0].id, corners[0].pages[0]);
  }, [corners, getUrl]);

  const setInitialData = useCallback(async () => {
    if (!lessonMetaData) return;
    if (corners.length < 1) return;

    if (!initialDataFromPhp?.turnId && !initialDataFromPhp?.pageId) {
      // 코너, 페이지 아이디 둘다 없는 경우 : 처음부터 학습
      goToFirstPage();
      return;
    }

    const currentCornerIndex = corners.findIndex(
      (corner) =>
        corner.id.toString() === initialDataFromPhp?.turnId?.toString(),
    );

    if (
      lessonMetaData.lessonTpCd.toString() === "10" &&
      corners[currentCornerIndex]
    ) {
      // NOTE gth 코너아이디는 있지만 페이지 아이디가 없으면 해당 코너의 첫 페이지로 이동
      const pageId =
        corners[currentCornerIndex].pages.find(
          (pageId) => pageId.toString() === initialDataFromPhp?.pageId,
        ) ?? corners[currentCornerIndex].pages[0];
      const confirmResult = await showContinueOpenModal({
        title: "학습 이어하기",
        description:
          " 아직 학습을 하지 않은 내용이 있어요.<br />지난 학습에 이어서 진행 하시겠어요?",
        leftButtonText: "처음부터 하기",
        rightButtonText: "이어서 하기",
      });
      if (confirmResult) {
        // 이어서 학습
        getUrl(corners[currentCornerIndex].id, pageId);
        return;
      }
    }

    // 처음부터 학습
    goToFirstPage();
    return;
  }, [
    corners,
    getUrl,
    lessonMetaData,
    showContinueOpenModal,
    initialDataFromPhp?.turnId,
    initialDataFromPhp?.pageId,
    goToFirstPage,
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
