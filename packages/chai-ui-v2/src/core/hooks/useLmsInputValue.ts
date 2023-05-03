import { useMemo } from "react";
import { AppType, ContextDetail, XapiIndicators } from "../types";
import useAES256 from "./useAES256";

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
  const { decryptAES256 } = useAES256();
  const lmsInputValue = useMemo(() => {
    const stringifiedValue =
      document.querySelector<HTMLInputElement>("#bubble-player")?.value;
    const parsingValue = stringifiedValue
      ? (JSON.parse(stringifiedValue) as InitialAppData)
      : null;

    if (parsingValue) {
      return {
        ...parsingValue,
        uid: decryptAES256(parsingValue?.uid),
        applId: decryptAES256(parsingValue?.applId),
        courseId: decryptAES256(parsingValue?.courseId),
        subjectId: decryptAES256(parsingValue?.subjectId),
        lessonId: decryptAES256(parsingValue?.lessonId),
        turnId: parsingValue.turnId
          ? decryptAES256(parsingValue?.turnId)
          : null,
        pageId: parsingValue.pageId
          ? decryptAES256(parsingValue?.pageId)
          : null,
      };
    } else {
      return null;
    }
  }, [decryptAES256]);

  return {
    lmsInputValue,
  };
};

export default useLmsInputValue;
