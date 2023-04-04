import { useQuery } from "@tanstack/react-query";
import { ID, useAuth, Page, CornerMeta } from "chai-ui-v2";
import { useState } from "react";
import QUERY_KEY from "../constants/queryKey";
import { v2CornerDataList, v2QuizCornerDataList } from "../data/dummyData";

const useCorner = (
  cornerId: ID | undefined,
  lessonTpCd: string | undefined,
) => {
  const { isAuthorized } = useAuth();
  const [pages, setPages] = useState<Page[]>([]);
  const [cornerMetaData, setCornerMetaData] = useState<CornerMeta>();

  useQuery(
    [QUERY_KEY.PAGES, String(cornerId)],
    () => {
      if (!cornerId) {
        return;
      }
      if (lessonTpCd !== "10") {
        return v2QuizCornerDataList;
      }
      return v2CornerDataList;
      // return getPageListData(cornerId);
    },
    {
      enabled: isAuthorized && !!cornerId,
      onSuccess: (data) => {
        const currentCorner = data?.find(
          (corner) => corner.meta.id.toString() === cornerId?.toString(),
        );
        setPages(currentCorner?.data ?? []);
        setCornerMetaData(currentCorner?.meta);

        // const pages = data?.body?.data?.map((pageData: ContentData) =>
        //   pageDataConverter(pageData),
        // );
        // console.log("cornerData", data);
        // setPages(pages!);
        // setCornerMetaData(data?.body?.meta);
      },
      onError: (error) => {
        console.log("페이지 리스트 조회 실패");
      },
      refetchOnWindowFocus: false,
    },
  );

  return { pages, cornerMetaData };
};

export default useCorner;
