import { useQuery } from "@tanstack/react-query";
import { Page, PageData, pageDataConverter, QUERY_KEY, useToast } from "chai-ui";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getPageListData } from "../api/lcms";
import { getPages } from "../data/tempApi";
import useAuth from "./useAuth";
import useCornerListPage from "./useCornerListPage";

const useCornerPage = () => {
  const { addToast } = useToast();
  const { isAuthorized } = useAuth();
  const [pages, setPages] = useState<Page[]>();

  const { cornerId } = useParams();

  const { currentCorner, appMetaData } = useCornerListPage();

  const cornerIdMemo = useMemo(() => {
    if (cornerId) {
      return cornerId;
    }
    return currentCorner?.id;
  }, [cornerId, currentCorner]);

  useQuery(
    [QUERY_KEY.PAGE_LIST, String(cornerIdMemo)],
    () => {
      if (!cornerIdMemo) {
        return;
      }
      return getPageListData(cornerIdMemo);
    },
    {
      enabled: isAuthorized && !!cornerIdMemo,
      onSuccess: async (data) => {
        if (process.env.NODE_ENV === "development") {
          const getPageList = await getPages(cornerId ?? 0);
          setPages(getPageList ?? []);
          return;
        }
        const _pages = data?.body?.data?.map((pageData: PageData) => pageDataConverter(pageData));
        setPages(_pages ?? []);
      },
      onError: (error) => {
        addToast("페이지 리스트 조회 실패", "error");
      },
    },
  );

  return { pages, currentCorner, appMetaData };
};

export default useCornerPage;
