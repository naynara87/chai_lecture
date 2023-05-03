import { useMemo } from "react";
import { AppType, ContextDetail, XapiIndicators } from "../types";

interface InitialAppData {
  uno: string;
  uid: string;
  name: string;
  applId: string;
  turnId?: string;
  courseId: string;
  pageId?: string;
  subjectId: string;
  courseName: string;
  lessonId: string;
  lessonName: string;
  type: AppType;
  object_context?: XapiIndicators | string;
  result_extensions?: XapiIndicators | string;
  context_details?: ContextDetail | string;
  extension_details?: XapiIndicators | string;
}

const useLmsInputValue = () => {
  const lmsInputValue = useMemo(() => {
    const stringifiedValue =
      document.querySelector<HTMLInputElement>("#bubble-player")?.value;
    return stringifiedValue
      ? (JSON.parse(stringifiedValue) as InitialAppData)
      : null;
  }, []);

  return {
    lmsInputValue,
  };
};

export default useLmsInputValue;
