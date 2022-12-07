import { useQuery } from "@tanstack/react-query";
import { getLearningLog } from "../api/lms";
import { QUERY_KEY } from "../constants/queryKey";
import { ID } from "../types/appData";
import useAuth from "./useAuth";
import useToast from "./useToast";

const useLearningLog = (lessonId: ID | undefined) => {
  const { isAuthorized } = useAuth();
  const { addToast } = useToast();

  // 학습 이력 조회
  const { data: learningLogData } = useQuery(
    [QUERY_KEY.LEARNING_LOG, lessonId],
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
