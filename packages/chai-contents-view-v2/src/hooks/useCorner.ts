import { useQuery } from "@tanstack/react-query";
import { ID, useAuth, Page, CornerMeta } from "chai-ui-v2";
import { useState } from "react";
import QUERY_KEY from "../constants/queryKey";
import { v2CornerDataList } from "../data/dummyData";

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
      return v2CornerDataList;
    },
    {
      enabled: isAuthorized && !!cornerId,
      onSuccess: (data) => {
        const currentCorner = data?.find(
          (corner) => corner.meta.id.toString() === cornerId?.toString(),
        );
        setPages(currentCorner?.data!);
        setCornerMetaData(currentCorner?.meta);
      },
      onError: (error) => {
        console.log("코너 리스트 조회 실패");
      },
    },
  );

  return { pages, cornerMetaData };
};

export default useCorner;
