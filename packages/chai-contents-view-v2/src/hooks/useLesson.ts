import { useQuery } from "@tanstack/react-query";
import { ID, useAuth, CornerListData, LessonMeta } from "chai-ui-v2";
import { useState } from "react";
import { getCornerListData } from "../api/lcms";
import QUERY_KEY from "../constants/queryKey";

const useLesson = (lessonId: ID | undefined) => {
  const { isAuthorized } = useAuth();
  const [corners, setCorners] = useState<CornerListData[]>([]);
  const [lessonMetaData, setLessonMetaData] = useState<LessonMeta>();
  const [totalPages, setTotalPages] = useState<ID[]>([]);

  useQuery(
    [QUERY_KEY.CORNER, String(lessonId)],
    () => {
      if (!lessonId) {
        return;
      }
      // if (lessonTpCd !== "10") {
      // return v2LessonQuizData;
      // }
      // return v2LessonData;
      return getCornerListData(lessonId);
    },
    {
      enabled: isAuthorized && !!lessonId,
      onSuccess: (data) => {
        setCorners(data?.body.data!);
        setLessonMetaData(data?.body?.meta!);
        const _totalPages =
          data?.body.data.reduce((acc, cur) => {
            return [...acc, ...cur.pages];
          }, [] as ID[]) ?? [];
        setTotalPages(_totalPages);
      },
      onError: (error) => {
        console.log("코너 리스트 조회 실패");
      },
      refetchOnWindowFocus: false,
    },
  );

  return { corners, lessonMetaData, totalPages };
};

export default useLesson;
