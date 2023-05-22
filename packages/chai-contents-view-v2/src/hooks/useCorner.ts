import { useQuery } from "@tanstack/react-query";
import {
  ID,
  useAuth,
  Page,
  CornerMeta,
  ContentData,
  useLmsInputValue,
  useToast,
} from "chai-ui-v2";
import { useState } from "react";
import { getPageListData } from "../api/lcms";
import QUERY_KEY from "../constants/queryKey";
import { pageDataConverter } from "../util/converter";
import { AxiosError } from "axios";
// import { v2QuizCornerDataList } from "../data/dummyData";
import { getIncorrectPageListData } from "../api/lcms";
// import { v2IncorrectCornerDataList } from "../data/dummyData";
// import { v2CornerDataList } from "../data/dummyData";

const useCorner = (cornerId: ID | undefined, lessonId: ID | undefined) => {
  const { isAuthorized } = useAuth(); // logout
  const [pages, setPages] = useState<Page[]>([]);
  const [cornerMetaData, setCornerMetaData] = useState<CornerMeta>();
  const { lmsInputValue: initialDataFromPhp } = useLmsInputValue();
  const { addToast } = useToast();

  const { refetch } = useQuery(
    [QUERY_KEY.PAGES, String(cornerId)],
    ({ queryKey }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, _cornerId] = queryKey;
      if ((!_cornerId && _cornerId !== "undefined") || !lessonId) {
        return;
      }
      // if (lessonTpCd !== "10") {
      // return v2QuizCornerDataList;
      // return v2IncorrectCornerDataList;
      // }
      // return v2CornerDataList;
      return getPageListData(_cornerId, lessonId, initialDataFromPhp?.type);
    },
    {
      enabled: isAuthorized && !!cornerId,
      onSuccess: async (data) => {
        // const currentCorner = data?.find(
        //   (corner) => corner.meta.id.toString() === cornerId?.toString(),
        // );
        const currentCorner = { ...data?.body };

        // NOTE kjw 오답점검시 로직 start
        if (initialDataFromPhp?.incorrectPageDatas) {
          let pageIds = "";
          // NOTE kjw 배열데이터로 들어오는 값을 pageId만 추출하여 pageId들을 string으로 만듬
          initialDataFromPhp.incorrectPageDatas.forEach((page, pageIdx) => {
            if (pageIdx === 0) {
              pageIds += page.page_id;
            } else {
              pageIds += `, ${page.page_id}`;
            }
          });
          const datas = await getIncorrectPageListData(pageIds);

          // NOTE kjw api로 전달받는 page데이터값에 pageAreaCode값이 없어 inputValue로 받는 데이터를 넣어줌
          datas.body.list.forEach((pageData, pageIdx) => {
            if (!initialDataFromPhp?.incorrectPageDatas || !currentCorner?.data)
              return;
            currentCorner.data.push({
              ...pageData,
              pageArea_type:
                initialDataFromPhp?.incorrectPageDatas[pageIdx].page_area_code,
              pageStyle_code: null,
            });
            // currentCorner.data.push(
            //   pageDataConverter({
            //     ...pageData,
            //     pageArea_type:
            //       initialDataFromPhp?.incorrectPageDatas[pageIdx]
            //         .page_area_code,
            //     pageStyle_code: null,
            //   }),
            // );
          });
          const pages = data?.body?.data?.map((pageData: ContentData) =>
            pageDataConverter(pageData),
          );

          // setPages(currentCorner?.data!);
          setPages(pages!);
          setCornerMetaData(currentCorner?.meta);
          return;
        }
        // NOTE kjw 오답점검시 로직 end
        // setPages(currentCorner?.data ?? []);
        // setCornerMetaData(currentCorner?.meta);

        const pages = data?.body?.data?.map((pageData: ContentData) =>
          pageDataConverter(pageData),
        );
        setPages(pages!);
        setCornerMetaData(data?.body?.meta);
      },
      onError: (_error: any) => {
        console.log("페이지 리스트 조회 실패");
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

  return { pages, cornerMetaData, refetchPages: refetch };
};

export default useCorner;
