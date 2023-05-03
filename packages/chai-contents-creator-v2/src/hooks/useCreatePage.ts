import { Page, useLmsInputValue, useToast } from "chai-ui-v2";
import { useCallback, useEffect, useMemo } from "react";
import { savePageData } from "../api/lcms/lcms";
import { isDevEnv } from "../constants/env";
import usePage from "./usePage";
import usePageData from "./usePageData";
import { useRecoilState } from "recoil";
import { authState } from "../states/authState";

const useCreatePage = () => {
  const [isAuthorized] = useRecoilState(authState);
  const { lmsInputValue: initialDataFromPhp } = useLmsInputValue();

  const { pageId, turnId } = initialDataFromPhp || {};
  const returnUsePage = usePage();
  const { addToast } = useToast();

  const { setInitialPageData, pageData } = returnUsePage;

  const pageIdByEnv = useMemo(() => {
    if (isDevEnv) {
      return pageId || "38b83d31-07c4-4342-89a1-b249f628c03f";
    }
    return pageId || "";
  }, [pageId]);

  const cornerIdByEnv = useMemo(() => {
    if (isDevEnv) {
      return turnId || "ff6af93a-886f-48a0-9ed1-0a74549d26b5";
    }
    return turnId || "";
  }, [turnId]);

  const returnUsePageData = usePageData({
    pageId: pageIdByEnv,
    cornerId: cornerIdByEnv,
  });

  const {
    pageData: initialPageData,
    pageContentsUuid,
    refetchPageData,
  } = returnUsePageData;

  const handleSavePageData = useCallback(async () => {
    if (!pageContentsUuid) return;
    try {
      await savePageData({
        page: pageData as Page,
        cornerId: cornerIdByEnv,
        contentsUuid: pageContentsUuid,
      });
      refetchPageData();
      addToast("저장되었습니다.", "success");
    } catch (error) {
      console.log(error);
      addToast("저장에 실패했습니다. 다시 시도해주세요.", "error"); // TODO gth : custom toast message로 변경하기
    }
  }, [pageContentsUuid, pageData, refetchPageData, cornerIdByEnv, addToast]);

  useEffect(() => {
    if (!initialPageData) return;
    setInitialPageData(initialPageData);
  }, [initialPageData, setInitialPageData]);

  const isPageReady = useMemo(() => {
    return isAuthorized && !!initialPageData;
  }, [isAuthorized, initialPageData]);

  return {
    returnUsePage,
    handleSavePageData,
    initialPageData,
    isPageReady,
  };
};

export default useCreatePage;
