import { useQuery } from "@tanstack/react-query";
import {
  ID,
  useAuth,
  CornerListData,
  LessonMeta,
  useLmsInputValue,
} from "chai-ui-v2";
import { useState } from "react";
import { getCornerListData } from "../api/lcms";
import QUERY_KEY from "../constants/queryKey";
import { AxiosError } from "axios";

const useLesson = (lessonId: ID | undefined) => {
  const { isAuthorized, logout } = useAuth();
  const [corners, setCorners] = useState<CornerListData[]>([]);
  const [lessonMetaData, setLessonMetaData] = useState<LessonMeta>();
  const [totalPages, setTotalPages] = useState<ID[]>([]);
  const { lmsInputValue: initialDataFromPhp } = useLmsInputValue();

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
      return getCornerListData(lessonId, initialDataFromPhp?.type);
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
      onError: (_error) => {
        console.log("코너 리스트 조회 실패");
        const error = _error as AxiosError<any>;
        console.log(error);
        if (
          // TODO gth : 토큰 만료 조건 조정 필요 - LCMS와 협의 필요
          error.response?.data.exception ===
          "io.bubblecon.contentshub.api.common.jwt.exception.NotHeaderException"
        ) {
          // addToast(
          //   "이용 시간이 경과하여 보안을 위해 자동 로그아웃 되었습니다.",
          //   "warning",
          // );
          logout();
          return;
        }
      },
      refetchOnWindowFocus: false,
    },
  );

  return { corners, lessonMetaData, totalPages };
};

export default useLesson;
