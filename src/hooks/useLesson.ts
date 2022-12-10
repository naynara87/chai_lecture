import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getCornerListData } from "../api/lcms";
import { QUERY_KEY } from "../constants/queryKey";
import { CornerData } from "../types/api/lcms";
import { AppMetaData, Corner2, ID } from "../types/appData";
import { appMetaDataConverter, cornerDataConverter } from "../utils/converter";
import useAuth from "./useAuth";
import useToast from "./useToast";

const useLesson = (lessonId: ID | undefined) => {
  const { isAuthorized } = useAuth();
  const { addToast } = useToast();
  const [corners, setCorners] = useState<Corner2[]>([]);
  const [appMetaData, setAppMetaData] = useState<AppMetaData>();

  // 코너 리스트 조회
  useQuery(
    [QUERY_KEY.CORNER_LIST, String(lessonId)],
    () => {
      if (!lessonId) {
        return;
      }
      return getCornerListData(lessonId);
    },
    {
      enabled: isAuthorized && !!lessonId,
      onSuccess: (data) => {
        const _corners = data?.body?.data.map((cornerData: CornerData) =>
          cornerDataConverter(cornerData),
        );
        setCorners(_corners ?? []);
        data?.body.meta && setAppMetaData(appMetaDataConverter(data?.body.meta));
      },
      onError: (error) => {
        addToast("코너 리스트 조회 실패", "error");
      },
    },
  );

  return { corners, appMetaData };
};

export default useLesson;
