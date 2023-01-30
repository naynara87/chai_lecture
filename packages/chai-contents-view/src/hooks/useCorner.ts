import { useQuery } from "@tanstack/react-query";
import { ID, Page, PageData, pageDataConverter, QUERY_KEY, useToast } from "chai-ui";
import { useState } from "react";
import { getPageListData } from "../api/lcms";
import useAuth from "./useAuth";

const useCorner = (cornerId: ID | undefined) => {
  const { isAuthorized } = useAuth();
  const { addToast } = useToast();
  const [pages, setPages] = useState<Page[]>([]);

  useQuery(
    [QUERY_KEY.PAGE_LIST, String(cornerId)],
    () => {
      if (!cornerId) {
        return;
      }
      return getPageListData(cornerId);
    },
    {
      enabled: isAuthorized && !!cornerId,
      onSuccess: (data) => {
        const _pages = data?.body?.data?.map((pageData: PageData) => pageDataConverter(pageData));
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
