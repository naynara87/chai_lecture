import { Page, isDevEnv, useToast } from "chai-ui-v2";
import { useCallback, useEffect, useMemo } from "react";
import { savePageData } from "../api/lcms/lcms";
import { InitialInputValue } from "../types/appData";
import usePage from "./usePage";
import usePageData from "./usePageData";
import { AxiosError } from "axios";
import useAuth from "./useAuth";

const useCreatePage = () => {
  const { isAuthorized, logout } = useAuth();
  const stringifiedValue =
    document.querySelector<HTMLInputElement>("#bubble-player")?.value;
  const initialDataFromPhp = stringifiedValue
    ? (JSON.parse(stringifiedValue) as InitialInputValue)
    : null;

  const { pageId, cornerId, lessonId } = initialDataFromPhp || {};
  const returnUsePage = usePage();
  const { addToast } = useToast();

  const { setInitialPageData, pageData } = returnUsePage;

  const pageIdByEnv = useMemo(() => {
    if (isDevEnv) {
      // return pageId || "38b83d31-07c4-4342-89a1-b249f628c03f";
      return pageId || "8b2add73-6277-4f98-9a7d-7832bd14ae44"; // lessonId 279번의 1번째 코너의 1번째 페이지
    }
    return pageId || "";
  }, [pageId]);

  const cornerIdByEnv = useMemo(() => {
    if (isDevEnv) {
      // return cornerId || "ff6af93a-886f-48a0-9ed1-0a74549d26b5";
      return cornerId || "41a51372-02ed-4093-b010-270a3088a819"; // lessonId 279번의 1번째 코너
    }
    return cornerId || "";
  }, [cornerId]);

  const lessonIdByEnv = useMemo(() => {
    if (isDevEnv) {
      return lessonId || "279"; // 개발서버 279번 레슨
    }
    return lessonId || "";
  }, [lessonId]);

  const returnUsePageData = usePageData({
    pageId: pageIdByEnv,
    cornerId: cornerIdByEnv,
    lessonId: lessonIdByEnv,
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
    } catch (_error: any) {
      const error = _error as AxiosError<any>;
      console.log(error);
      if (
        // 토큰 만료
        error.response?.status === 401
      ) {
        addToast("저장에 실패했습니다. 다시 시도해주세요.", "error");
        logout();
        return;
      }
      if (
        // 토큰 인증 실패
        error.response?.status === 403
      ) {
        addToast(
          "이용 시간이 경과하여 보안을 위해 자동 로그아웃 되었습니다.",
          "warning",
        );
        return;
      }

      addToast("저장에 실패했습니다. 다시 시도해주세요.", "error");
    }
  }, [
    pageContentsUuid,
    pageData,
    refetchPageData,
    cornerIdByEnv,
    addToast,
    logout,
  ]);

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
