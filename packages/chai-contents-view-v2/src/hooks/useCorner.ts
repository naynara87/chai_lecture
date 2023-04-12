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

  const { refetch } = useQuery(
    [QUERY_KEY.PAGES, String(cornerId)],
    ({ queryKey }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, _cornerId] = queryKey;
      if (!_cornerId && _cornerId !== "undefined") {
        return;
      }
      // if (lessonTpCd !== "10") {
      // return v2QuizCornerDataList;
      // }
      // return v2CornerDataList;
      return getPageListData(_cornerId);
    },
    {
      enabled: isAuthorized && !!cornerId,
      onSuccess: (data) => {
        // const currentCorner = data?.find(
        //   (corner) => corner.meta.id.toString() === cornerId?.toString(),
        // );
        // setPages(currentCorner?.data ?? []);
        // setCornerMetaData(currentCorner?.meta);

        const pages = data?.body?.data?.map((pageData: ContentData) =>
          pageDataConverter(pageData),
        );
        setPages(pages!);
        setCornerMetaData(data?.body?.meta);
      },
      onError: (error) => {
        console.log("페이지 리스트 조회 실패");
      },
      refetchOnWindowFocus: false,
    },
  );

  return { pages, cornerMetaData, refetchPages: refetch };
};

export default useCorner;
