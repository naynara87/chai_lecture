import { useQuery } from "@tanstack/react-query";
import { ID, useAuth, Page, CornerMeta, ContentData } from "chai-ui-v2";
import { useState } from "react";
import { getPageListData } from "../api/lcms";
import QUERY_KEY from "../constants/queryKey";
import { pageDataConverter } from "../util/converter";

const useCorner = (cornerId: ID | undefined) => {
  const { isAuthorized } = useAuth();
  const [pages, setPages] = useState<Page[]>([]);
  const [cornerMetaData, setCornerMetaData] = useState<CornerMeta>();

  useQuery(
    [QUERY_KEY.PAGES, String(cornerId)],
    () => {
      if (!cornerId) {
        return;
      }
      // return v2CornerDataList;
      return getPageListData(cornerId);
    },
    {
      enabled: isAuthorized && !!cornerId,
      onSuccess: (data) => {
        // const currentCorner = data?.find(
        //   (corner) => corner.meta.id.toString() === cornerId?.toString(),
        // );
        // setPages(currentCorner?.data!);
        // setCornerMetaData(currentCorner?.meta);
        // console.log("useCorner", cornerId, pages);

        const pages = data?.body?.data?.map((pageData: ContentData) =>
          pageDataConverter(pageData),
        );
        console.log("cornerData", data);
        setPages(pages!);
        setCornerMetaData(data?.body?.meta);
      },
      onError: (error) => {
        console.log("코너 리스트 조회 실패");
      },
    },
  );

  return { pages, cornerMetaData };
};

export default useCorner;
