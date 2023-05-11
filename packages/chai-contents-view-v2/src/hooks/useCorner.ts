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

const useCorner = (cornerId: ID | undefined) => {
  const { isAuthorized, logout } = useAuth();
  const [pages, setPages] = useState<Page[]>([]);
  const [cornerMetaData, setCornerMetaData] = useState<CornerMeta>();
  const { lmsInputValue: initialDataFromPhp } = useLmsInputValue();
  const { addToast } = useToast();

  const { refetch } = useQuery(
    [QUERY_KEY.PAGES, String(cornerId)],
    ({ queryKey }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, _cornerId] = queryKey;
      if (!_cornerId && _cornerId !== "undefined") {
        return;
      }
      // if (lessonTpCd !== "10") {
      // return v2QuizCornerDataList;
      // }
      // return v2CornerDataList;
      return getPageListData(_cornerId, initialDataFromPhp?.type);
    },
    {
      enabled: isAuthorized && !!cornerId,
      onSuccess: (data) => {
        // const currentCorner = data?.find(
        //   (corner) => corner.meta.id.toString() === cornerId?.toString(),
        // );
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
          logout();
          return;
        }
        if (
          // 토큰 인증 실패
          error.response?.status === 403
        ) {
          addToast(
            "이용 시간이 경과하여 보안을 위해 자동 로그아웃 되었습니다.",
            "warning",
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
