import { Page, ContentData } from "chai-ui-v2";

export const pageDataConverter = (pageData: ContentData): Page => {
  const { page_id, contents_data, pageArea_type, contents_type } = pageData;
  if (contents_type === "10") {
    return {
      ...JSON.parse(contents_data),
      pageAreaType: pageArea_type,
      contentsType: contents_type,
      id: page_id,
    } as Page;
  }
  const contentData = JSON.parse(contents_data);
  if (!contentData) {
    return {
      id: page_id,
      type: "singlePage",
      pageAreaType: pageArea_type,
      contentsType: contents_type,
      name: "문제",
      data: {
        id: 0,
        type: "TemplateQuestion",
        contents: {
          id: 0,
          type: "question",
          data: {
            interact_url: "",
            explan: "",
            interpet: "",
          },
        },
      },
    };
  }
  return {
    id: page_id,
    type: "singlePage",
    pageAreaType: pageArea_type,
    contentsType: contents_type,
    name: "문제",
    data: {
      id: page_id,
      type: "TemplateQuestion",
      contents: {
        id: contentData.id,
        type: "question",
        data: {
          ...contentData,
        },
      },
    },
  };
};
