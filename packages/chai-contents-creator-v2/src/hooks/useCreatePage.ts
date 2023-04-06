import { Page } from "chai-ui-v2";
import { useCallback, useEffect, useMemo } from "react";
import { toast } from "react-toastify";
import { savePageData } from "../api/lcms/lcms";
import { isDevEnv } from "../constants/env";
import { InitialInputValue } from "../types/appData";
import usePage from "./usePage";
import usePageData from "./usePageData";

const useCreatePage = () => {
  const stringifiedValue =
    document.querySelector<HTMLInputElement>("#bubble-player")?.value;
  const initialDataFromPhp = stringifiedValue
    ? (JSON.parse(stringifiedValue) as InitialInputValue)
    : null;

  const { pageId, cornerId } = initialDataFromPhp || {};
  const returnUsePage = usePage();

  const { setInitialPageData, pageData } = returnUsePage;

  const pageIdByEnv = useMemo(() => {
    if (isDevEnv) {
      return pageId || "38b83d31-07c4-4342-89a1-b249f628c03f";
    }
    return pageId || "";
  }, [pageId]);

  const cornerIdByEnv = useMemo(() => {
    if (isDevEnv) {
      return cornerId || "ff6af93a-886f-48a0-9ed1-0a74549d26b5";
    }
    return cornerId || "";
  }, [cornerId]);

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
      toast("저장되었습니다.", { type: "success" });
    } catch (error) {
      console.log(error);
      toast("저장에 실패했습니다. 다시 시도해주세요.", { type: "error" }); // TODO gth : custom toast message로 변경하기
    }
  }, [pageContentsUuid, pageData, refetchPageData, cornerIdByEnv]);

  useEffect(() => {
    if (!initialPageData) return;
    setInitialPageData(initialPageData);
  }, [initialPageData, setInitialPageData]);

  return {
    returnUsePage,
    handleSavePageData,
    initialPageData,
  };
};

export default useCreatePage;
