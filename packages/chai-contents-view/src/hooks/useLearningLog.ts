import { useQuery } from "@tanstack/react-query";
import { ID, QUERY_KEY, useToast } from "chai-ui";
import { getLearningLog } from "../api/lms";
import useAuth from "./useAuth";

/**
 * @deprecated
 */
const useLearningLog = (lessonId: ID | undefined) => {
  const { isAuthorized } = useAuth();
  const { addToast } = useToast();

  // 학습 이력 조회
  const { data: learningLogData } = useQuery(
    [QUERY_KEY.LEARNING_LOG, String(lessonId)],
    () => {
      if (!lessonId) {
        return;
      }
      return getLearningLog(lessonId);
    },
    {
      enabled: isAuthorized && !!lessonId,
      onError: (error) => {
        addToast("학습 이력 조회 실패", "error");
      },
    },
  );

  return { learningLogData };
};

export default useLearningLog;