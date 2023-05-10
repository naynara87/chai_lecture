import { useQuery } from "@tanstack/react-query";
import { ID, Page, useToast } from "chai-ui-v2";
import { useMemo } from "react";
import { getPageListData } from "../api/lcms/lcms";
import { queryKey } from "../constants/queryKey";
import useAuth from "./useAuth";
import { AxiosError } from "axios";

type UsePageDataProps = {
  cornerId: ID;
  pageId?: ID;
};
const usePageData = ({ cornerId, pageId }: UsePageDataProps) => {
  const { addToast } = useToast();
  const { isAuthorized, logout } = useAuth();
  const { data: cornerDataResponse, refetch } = useQuery(
    [queryKey.lcmsCorner],
    () => {
      return getPageListData(cornerId);
    },
    {
      enabled: isAuthorized && !!cornerId,
      onError: (_error) => {
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

        addToast("페이지 데이터 조회 실패", "error");
      },
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: 1,
      retryDelay: 300,
    },
  );

  const pageServerData = useMemo(() => {
    if (!pageId) return;
    const page = cornerDataResponse?.data.body.data.find(
      (page) => page.page_id.toString() === pageId.toString(),
    );
    if (!page) {
      return;
    }
    return page;
  }, [cornerDataResponse, pageId]);

  const pageData = useMemo(() => {
    if (!pageServerData) return;
    return JSON.parse(pageServerData.contents_data) as Page;
  }, [pageServerData]);

  return {
    pageData,
    pageContentsUuid: pageServerData?.contents_uuid,
    refetchPageData: refetch,
  };
};

export default usePageData;
