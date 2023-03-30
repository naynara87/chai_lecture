import { useQuery } from "@tanstack/react-query";
import { ID, useAuth, CornerListData, LessonMeta } from "chai-ui-v2";
import { useState } from "react";
import QUERY_KEY from "../constants/queryKey";
import { v2LessonData } from "../data/dummyData";

const useLesson = (lessonId: ID | undefined) => {
  const { isAuthorized } = useAuth();
  const [corners, setCorners] = useState<CornerListData[]>([]);
  const [lessonMetaData, setLessonMetaData] = useState<LessonMeta>();
  const [totalPages, setTotalPages] = useState<(string | number)[]>([]);

  useQuery(
    [QUERY_KEY.CORNER, String(lessonId)],
    () => {
      if (!lessonId) {
        return;
      }
      return v2LessonData;
      // return getCornerListData(lessonId);
    },
    {
      enabled: isAuthorized && !!lessonId,
      onSuccess: (data) => {
        setCorners(data?.data!);
        setLessonMetaData(data?.meta!);
        data?.data.forEach((cornerListData) => {
          cornerListData.pages.forEach((page) => {
            setTotalPages((prev) => [...prev, page]);
          });
        });
        // console.log("lessonData", data);
        // setCorners(data?.body.data!);
        // setLessonMetaData(data?.body?.meta!);
        // data?.body.data.forEach((cornerListData) => {
        //   cornerListData.pages.forEach((page) => {
        //     setTotalPages((prev) => [...prev, page]);
        //   });
        // });
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
