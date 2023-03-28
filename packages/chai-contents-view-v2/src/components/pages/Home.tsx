import React, { useCallback, useEffect } from "react";
import { ID } from "chai-ui-v2";
import { getPageUrl } from "../../util/url";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { currentCornerIdState } from "../../state/currentCornerId";
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

  return <Loader />;
};

export default Home;
