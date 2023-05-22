import { useQuery } from "@tanstack/react-query";
import {
  ID,
  useAuth,
  CornerListData,
  LessonMeta,
  useLmsInputValue,
  useToast,
} from "chai-ui-v2";
import { useState } from "react";
import { getCornerListData } from "../api/lcms";
import QUERY_KEY from "../constants/queryKey";
import { AxiosError } from "axios";
// import { v2LessonData } from "../data/dummyData";
// import { v2LessonIncorrectQuizData } from "../data/dummyData";
// import { v2LessonQuizData } from "../data/dummyData";

const useLesson = (lessonId: ID | undefined) => {
  const { isAuthorized } = useAuth(); // logout
  const [corners, setCorners] = useState<CornerListData[]>([]);
  const [lessonMetaData, setLessonMetaData] = useState<LessonMeta>();
  const [totalPages, setTotalPages] = useState<ID[]>([]);
  const { lmsInputValue: initialDataFromPhp } = useLmsInputValue();
  const { addToast } = useToast();

  useQuery(
    [QUERY_KEY.CORNER, String(lessonId)],
    () => {
      if (!lessonId) {
        return;
      }
      // if (lessonTpCd !== "10") {
      // return v2LessonQuizData;
      // return v2LessonIncorrectQuizData;
      // }
      // return v2LessonData;
      return getCornerListData(lessonId, initialDataFromPhp?.type);
    },
    {
      enabled: isAuthorized && !!lessonId,
      onSuccess: (data) => {
        // const _corners: CornerListData[] = data?.data!;
        const _corners: CornerListData[] = data?.body.data!;

        // setLessonMetaData(data?.meta!);
        setLessonMetaData(data?.body?.meta!);

        // TODO kjw 추후 오답점검 레슨이 나눠지면 레슨에 구분값이 생길수도 있음. 현재는 구분할 수 있는 값이 없기때문에 아래와같이 작업
        // NOTE kjw 오답점검시 로직 start
        if (initialDataFromPhp?.incorrectPageDatas) {
          const _totalPages: ID[] = [];
          initialDataFromPhp.incorrectPageDatas.forEach((page) => {
            _totalPages.push(page.page_id);
          });
          // NOTE kjw 오답점검 코너에서는 pages가 있지않아 inputValue값으로 받은 데이터를 넣어줌
          _corners[0].pages = _totalPages;
          setCorners(_corners);
          setTotalPages(_totalPages);
          return;
        }
        // NOTE kjw 오답점검시 로직 end

        // data?.data.forEach((cornerListData) => {
        //   cornerListData.pages.forEach((page) => {
        //     setTotalPages((prev) => [...prev, page]);
        //   });
        // });
        // setCorners(data?.data!);

        setCorners(_corners);
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
          // 토큰 만료
          error.response?.status === 401
        ) {
          // logout();
          addToast(
            "이용 시간이 경과하여 보안을 위해 자동 로그아웃 되었습니다",
            "error",
          );
          return;
        }
        if (
          // 토큰 인증 실패
          error.response?.status === 403
        ) {
          addToast(
            "이용 시간이 경과하여 보안을 위해 자동 로그아웃 되었습니다",
            "error",
          );
          return;
        }
      },
      refetchOnWindowFocus: false,
      retry: 1,
      retryDelay: 300,
    },
  );

  return { corners, lessonMetaData, totalPages };
};

export default useLesson;
