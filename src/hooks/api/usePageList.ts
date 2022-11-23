import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getPageListData } from "../../api/lcms";
import { QUERY_KEY } from "../../constants/queryKey";
import { ID } from "../../types/appData";
import useAuth from "../useAuth";

const usePageList = (_cornerId?: ID) => {
  const { isAuthorized } = useAuth();
  const { cornerId } = useParams();

  const cornerIdMemoString = useMemo(() => {
    if (cornerId) {
      return cornerId.toString();
    }
    return _cornerId?.toString();
  }, [_cornerId, cornerId]);

  const enableGetPage = useMemo(() => {
    if (isAuthorized && cornerIdMemoString) {
      return true;
    }
    return false;
  }, [isAuthorized, cornerIdMemoString]);

  const { data: pageList } = useQuery(
    [QUERY_KEY.PAGE_LIST, cornerIdMemoString],
    () => {
      if (cornerIdMemoString === undefined) {
        throw new Error("cornerId is undefined");
      }
      return getPageListData(cornerIdMemoString);
    },
    {
      refetchOnWindowFocus: false,
      enabled: enableGetPage,
      onError: (err) => {
        console.error(err);
      },
    },
  );

  useEffect(() => {
    console.log("pageList", pageList);
  }, [pageList]);

  return {
    pageList,
  };
};

export default usePageList;
