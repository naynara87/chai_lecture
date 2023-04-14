import { Page, ContentData } from "chai-ui-v2";

export const pageDataConverter = (pageData: ContentData): Page => {
  const {
    page_id,
    contents_data,
    pageArea_type,
    contents_type,
    pageStyle_code,
  } = pageData;
  if (contents_type === "10") {
    return {
      ...JSON.parse(contents_data),
      pageAreaType: pageArea_type,
      contentsType: contents_type,
      pageStyleCode: pageStyle_code,
      id: page_id,
    } as Page;
  }
  const contentData = JSON.parse(contents_data);
  return {
    id: page_id,
    type: "singlePage",
    pageAreaType: pageArea_type,
    contentsType: contents_type,
    pageStyleCode: pageStyle_code,
    name: "문제",
    data: {
      id: page_id,
      type: "TemplateQuestion",
      contents: {
        id: contentData?.id,
        type: "question",
        data: {
          ...contentData,
        },
      },
    },
  };
};
