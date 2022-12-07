import { CornerData, CornerListDataMeta, PageData } from "../types/api/lcms";
import { AppMetaData, Corner2, Page } from "../types/appData";

export const pageDataConverter = (pageData: PageData): Page => {
  const { page_id, contents_data } = pageData;
  return {
    id: page_id,
    ...contents_data,
  } as Page;
};

export const cornerDataConverter = (cornerData: CornerData): Corner2 => {
  const { turnId, turnName } = cornerData;
  return {
    id: turnId,
    title: turnName,
    cornerIcon: `${process.env.PUBLIC_URL}/images/icon/img_sort_page01.png`, // TODO: 아이콘 매퍼를 추가해야 한다
    introduction: {
      title: cornerData.introduction.subTitle,
      description: cornerData.introduction.contents[0],
    },
    pages: cornerData.pages,
  };
};

export const appMetaDataConverter = (appMetaData: CornerListDataMeta): AppMetaData => {
  return {
    courseId: appMetaData?.subjectId ?? 1, // FIXME: 임시로 1을 넣어둠
    courseName: appMetaData?.subjectName ?? "dummyCourseName",
    lessonId: appMetaData.lessonId,
    lessonName: appMetaData.lessonName,
  };
};
