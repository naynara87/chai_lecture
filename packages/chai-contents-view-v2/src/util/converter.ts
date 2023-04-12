import { Page, ContentData } from "chai-ui-v2";

export const pageDataConverter = (pageData: ContentData): Page => {
  const { page_id, contents_data, contents_type } = pageData;
  if (contents_type === "10") {
    return {
      ...JSON.parse(contents_data),
      id: page_id,
    } as Page;
  }
  return {
    id: page_id,
    type: "singlePage",
    name: "문제",
    data: {
      id: page_id,
      type: "TemplateQuestion",
      contents: {
        id: JSON.parse(contents_data).id,
        type: "question",
        data: {
          ...JSON.parse(contents_data),
        },
      },
    },
  };
};
