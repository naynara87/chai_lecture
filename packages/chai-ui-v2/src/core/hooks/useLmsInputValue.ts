import { useMemo } from "react";
import { AppType, ContextDetail, XapiIndicators, isDevEnv } from "../types";

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

const testData: InitialAppData = {
  uno: "1",
  uid: "12345",
  name: "버블콘테스트123",
  applId: "123456",
  courseId: "1",
  courseName: "red",
  subjectId: "1",
  lessonId: "279",
  lessonName: "red1",
  // turnId: "808e1d4a-725c-45a4-bef7-ab01aae81103",
  // pageId: "fa25b9ac-e940-46a6-a487-4410e32d784a",
  type: "lesson",
  object_context: {
    "https://profile.caihong.co.kr/content-management/course/local-content-id": 33, // 레슨 id
    "https://profile.caihong.co.kr/content-management/course/course-id": 123,
    "https://profile.caihong.co.kr/content-management/course/course-name":
      "개발콘텐츠",
    "https://profile.caihong.co.kr/content-management/course/course-name/chinese":
      "开发内容",
    "https://profile.caihong.co.kr/content-management/course/course-name/english":
      "development content",
    "https://profile.caihong.co.kr/content-management/course/course-name/spanish":
      "contenido de desarrollo",
    "https://profile.caihong.co.kr/content-management/course/course-type-id": 10,
    "https://profile.caihong.co.kr/content-management/course/course-type-name":
      "빨강",
    "https://profile.caihong.co.kr/content-management/course/image-id":
      "y1wbi6UjSRGxzCAPgZyKwujU",
    "https://profile.caihong.co.kr/content-management/course/image-url":
      "https://d3ck2c76fu5pug.cloudfront.net/assets/4ilM8sOn2dbqgxC7JbwlYcUN/tD0GrqAJnWmkRgWYgvgT20NSwV9NiPJR.jpeg",
    "https://profile.caihong.co.kr/content-management/course/lessons/lesson-name":
      "1레슨",
    "https://profile.caihong.co.kr/content-management/course/lessons/lesson-id": 123,
    "https://profile.caihong.co.kr/content-management/course/lessons/lesson-type-code": 10,
    "https://profile.caihong.co.kr/content-management/course/lessons": 10,
    "https://profile.caihong.co.kr/content-management/course/lessons/lesson": 3,
  },
  context_details: {
    registration: "cf3ca788-d7cc-464e-a654-a98a777d2372",
    revision: "1.0",
    contextActivities: {
      category: [
        {
          id: "https://profile.caihong.co.kr/xapi/profile/course",
          objectType: "Activity",
        },
      ],
      parent: [
        {
          definition: {
            description: {
              "en-US": "과정 설명",
            },
            name: {
              "en-US": "과정명",
            },
          },
          id: "https://profile.caihong.co.kr/content-management/course/",
          objectType: "Activity",
        },
      ],
    },
  },
  extension_details: {
    "https://profile.caihong.co.kr/content-management/course/subject-name":
      null,
    "https://profile.caihong.co.kr/content-management/course/subject-id": null,
    "https://profile.caihong.co.kr/content-management/course/curriculum-name":
      null,
    "https://profile.caihong.co.kr/content-management/course/curriculum-id":
      null,
    "https://profile.caihong.co.kr/content-management/course/recommendage-name":
      null,
    "https://profile.caihong.co.kr/content-management/course/recommendage-id":
      null,
    "https://profile.caihong.co.kr/content-management/course/learning-type-name":
      null,
    "https://profile.caihong.co.kr/content-management/course/learning-type-id":
      null,
    "https://profile.caihong.co.kr/content-management/course/difficulty-name":
      null,
    "https://profile.caihong.co.kr/content-management/course/difficulty-id":
      null,
    "https://profile.caihong.co.kr/content-management/course/year": null,
    "https://profile.caihong.co.kr/content-management/course/rating-name": null,
    "https://profile.caihong.co.kr/content-management/course/rating-id": null,
    "https://profile.caihong.co.kr/content-management/course/publiccourse-name":
      null,
    "https://profile.caihong.co.kr/content-management/course/publiccourse-id":
      null,
    "https://profile.caihong.co.kr/content-management/course/registration-date":
      null,
    "https://profile.caihong.co.kr/course-management/course/education-type-name":
      "디지털",
    "https://profile.caihong.co.kr/course-management/course/education-type-code":
      "ET01",
    "https://profile.caihong.co.kr/course-management/course/course-name":
      "[디지털] 과정 101",
    "https://profile.caihong.co.kr/course-management/course/course-name-id": 101,
    "https://profile.caihong.co.kr/course-management/course/course-code":
      "CSR101",
    "https://profile.caihong.co.kr/course-management/course/classification-name":
      null,
    "https://profile.caihong.co.kr/course-management/course/classification-code":
      null,
    "https://profile.caihong.co.kr/course-management/course/category-name":
      null,
    "https://profile.caihong.co.kr/course-management/course/category-code":
      null,
    "https://profile.caihong.co.kr/course-management/course/recommendage-name":
      null,
    "https://profile.caihong.co.kr/course-management/course/recommendage-code":
      null,
    "https://profile.caihong.co.kr/course-management/course/period": null,
    "https://profile.caihong.co.kr/course-management/course/use": null,
    "https://profile.caihong.co.kr/course-management/course/registration-date":
      null,
    "https://profile.caihong.co.kr/product-management/course/product-code":
      "CH00241",
    "https://profile.caihong.co.kr/product-management/course/producttype-code":
      "PGC01",
    "https://profile.caihong.co.kr/product-management/course/classification-name":
      "주니어",
    "https://profile.caihong.co.kr/product-management/course/classification-code":
      "B001",
    "https://profile.caihong.co.kr/product-management/course/category-name":
      null,
    "https://profile.caihong.co.kr/product-management/course/category-code":
      null,
    "https://profile.caihong.co.kr/product-management/course/education-type-name":
      "방문",
    "https://profile.caihong.co.kr/product-management/course/education-type-code":
      "ET01",
    "https://profile.caihong.co.kr/product-management/course/recommendage-name":
      null,
    "https://profile.caihong.co.kr/product-management/course/recommendage-code":
      null,
    "https://profile.caihong.co.kr/product-management/course/product-name":
      "[결합] 학습용 결합상품 01",
    "https://profile.caihong.co.kr/product-management/course/product-id": 42,
    "https://profile.caihong.co.kr/product-management/course/pay": null,
    "https://profile.caihong.co.kr/product-management/course/period-name": null,
    "https://profile.caihong.co.kr/product-management/course/period-code": null,
    "https://profile.caihong.co.kr/product-management/course/display": null,
    "https://profile.caihong.co.kr/product-management/course/sale": null,
    "https://profile.caihong.co.kr/product-management/course/price": null,
    "https://profile.caihong.co.kr/product-management/course/review-period":
      null,
    "https://profile.caihong.co.kr/product-management/course/registration-date":
      null,
    "https://profile.caihong.co.kr/content-management/course/lessons/pages": 20,
  },
};

const useLmsInputValue = () => {
  const lmsInputValue = useMemo(() => {
    if (isDevEnv) {
      return testData;
    }
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
