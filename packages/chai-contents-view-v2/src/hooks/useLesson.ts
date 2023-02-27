import { useQuery } from "@tanstack/react-query";
import { ID, useAuth, CornerListData, LessonMeta } from "chai-ui-v2";
import { useState } from "react";
import QUERY_KEY from "../constants/queryKey";
import { v2LessonData } from "../data/dummyData";

const useLesson = (lessonId: ID | undefined) => {
  const { isAuthorized } = useAuth();
  const [corners, setCorners] = useState<CornerListData[]>([]);
  const [lessonMetaData, setLessonMetaData] = useState<LessonMeta>();

  useQuery(
    [QUERY_KEY.CORNER, String(lessonId)],
    () => {
      if (!lessonId) {
        return;
      }
      return v2LessonData;
    },
    {
      enabled: isAuthorized && !!lessonId,
      onSuccess: (data) => {
        setCorners(data?.data!);
        setLessonMetaData(data?.meta!);
      },
      onError: (error) => {
        console.log("코너 리스트 조회 실패");
      },
    },
  );

  return { corners, lessonMetaData };
};

export default useLesson;
