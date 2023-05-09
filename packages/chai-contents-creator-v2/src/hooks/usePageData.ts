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

        addToast("페이지 데이터 조회 실패", "error");
      },
      refetchOnWindowFocus: false,
      staleTime: Infinity,
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
