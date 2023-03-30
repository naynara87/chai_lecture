import { useQuery } from "@tanstack/react-query";
import { ID, Page } from "chai-ui-v2";
import { useEffect, useMemo } from "react";
import { toast } from "react-toastify";
import { getPageListData } from "../api/lcms/lcms";
import { queryKey } from "../constants/queryKey";
import useAuth from "./useAuth";

type UsePageDataProps = {
  cornerId: ID;
  pageId?: ID;
};
const usePageData = ({ cornerId, pageId }: UsePageDataProps) => {
  const { isAuthorized } = useAuth();
  const { data: cornerDataResponse, refetch } = useQuery(
    [queryKey.lcmsCorner],
    () => {
      return getPageListData(cornerId);
    },
    {
      enabled: isAuthorized && !!cornerId,
      onError: (error) => {
        console.log(error);
        toast("페이지 데이터 조회 실패", { type: "error" });
      },
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  );

  useEffect(() => {
    console.log(
      "cornerDataResponse?.data.body.data",
      cornerDataResponse?.data.body.data,
    );
  });

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
