import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getPageListData } from "../api/lcms";
import { QUERY_KEY } from "../constants/queryKey";
import { Page } from "../types/appData";
import { pageDataConverter } from "../utils/converter";
import useAuth from "./useAuth";
import useCornerListPage from "./useCornerListPage";
import useToast from "./useToast";

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
      onSuccess: (data) => {
        const _pages = data?.body?.data?.map((pageData) => pageDataConverter(pageData));
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
