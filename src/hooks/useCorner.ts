import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getPageListData } from "../api/lcms";
import { QUERY_KEY } from "../constants/queryKey";
import { ID, Page } from "../types/appData";
import { pageDataConverter } from "../utils/converter";
import useAuth from "./useAuth";
import useToast from "./useToast";

const useCorner = (cornerId: ID | undefined) => {
  const { isAuthorized } = useAuth();
  const { addToast } = useToast();
  const [pages, setPages] = useState<Page[]>([]);

  useQuery(
    [QUERY_KEY.PAGE_LIST, cornerId],
    () => {
      if (!cornerId) {
        return;
      }
      return getPageListData(cornerId);
    },
    {
      enabled: isAuthorized && !!cornerId,
      onSuccess: (data) => {
        const _pages = data?.body?.data?.map((pageData) => pageDataConverter(pageData));
        setPages(_pages ?? []);
      },
      onError: (error) => {
        addToast("페이지 리스트 조회 실패", "error");
      },
    },
  );

  return { pages };
};

export default useCorner;
