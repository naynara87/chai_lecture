import { Page } from "chai-ui-v2";
import { useCallback, useEffect } from "react";
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

  const returnUsePageData = usePageData({
    pageId: pageId || isDevEnv ? "d80ccb9f-8db4-4a8b-844a-24d76183a037" : "",
    cornerId:
      cornerId || isDevEnv ? "f820ed45-3dbe-407f-b777-db46ff05183c" : "",
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
        cornerId:
          cornerId || isDevEnv ? "f820ed45-3dbe-407f-b777-db46ff05183c" : "",
        contentsUuid: pageContentsUuid,
      });
      refetchPageData();
      toast("저장되었습니다.", { type: "success" });
    } catch (error) {
      console.log(error);
      toast("저장에 실패했습니다. 다시 시도해주세요.", { type: "error" }); // TODO gth : custom toast message로 변경하기
    }
  }, [pageContentsUuid, pageData, refetchPageData, cornerId]);

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
